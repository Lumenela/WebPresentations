//------------------------------------------------------------------------------
// <auto-generated>
//    This code was generated from a template.
//
//    Manual changes to this file may cause unexpected behavior in your application.
//    Manual changes to this file will be overwritten if the code is regenerated.
// </auto-generated>
//------------------------------------------------------------------------------

namespace WebPresentations.Models
{
    using System;
    using System.Collections.Generic;
    
    public partial class Presentation
    {
        public Presentation()
        {
            this.Tags = new HashSet<Tag>();
        }
    
        public int PresentationId { get; set; }
        public Nullable<int> UserId { get; set; }
        public string Title { get; set; }
        public string JsonString { get; set; }
    
        public virtual ICollection<Tag> Tags { get; set; }
    }
}