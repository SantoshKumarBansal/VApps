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
    public class StudentHomeController : Controller
    {
        //
        // GET: /StudentHome/

        public ActionResult Index()
        {
            return View();
        }
        public ActionResult Home()
        {
            return View();
        }
        public string getBookList()
        {
            DbUtility dbUtil = new DbUtility();
            return dbUtil.GetAllDocumentsWithObjectId("Test");
        }
        public dynamic validateLogin(dynamic login)
        {
            DbUtility dbUtil = new DbUtility();
            try
            {
                dynamic strLogin = JsonConvert.DeserializeObject(login);
                dynamic result = JsonConvert.DeserializeObject(dbUtil.GetDocumentByIdWithObjectId("Master_Login", "LoginID", strLogin.loginID.Value));

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
        public string getIssuedBookList(string issuedTo)
        {
            DbUtility dbUtil = new DbUtility();
            return dbUtil.GetDocumentByIdWithObjectId("Test","issuedTo",issuedTo);
        }

        public string placeOrder(string id, string orderItems)
        {
            DbUtility dbUtil = new DbUtility();
            try
            {
                if (dbUtil.InsertDocumentsInArrayByObjectId(id, "Master_Login", "Orders", orderItems))
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
        public string getOrderHistory(string id)
        {
            DbUtility dbUtil = new DbUtility();
            try
            {
                return dbUtil.GetDocumentByObjectIdWithObjectId("Master_Login", "_id", id);
            }
            catch (Exception ex)
            {
                return "Error";
            }
        }

    }
}
