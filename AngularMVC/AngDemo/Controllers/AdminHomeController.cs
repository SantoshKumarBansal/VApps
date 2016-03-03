using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.Mvc;
using AngularMVC.DbUtil;
using MongoDB.Bson;
using Newtonsoft.Json;

namespace AngDemo.Controllers
{
    public class AdminHomeController : Controller
    {
        //
        // GET: /AdminHome/

        public ActionResult Index()
        {
            return View();
        }
        public ActionResult Home()
        {
            return View();
        }
         [HttpPost]
        public string Save(string Book)
        {
            DbUtility dbUtil = new DbUtility();
            dbUtil.SaveDocument(Book, "Test");
            return "Success";
        }
     
        public string getBookList()
        {
            DbUtility dbUtil = new DbUtility();
            return dbUtil.GetAllDocumentsWithObjectId("Test");
        }

        public bool deleteBook(string id)
        {
            DbUtility dbUtil = new DbUtility();
            return (dbUtil.DeleteDocumentByObjectId("Test",id));
        }
        public bool UpdateBook(string id)
        {
            DbUtility dbUtil = new DbUtility();
            return (dbUtil.ReplaceDocumentByObjectId("Test", id));
        }
        public string getBook(string id)
        {
            DbUtility dbUtil = new DbUtility();
            return dbUtil.GetDocumentByObjectIdWithObjectId("Test", "_id", id);
        }
        public bool editBook(string Book)
        {
            DbUtility dbUtil = new DbUtility();
            return (dbUtil.ReplaceDocumentByObjectId(Book,"Test"));
        }

        public dynamic validateLogin(dynamic login)
        {
            DbUtility dbUtil = new DbUtility();
            try
            {
                dynamic strLogin = JsonConvert.DeserializeObject(login);
                dynamic result = JsonConvert.DeserializeObject(dbUtil.GetDocumentsById("Master_Login", "LoginID", strLogin.loginID.Value));

                if (result[0] == null)
                {
                    return "Error";
                }
                else
                {
                    if (strLogin.Password.Value == result[0].Password.Value)
                    {
                        return result[0];
                    }
                    else
                    {
                        return "Error";
                    }
                }
            }
            catch (Exception ex)
            {
                return "Error";
            }
        }
        public string getUsersListByUserType(string userType)
        {
            DbUtility dbUtil = new DbUtility();
            try
            {
                return dbUtil.GetDocumentByIdWithObjectId("Master_Login", "UserType", userType);
            }
            catch (Exception ex)
            {
                return "Error";
            }
        }
        public bool issueBook(string id,string Book)
        {
            DbUtility dbUtil = new DbUtility();
            return (dbUtil.UpdateDocumentsByObjectIdForMultipleAttributes(id,"Test",Book));
        }
        public string getIssuedBookList(string issuedTo)
        {
            DbUtility dbUtil = new DbUtility();
            return dbUtil.GetDocumentByIdWithObjectId("Test", "issuedTo", issuedTo);
        }
        public string getUsersList()
        {
            DbUtility dbUtil = new DbUtility();
            try
            {
                return dbUtil.GetAllDocumentsWithObjectId("Master_Login");
            }
            catch (Exception ex)
            {
                return "Error";
            }
        }
        public string getAllOrderList()
        {
            DbUtility dbUtil = new DbUtility();
            try
            {
                return dbUtil.GetAllDocuments("Master_Login");
            }
            catch (Exception ex)
            {
                return "Error";
            }
        }

        public string getStudentList()
        {
            DbUtility dbUtil = new DbUtility();
            try
            {
                return dbUtil.GetAllDocuments("Master_Login");
            }
            catch (Exception ex)
            {
                return "Error";
            }
        }
        public string getBooksCountByStudent(string loginID)
        {
            DbUtility dbUtil = new DbUtility();
            try
            {
                return dbUtil.GetDocumentByIdWithObjectId("Test", "issuedTo", loginID);
            }
            catch (Exception ex)
            {
                return "Error";
            }
        }
    }
}
