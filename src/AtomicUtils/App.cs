using Microsoft.Extensions.CommandLineUtils;

namespace AtomicUtils
{
    class App : CommandLineApplication
    {
        public App()
        {            
            Commands.Add(new PackCommand());
            Commands.Add(new SetAllCommand());
            Commands.Add(new ExtractCabCommand());
            HelpOption("-h | -? | --help");
        }
    }
}
