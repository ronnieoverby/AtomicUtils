using System;
using static System.Console;
using Microsoft.Extensions.CommandLineUtils;
using System.Linq;
using System.IO;

namespace AtomicUtils
{
    class ExtractCabCommand : CommandLineApplication
    {
        private readonly CommandOption _preFile;
        private readonly CommandOption _target;

        public ExtractCabCommand()
        {
            Name = "extract-cab";
            Description = "extracts cab data from a preset file";
            _preFile = Option("-f | --file", "The preset file from which to extract the cab data", CommandOptionType.SingleValue);
            _target = Option("-t | --target", "The target cab file", CommandOptionType.SingleValue);
            HelpOption("-? | -h | --help");
            OnExecute((Func<int>)RunCommand);
        }

        private int RunCommand()
        {
            var targetPath = _target.Value();
            if (string.IsNullOrWhiteSpace(targetPath))
            {
                WriteLine("A target .cab file was not specified");
                return 1;
            }

            var presetPath = _preFile.Value();
            if (string.IsNullOrWhiteSpace(presetPath))
            {
                WriteLine("A source .pre file was not specified");
                return 1;
            }

            var preset = new FileInfo(presetPath);
            if (!preset.Exists)
            {
                WriteLine("The preset was not found");
                return 1;
            }

            var target = new FileInfo(targetPath);

            Amplifire.ExtractCab(preset, target);
            return 0;
        }
    }
}
