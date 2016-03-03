using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.Mvc;
using AngularMVC.DbUtil;
using MongoDB.Bson;

namespace TodoList.Controllers
{
    public class HomeController : Controller
    {
        public ActionResult Index()
        {
            ViewBag.Message = "Modify this template to jump-start your ASP.NET MVC application.";

            return View();
        }

        public ActionResult About()
        {
            ViewBag.Message = "Your app description page.";

            return View();
        }

        public ActionResult Contact()
        {
            ViewBag.Message = "Your contact page.";

            return View();
        }

        public string SaveTodoList(string task)
        {
            DbUtility dbUtil = new DbUtility();
            dbUtil.SaveDocument(task, "Task");
            return "Success";
        }
        public string getTaskList()
        {
            DbUtility dbUtil = new DbUtility();
            return dbUtil.GetAllDocumentsWithObjectId("Task");
        }
        public string getTaskListforEdit(string taskId)
        {
            DbUtility dbUtil = new DbUtility();
            return dbUtil.GetDocumentByObjectId("Task", "_id", taskId);
        }
        public bool getTaskListforDelete(string taskId)
        {
            DbUtility dbUtil = new DbUtility();
            return dbUtil.DeleteDocumentByObjectId("Task", taskId);
        }

        public bool markAsCompleteAssignedTask(string taskId, string Status)
        {
            DbUtility dbUtil = new DbUtility();
            return dbUtil.UpdateDocumentsByObjectId(taskId,"Task","Status",Status);
        }
    }
}
