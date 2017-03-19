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
    }
}
