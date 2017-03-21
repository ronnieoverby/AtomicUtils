using System;
using static System.Console;
using Microsoft.Extensions.CommandLineUtils;
using System.IO;

namespace AtomicUtils
{
    class SetAllCommand : CommandLineApplication
    {
        private readonly CommandOption _target;
        private readonly CommandOption _file;

        public SetAllCommand()
        {
            Name = "setall";
            Description = "sets a preset file at every slot in the target abu file";
            _target = Option("-t | --target", "the target abu file path", CommandOptionType.SingleValue);
            _file = Option("-f | --file", "the preset file", CommandOptionType.SingleValue);
            HelpOption("-? | -h | --help");
            OnExecute((Func<int>)RunCommand);
        }

        private int RunCommand()
        {
            var preset = _file.Value();
            if (string.IsNullOrWhiteSpace(preset))
            {
                WriteLine("A preset file was not specified");
                return 1;
            }
            var target = _target.Value();
            if (string.IsNullOrWhiteSpace(target))
            {
                WriteLine("A target .abu file was not specified");
                return 1;
            }

            var predef = File.ReadAllText(preset);
            using (var output = File.OpenWrite(target))
                Amplifire.SetEveryPreset(predef, output);

            return 0;
        }
    }
}
