using System;
using System.ComponentModel.DataAnnotations;

namespace WebPresentations.ViewModels
{
    public class EditorViewModel
    {
        [Required(ErrorMessage = "Title is required.")]
<<<<<<< HEAD
        //[RegularExpression(@"\w+")]
        [MaxLength(100)]
        public String Title { get; set; }

        [Required(ErrorMessage = "Description is required.")]
        //[RegularExpression(@"\w+")]
        [MaxLength(100)]
=======
        [MaxLength(50)]
        public String Title { get; set; }

        [Required(ErrorMessage = "Description is required.")]
        [MaxLength(50)]
>>>>>>> 70019ad6cebd2e9b9c2853cba260c0dda4297cde
        public String Description { get; set; }

        [Required(ErrorMessage = "Json string was not submitted.")]
        public String Json { get; set; }

<<<<<<< HEAD
        [Required(ErrorMessage = "Contents were not submitted.")]
        public String HtmlContents { get; set; }

        [Required(ErrorMessage = "At least one tag is required.")]
        //[RegularExpression(@"\w+")]
        [MaxLength(100)]
=======
        [Required(ErrorMessage = "At least one tag is required.")]
>>>>>>> 70019ad6cebd2e9b9c2853cba260c0dda4297cde
        public String TagString { get; set; }
    }
}