using System;
using System.Collections.Generic;
<<<<<<< HEAD
using System.ComponentModel.DataAnnotations;
=======
>>>>>>> 70019ad6cebd2e9b9c2853cba260c0dda4297cde

namespace WebPresentations.Models
{
    public class Presentation
    {
        public int PresentationId { get; set; }
        public String UserName { get; set; }
        public String Title { get; set; }
        public String Description { get; set; }
<<<<<<< HEAD
        [MaxLength]
        public String HtmlContents { get; set; }
        [MaxLength]
        public String Json { get; set; }
        public virtual ICollection<LikedUser> LikedUsers { get; set; }
=======
        public String Json { get; set; }
>>>>>>> 70019ad6cebd2e9b9c2853cba260c0dda4297cde
        public virtual ICollection<Tag> Tags { get; set; }

        public Presentation()
        {
            Tags = new HashSet<Tag>();
<<<<<<< HEAD
            LikedUsers = new HashSet<LikedUser>();
=======
>>>>>>> 70019ad6cebd2e9b9c2853cba260c0dda4297cde
        }
    }
}