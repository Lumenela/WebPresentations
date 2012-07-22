using System.Data.Entity;

namespace WebPresentations.Models
{
    public class PresentationsEntities : DbContext
    {
        public DbSet<Presentation> Presentations { get; set; }
        public DbSet<Tag> Tags { get; set; }
<<<<<<< HEAD
        public DbSet<LikedUser> LikedUsers { get; set; }
=======
>>>>>>> 70019ad6cebd2e9b9c2853cba260c0dda4297cde
    }
}