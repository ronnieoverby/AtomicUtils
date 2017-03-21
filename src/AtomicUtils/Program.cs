using System;

namespace AtomicUtils
{
    public static class Program
    {
        public static int Main(params string[] args)
        {
            try
            {
                return new App().Execute(args);
            }
            catch (Exception ex)
            {
                Console.Write(ex);
                return 1;
            }
        }
    }
}
