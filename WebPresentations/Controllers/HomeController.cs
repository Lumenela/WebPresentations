using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.Mvc;
<<<<<<< HEAD
using System.Web.Script.Serialization;
using WebPresentations.TagCloud;
using WebPresentations.Models;
=======
>>>>>>> 70019ad6cebd2e9b9c2853cba260c0dda4297cde

namespace WebPresentations.Controllers
{
    public class HomeController : Controller
    {
        public ActionResult Index()
        {
            ViewBag.Message = "Web Presentations template project";
            return View();
        }

        public ActionResult About()
        {
            return View();
        }
<<<<<<< HEAD

        [HttpGet]
        public string GetTags()
        {
            var cloud = new TagCloud.TagCloud();
            var javaScriptSerializer = new JavaScriptSerializer();
            return javaScriptSerializer.Serialize(cloud.Cloud);
        }
=======
>>>>>>> 70019ad6cebd2e9b9c2853cba260c0dda4297cde
    }
}
