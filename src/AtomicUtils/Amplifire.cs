using System;
using System.Collections.Generic;
using System.IO;
using System.IO.Compression;
using System.Text.RegularExpressions;

namespace AtomicUtils
{
    public static class Amplifire
    {
        public static void PackagePresets(IEnumerable<FileInfo> presetFiles, Stream output, int indexOffset = 0)
        {
            using (var zip = new ZipArchive(output, ZipArchiveMode.Create))
            {
                var i = indexOffset;
                foreach (var pre in presetFiles)
                {
                    var predef = File.ReadAllText(pre.FullName);
                    predef = ModifyPreIndex(predef, i++);

                    var entry = zip.CreateEntry($"Atomic_Amplifire_{i}.pre", CompressionLevel.Optimal);
                    using (var s = entry.Open())
                    using (var wr = new StreamWriter(s))
                        wr.Write(predef);
                }
            }
        }

        public static string ModifyPreIndex(string predef, int index) =>
            Regex.Replace(predef, @"(# File Type: Preset data, Index = )\d+", "${1}" + index);

        public static void SetEveryPreset(string predef, Stream output)
        {
            using (var zip = new ZipArchive(output, ZipArchiveMode.Create))
            {
                for (int i = 0; i < 128; i++)
                {
                    predef = ModifyPreIndex(predef, i);
                    var entry = zip.CreateEntry($"Atomic_Amplifire_{i}.pre", CompressionLevel.Optimal);
                    using (var s = entry.Open())
                    using (var wr = new StreamWriter(s))
                        wr.Write(predef);


                }
            }
        }

        delegate ProcessCabLines ProcessCabLines(IEnumerator<string> lines, StreamWriter wr);
        static readonly ProcessCabLines Complete = (_, __) => default(ProcessCabLines);
        static readonly ProcessCabLines Error = (_, __) => default(ProcessCabLines);

        public static void ExtractCab(FileInfo preset, FileInfo target)
        {
            ProcessCabLines process = ModifyFileType;

            using (var ps = preset.OpenRead())
            using (var rdr = new StreamReader(ps))
            using (var s = target.OpenWrite())
            using (var wr = new StreamWriter(s))
            using (var lines = rdr.ReadLines().GetEnumerator())
            {
                while (lines.MoveNext() && process != Complete && process != Error)
                    process = process(lines, wr);

                if (process != Complete)
                {
                    try
                    {
                        wr.Dispose();
                        target.Delete();
                    }
                    finally
                    {
                        throw new Exception("Source preset file was in an unexpected format.");
                    }
                }
            }
        }

        private static ProcessCabLines ModifyFileType(IEnumerator<string> lines, StreamWriter wr)
        {
            do
            {
                var line = lines.Current;
                if (!string.IsNullOrWhiteSpace(line))
                {
                    if (!line.Contains(@"# File Type: Preset data"))
                        return Error;

                    wr.WriteLine(line.Replace("Preset data", "User Cabinet data"));
                    wr.WriteLine();
                    wr.WriteLine();
                    wr.WriteLine();
                    return ClearSegments;
                }
                else
                {
                    wr.WriteLine(line);
                }

            } while (lines.MoveNext());

            return Error;
        }

        private static ProcessCabLines ClearSegments(IEnumerator<string> lines, StreamWriter wr)
        {
            do
            {
                var line = lines.Current;
                if (line.Contains("Data Segment 2: 8192 bytes excluding CRC"))
                {
                    wr.WriteLine("Data Segment 0: 8192 bytes excluding CRC");
                    return WriteSegments;
                }

            } while (lines.MoveNext());

            return Error;
        }

        private static ProcessCabLines WriteSegments(IEnumerator<string> lines, StreamWriter wr)
        {
            var ptn = @"Data Segment (\d+)(.*)";
            do
            {
                var line = lines.Current;
                if (true)
                {
                    if (Regex.IsMatch(line, ptn))
                    {
                        var line2 = Regex.Replace(line, ptn, m => $"Data Segment {int.Parse(m.Groups[1].Value) - 2}{m.Groups[2]}");
                        wr.WriteLine(line2);

                        if (line.Contains("# Data Segment 3 End"))
                            return FinishUp;
                    }
                    else
                    {
                        wr.WriteLine(line);
                    }
                }

            } while (lines.MoveNext());

            return Error;
        }

        private static ProcessCabLines FinishUp(IEnumerator<string> lines, StreamWriter wr)
        {
            do
            {
                var line = lines.Current;
                if (string.IsNullOrWhiteSpace(line) || line.Contains("CRC"))
                {
                    wr.WriteLine(line);
                }
                else
                {
                    return Error;
                }

            } while (lines.MoveNext());

            return Complete;
        }
    }
}
