using System;
<<<<<<< HEAD
using System.Globalization;
using System.Security.Principal;
using System.Text.RegularExpressions;
using System.Web;
using System.Web.Mvc;
using System.Web.Security;
using WebPresentations.MembershipLayer;
=======
using System.Collections.Generic;
using System.Linq;
using System.Net.Mail;
using System.Text.RegularExpressions;
using System.Web;
using System.Configuration;
using System.Web.Mvc;
using System.Web.Handlers;
using System.Web.Routing;
using System.Web.Security;
>>>>>>> 70019ad6cebd2e9b9c2853cba260c0dda4297cde
using WebPresentations.Models;

namespace WebPresentations.Controllers
{
<<<<<<< HEAD
    //[HandleErrorWithELMAH]
    public class AccountController : Controller
    {
        public AccountController() : this(null, null) { }

        public AccountController(IFormsAuthentication formsAuth, IMembershipService service)
        {
            FormsAuth = formsAuth ?? new FormsAuthenticationService();
            MembershipService = service ?? new AccountMembershipService();
        }

        public ActionResult ChangeCulture(string lang, string returnUrl)
        {
            Session["Culture"] = new CultureInfo(lang);
            return Redirect(returnUrl);
        }

        public IFormsAuthentication FormsAuth
        {
            get;
            private set;
        }

        public IMembershipService MembershipService
        {
            get;
            private set;
        }

        public ActionResult LogOn()
        {

            return View();
        }

        [HttpPost]
        [System.Diagnostics.CodeAnalysis.SuppressMessage("Microsoft.Design", "CA1054:UriParametersShouldNotBeStrings",
            Justification = "Needs to take same parameter type as Controller.Redirect()")]
=======
    public class AccountController : Controller
    {

        //
        // GET: /Account/LogOn

        public ActionResult LogOn()
        {
            return View();
        }

        //
        // POST: /Account/LogOn

        [HttpPost]
>>>>>>> 70019ad6cebd2e9b9c2853cba260c0dda4297cde
        public ActionResult LogOn(LogOnModel model, string returnUrl)
        {
            if (ModelState.IsValid)
            {
<<<<<<< HEAD
                if (ValidateLogOn(model.UserName, model.Password))
                {
                    string userName = MembershipService.GetCanonicalUsername(model.UserName);
                    FormsAuth.SignIn(userName, model.RememberMe);
=======
                if (Membership.ValidateUser(model.UserName, model.Password))
                {
                    FormsAuthentication.SetAuthCookie(model.UserName, model.RememberMe);
>>>>>>> 70019ad6cebd2e9b9c2853cba260c0dda4297cde
                    if (Url.IsLocalUrl(returnUrl) && returnUrl.Length > 1 && returnUrl.StartsWith("/")
                        && !returnUrl.StartsWith("//") && !returnUrl.StartsWith("/\\"))
                    {
                        return Redirect(returnUrl);
                    }
                    else
                    {
                        return RedirectToAction("Index", "Home");
                    }
                }
                else
                {
                    ModelState.AddModelError("", "The user name or password provided is incorrect.");
                }
            }
<<<<<<< HEAD
            return View(model);
        }

        public ActionResult LogOff()
        {

            FormsAuth.SignOut();
=======

            // If we got this far, something failed, redisplay form
            return View(model);
        }

        //
        // GET: /Account/LogOff

        public ActionResult LogOff()
        {
            FormsAuthentication.SignOut();
>>>>>>> 70019ad6cebd2e9b9c2853cba260c0dda4297cde

            return RedirectToAction("Index", "Home");
        }

<<<<<<< HEAD
        public ActionResult Register()
        {
            ViewBag.PasswordLength = MembershipService.MinPasswordLength;
            return View();
        }

=======
        //
        // GET: /Account/Register

        public ActionResult Register()
        {
            return View();
        }

        //
        // POST: /Account/Register
>>>>>>> 70019ad6cebd2e9b9c2853cba260c0dda4297cde
        [HttpPost]
        public ActionResult Register(RegisterModel model)
        {
            if (ModelState.IsValid)
            {
<<<<<<< HEAD
                ViewBag.PasswordLength = MembershipService.MinPasswordLength;

                if (ValidateRegistration(model.UserName, model.Email, model.Password, model.ConfirmPassword))
                {
                    MembershipCreateStatus createStatus = MembershipService.CreateUser(model.UserName, model.Password, model.Email);

                    if (createStatus == MembershipCreateStatus.Success)
                    {
                        // TODO: SendConfirmationEmail() might fail, try-catch here!
                        string confirmationGuid = Membership.GetUser(model.UserName).ProviderUserKey.ToString();
                        string confirmUrl = System.Web.HttpContext.Current.Request.Url.GetLeftPart(UriPartial.Authority) +
                            "/account/confirm?id=" + confirmationGuid;
                        var message = new MailService.MessageModel
                        {
                            UserName = model.UserName,
                            MessageSubject = "Registration confirmation from WebPresentations.com",
                            MessageBody = "Please follow the link below in order to activate your account:\n" + confirmUrl
                        };
                        MailService.SendConfirmationEmail(message);
                        return RedirectToAction("Confirmation", "Account");
                    }
                    else
                    {
                        ModelState.AddModelError("", ErrorCodeToString(createStatus));
                    }
                }
            }
            return View(model);
        }


=======
                // Attempt to register the user
                MembershipCreateStatus createStatus;
                Membership.CreateUser(model.UserName, model.Password, model.Email, null, null, false, null, out createStatus);
                if (createStatus == MembershipCreateStatus.Success)
                {
                    // TODO: SendConfrimationEmail() might fail, try-catch here!
                    SendConfrimationEmail(model.UserName);
                    return RedirectToAction("Confirmation", "Account");
                }
                else
                {
                    ModelState.AddModelError("", ErrorCodeToString(createStatus));
                }
            }

