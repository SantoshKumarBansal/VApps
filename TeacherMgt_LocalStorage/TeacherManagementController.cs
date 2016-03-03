using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.Mvc;
using AngularMVC.DbUtil;

namespace TeacherManagement.Controllers
{
    public class TeacherManagementController : Controller
    {
        //
        // GET: /TeacherManagement/

        public ActionResult Index()
        {
            return View();
        }
        DbUtility dbUtility = new DbUtility();

        public string syncTeacherDetails(string teacherDetails)
        {
            try
            {
                if (dbUtility.SaveDocuments(teacherDetails, "TeacherDetails"))
                {
                    return "Success";
                }
                else
                {
                    return "Error";
                }
            }
            catch (Exception ex)
            {
                return "Error";
            }
        }

        public string getStateList()
        {
            try
            {
                return dbUtility.GetAllDocuments("Master_State");
            }
            catch (Exception ex)
            {
                return "Error";
            }
        }
        public string getDistrictList(string stateName)
        {
            try
            {
                if (stateName == null)
                {
                    return "";
                }
                else
                {
                    return dbUtility.GetDocumentsById("Master_District", "StateName", stateName);
                }
            }
            catch (Exception ex)
            {
                return "Error";
            }
        }

    }
}
