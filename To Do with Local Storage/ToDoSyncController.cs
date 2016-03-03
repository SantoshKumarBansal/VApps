using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.Mvc;
using AngularMVC.DbUtil;

namespace TodoListWithLocalStorage.Controllers
{
    public class ToDoSyncController : Controller
    {
        //
        // GET: /ToDoSync/

        public ActionResult Index()
        {
            return View();
        }
        DbUtility dbUtility = new DbUtility();

        public string getAllAssignedTaskList()
        {
            try
            {
                return dbUtility.GetDocumentByIdWithObjectId("Tasks", "IsDeleted", "N");
            }
            catch (Exception ex)
            {
                return "Error";
            }
        }
        public string syncAssignedTaskList(string tasks)
        {
            try
            {
                if (dbUtility.UpsertMultipleDocuments(tasks, "Tasks"))
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


    }
}
