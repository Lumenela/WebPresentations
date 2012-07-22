using System;
using System.Collections.Generic;

namespace WebPresentations.Models
{
    public class Tag
    {
        public int TagId { get; set; }
        public String Text { get; set; }
        public int Count { get; set; }
        public virtual ICollection<Presentation> Presentations { get; set; }

        public Tag()
        {
            Count = 1;
            Presentations = new HashSet<Presentation>();
        }
<<<<<<< HEAD

        public Tag(string text)
        {
            Text = text;
            Count = 0;
            Presentations = new HashSet<Presentation>();
        }
=======
>>>>>>> 70019ad6cebd2e9b9c2853cba260c0dda4297cde
    }
}