            // If we got this far, something failed, redisplay form
            return View(model);
        }

>>>>>>> 70019ad6cebd2e9b9c2853cba260c0dda4297cde
        //
        // GET: /Account/Confirmation

        public ActionResult Confirmation()
        {
            return View();
        }

        //
        // GET: /Account/Confirm?ID=

        public ActionResult Confirm(string id)
        {
            if (string.IsNullOrEmpty(id) || (!Regex.IsMatch(id,
                        @"[0-9a-f]{8}\-([0-9a-f]{4}\-){3}[0-9a-f]{12}")))
            {
                return View("Error");
            }
            else
            {
                MembershipUser user = Membership.GetUser(new Guid(id));

                if (!user.IsApproved)
                {
                    user.IsApproved = true;
                    Membership.UpdateUser(user);
                    FormsAuthentication.SetAuthCookie(user.UserName, false /* createPersistentCookie */);
<<<<<<< HEAD
=======
                    //FormsService.SignIn(user.UserName, false);
>>>>>>> 70019ad6cebd2e9b9c2853cba260c0dda4297cde
                    return RedirectToAction("RegistrationSuccess");
                }
                else
                {
                    FormsAuthentication.SignOut();
<<<<<<< HEAD
=======
                    //FormsService.SignOut();
>>>>>>> 70019ad6cebd2e9b9c2853cba260c0dda4297cde
                    TempData["errorMessage"] = "You have already confirmed your email address.";
                    return RedirectToAction("LogOn");
                }
            }
        }

        //
        // GET: /Account/RegistrationSuccess

        public ActionResult RegistrationSuccess()
        {
            return View();
        }

<<<<<<< HEAD
        [Authorize]
        public ActionResult ChangePassword()
        {

            ViewBag.PasswordLength = MembershipService.MinPasswordLength;

            return View();
        }

        [Authorize]
        [HttpPost]
        public ActionResult ChangePassword(string currentPassword, string newPassword, string confirmPassword)
        {
            ViewBag.PasswordLength = MembershipService.MinPasswordLength;

            if (!ValidateChangePassword(currentPassword, newPassword, confirmPassword))
            {
                return Json("Fail");
            }

            try
            {
                if (MembershipService.ChangePassword(User.Identity.Name, currentPassword, newPassword))
                {
                    return Json("Success");
                }
                else
                {
                    ModelState.AddModelError("_FORM", "The current password is incorrect or the new password is invalid.");
                    return Json("Fail");
                }
            }
            catch
            {
                ModelState.AddModelError("_FORM", "The current password is incorrect or the new password is invalid.");
                return Json("Fail");
            }
        }

        public ActionResult ChangePasswordSuccess()
        {

            return View();
        }

        protected override void OnActionExecuting(ActionExecutingContext filterContext)
        {
            if (filterContext.HttpContext.User.Identity is WindowsIdentity)
            {
                throw new InvalidOperationException("Windows authentication is not supported.");
            }
        }

        #region Validation Methods

        private bool ValidateChangePassword(string currentPassword, string newPassword, string confirmPassword)
        {
            if (String.IsNullOrEmpty(currentPassword))
            {
                ModelState.AddModelError("currentPassword", "You must specify a current password.");
            }
            if (newPassword == null || newPassword.Length < MembershipService.MinPasswordLength)
            {
                ModelState.AddModelError("newPassword",
                    String.Format(CultureInfo.CurrentCulture,
                         "You must specify a new password of {0} or more characters.",
                         MembershipService.MinPasswordLength));
            }

            if (!String.Equals(newPassword, confirmPassword, StringComparison.Ordinal))
            {
                ModelState.AddModelError("_FORM", "The new password and confirmation password do not match.");
            }

            return ModelState.IsValid;
        }

        private bool ValidateLogOn(string userName, string password)
        {
            if (String.IsNullOrEmpty(userName))
            {
                ModelState.AddModelError("username", "You must specify a username.");
            }
            if (String.IsNullOrEmpty(password))
            {
                ModelState.AddModelError("password", "You must specify a password.");
            }
            if (!MembershipService.ValidateUser(userName, password))
            {
                ModelState.AddModelError("_FORM", "The username or password provided is incorrect.");
            }

            return ModelState.IsValid;
        }

