using System.Collections.Generic;
using System.IO;

namespace AtomicUtils
{
    static class Extensions
    {
        public static IEnumerable<string> ReadLines(this TextReader rdr)
        {
            string l;
            while ((l = rdr.ReadLine()) != null)
                yield return l;
        }
    }
}
