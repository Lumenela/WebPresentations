using System.Collections.Generic;
using System.Linq;
using System.Text.RegularExpressions;
using System.Web.Mvc;
<<<<<<< HEAD
using WebPresentations.Caching;
using WebPresentations.DatabaseEntities;
using WebPresentations.Models;
using WebPresentations.ViewModels;


namespace WebPresentations.Controllers
{
    [Authorize]
    public class EditorController : EntityController
    {

        //
        // GET: /Editor/Create/

        public ActionResult Create()
=======
using WebPresentations.Models;
using WebPresentations.ViewModels;

namespace WebPresentations.Controllers
{
    [Authorize]
    public class EditorController : Controller
    {
        PresentationsEntities presentationsDB = new PresentationsEntities();

        //
        // GET: /Editor/View

        public ActionResult MyView()
>>>>>>> 70019ad6cebd2e9b9c2853cba260c0dda4297cde
        {
            return View();
        }

        //
<<<<<<< HEAD
        // POST: /Editor/Create/

        [HttpPost]
        public JsonResult Create(EditorViewModel model)
        {
            if (ModelState.IsValid)
            {
                var tags = Entities.ParseTags(model.TagString);
                var presentation = new Presentation
                {
                    Title = model.Title,
                    Description = model.Description,
                    Json = model.Json,
                    HtmlContents = model.HtmlContents,
                    Tags = tags,
                    UserName = User.Identity.Name
                };
                try
                {
                    Entities.AddToPresentations(presentation);
                    EntitiesIndexer.AddPresentationToIndex(presentation);
                    var cm = new WebPresentationsCacheManager();
                    cm.Flush();
                }
                catch
                {
                    return Json("Fail");
                }
                return Json("Success");
            }
            return Json("Fail");
        }

        //
        // GET: /Editor/Preview/

        public ActionResult Preview()
=======
        // GET: /Editor/Index

        public ActionResult Index()
        {
            return View(presentationsDB.Presentations.ToList());
        }

        //
        // GET: /Create/

        public ActionResult Create()
>>>>>>> 70019ad6cebd2e9b9c2853cba260c0dda4297cde
        {
            return View();
        }

        //
<<<<<<< HEAD
        // GET: /Editor/Edit?id=1

        public ActionResult Edit(int id)
        {
            var valid = Entities.UserOwnsPresentation(id, User.Identity.Name);
            return valid ? View(Entities.GetPresentation(id)) : View("Error");
        }

        //
        // GET: /Editor/Delete?id=1

        public JsonResult Delete(int id)
        {
            if (Entities.UserOwnsPresentation(id, User.Identity.Name))
            {
                try
                {
                    Entities.RemovePresentation(id);
                    EntitiesIndexer.RemovePresentationFromIndex(id);
                }
                catch
                {
                    return Json(new { message = "Fail" });
                }
                return Json(new { message = "Success" });
            }
            return Json(new { message = "Fail" });
=======
        // GET: /Create/

        [HttpPost]
        public ActionResult Create(EditorViewModel model)
        {
            if (ModelState.IsValid)
            {
                var tags = new List<Tag>();
                foreach (var input in Regex.Split(model.TagString, @"\s|,"))
                {
                    var tagText = input.ToLower();
                    var tagExists = presentationsDB.Tags.Any(g => g.Text == tagText);
                    if (tagExists)
                    {
                        var tag = presentationsDB.Tags.First(g => g.Text == tagText);
                        tag.Count++;
                        tags.Add(tag);
                    }
                    else
                    {
                        tags.Add(new Tag { Text = tagText });
                    }
                }
                var presentation = new Presentation
                {
                    Title = model.Title,
                    Description = model.Description,
                    Json = model.Json,
                    Tags = tags,
                    UserName = User.Identity.Name
                };
                presentationsDB.Presentations.Add(presentation);
                presentationsDB.SaveChanges();
                return View("Success");
            }
            else
            {
                return View(model);
            }
        }

        protected override void Dispose(bool disposing)
        {
            presentationsDB.Dispose();
            base.Dispose(disposing);
>>>>>>> 70019ad6cebd2e9b9c2853cba260c0dda4297cde
        }
    }
}