        private bool ValidateRegistration(string userName, string email, string password, string confirmPassword)
        {
            if (String.IsNullOrEmpty(userName))
            {
                ModelState.AddModelError("username", "You must specify a username.");
            }
            if (String.IsNullOrEmpty(email))
            {
                ModelState.AddModelError("email", "You must specify an email address.");
            }
            if (password == null || password.Length < MembershipService.MinPasswordLength)
            {
                ModelState.AddModelError("password",
                    String.Format(CultureInfo.CurrentCulture,
                         "You must specify a password of {0} or more characters.",
                         MembershipService.MinPasswordLength));
            }
            if (!String.Equals(password, confirmPassword, StringComparison.Ordinal))
            {
                ModelState.AddModelError("_FORM", "The new password and confirmation password do not match.");
            }
            return ModelState.IsValid;
        }

        private static string ErrorCodeToString(MembershipCreateStatus createStatus)
        {
            // See http://msdn.microsoft.com/en-us/library/system.web.security.membershipcreatestatus.aspx for
=======
        //
        // GET: /Account/ChangePassword

        [Authorize]
        public ActionResult ChangePassword()
        {
            return View();
        }

        //
        // POST: /Account/ChangePassword

        [Authorize]
        [HttpPost]
        public ActionResult ChangePassword(ChangePasswordModel model)
        {
            if (ModelState.IsValid)
            {

                // ChangePassword will throw an exception rather
                // than return false in certain failure scenarios.
                bool changePasswordSucceeded;
                try
                {
                    MembershipUser currentUser = Membership.GetUser(User.Identity.Name, true /* userIsOnline */);
                    changePasswordSucceeded = currentUser.ChangePassword(model.OldPassword, model.NewPassword);
                }
                catch (Exception)
                {
                    changePasswordSucceeded = false;
                }

                if (changePasswordSucceeded)
                {
                    return RedirectToAction("ChangePasswordSuccess");
                }
                else
                {
                    ModelState.AddModelError("", "The current password is incorrect or the new password is invalid.");
                }
            }

            // If we got this far, something failed, redisplay form
            return View(model);
        }

        //
        // GET: /Account/ChangePasswordSuccess

        public ActionResult ChangePasswordSuccess()
        {
            return View();
        }

        //Send confrimation Email
        private void SendConfrimationEmail(string userName)
        {
            MembershipUser user = Membership.GetUser(userName);
            string confirmationGuid = user.ProviderUserKey.ToString();
            string confirmUrl = System.Web.HttpContext.Current.Request.Url.GetLeftPart(UriPartial.Authority) +
                             "/account/confirm?id=" + confirmationGuid;
            // TODO: change confirmation email body
            var message = new MailMessage("iliketits.spambot@yahoo.com", user.Email)
            {
                Subject = "Registration confirmation from iLikeTits.com",
                Body = "Please follow the link below in order to activate your account:\n" + confirmUrl
            };
            var client = new SmtpClient();
            client.Send(message);
        }

        #region Status Codes
        private static string ErrorCodeToString(MembershipCreateStatus createStatus)
        {
            // See http://go.microsoft.com/fwlink/?LinkID=177550 for
>>>>>>> 70019ad6cebd2e9b9c2853cba260c0dda4297cde
            // a full list of status codes.
            switch (createStatus)
            {
                case MembershipCreateStatus.DuplicateUserName:
<<<<<<< HEAD
                    return "Username already exists. Please enter a different user name.";

                case MembershipCreateStatus.DuplicateEmail:
                    return "A username for that e-mail address already exists. Please enter a different e-mail address.";
=======
                    return "User name already exists. Please enter a different user name.";

                case MembershipCreateStatus.DuplicateEmail:
                    return "A user name for that e-mail address already exists. Please enter a different e-mail address.";
>>>>>>> 70019ad6cebd2e9b9c2853cba260c0dda4297cde

                case MembershipCreateStatus.InvalidPassword:
                    return "The password provided is invalid. Please enter a valid password value.";

                case MembershipCreateStatus.InvalidEmail:
                    return "The e-mail address provided is invalid. Please check the value and try again.";

                case MembershipCreateStatus.InvalidAnswer:
                    return "The password retrieval answer provided is invalid. Please check the value and try again.";

                case MembershipCreateStatus.InvalidQuestion:
                    return "The password retrieval question provided is invalid. Please check the value and try again.";

                case MembershipCreateStatus.InvalidUserName:
                    return "The user name provided is invalid. Please check the value and try again.";

                case MembershipCreateStatus.ProviderError:
                    return "The authentication provider returned an error. Please verify your entry and try again. If the problem persists, please contact your system administrator.";

                case MembershipCreateStatus.UserRejected:
                    return "The user creation request has been canceled. Please verify your entry and try again. If the problem persists, please contact your system administrator.";

                default:
                    return "An unknown error occurred. Please verify your entry and try again. If the problem persists, please contact your system administrator.";
            }
        }
        #endregion
<<<<<<< HEAD
=======

>>>>>>> 70019ad6cebd2e9b9c2853cba260c0dda4297cde
    }
}
