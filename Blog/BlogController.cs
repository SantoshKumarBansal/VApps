using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.Mvc;
using AngularMVC.DbUtil;
using Newtonsoft.Json;
using MongoDB.Bson;
using System.Collections;
using Newtonsoft.Json.Linq;

namespace AngBlog.Controllers
{
    public class BlogController : Controller
    {
        //
        // GET: /Blog/

        DbUtility dbUtility = new DbUtility();

        public string isAlreadySignIn(string eMailID)
        {
            try
            {
                string result = dbUtility.GetDocumentsById("SignInInformation", "EMailID", eMailID);
                if (result == "[]")
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
        public string saveSignInInformation(string signIn)
        {
            try
            {
                if (dbUtility.SaveDocument(signIn, "SignInInformation"))
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
        public dynamic validateLogin(dynamic login)
        {
            try
            {
                dynamic strLogin = JsonConvert.DeserializeObject(login);
                dynamic result = JsonConvert.DeserializeObject(dbUtility.GetDocumentByIdWithObjectId("SignInInformation", "EMailID", strLogin.EMailID.Value));

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
        public string createPost(string post)
        {
            try
            {
                if (dbUtility.SaveDocument(post, "Posts"))
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
        public string editPost(string post)
        {
            try
            {
                if (dbUtility.ReplaceDocumentByObjectId(post, "Posts"))
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
        public string deletePost(string id)
        {
            try
            {
                if (dbUtility.DeleteDocumentByObjectId("Posts", id))
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
        public string publishPost(string id)
        {
            try
            {
                if (dbUtility.UpdateDocumentsByObjectId(id, "Posts", "IsPublished", "true"))
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
        public string getPost(string id)
        {
            try
            {
                return dbUtility.GetDocumentByObjectIdWithObjectId("Posts", "_id", id);
            }
            catch (Exception ex)
            {
                return "Error";
            }
        }
        public string readPost(string id)
        {
            try
            {
                if (dbUtility.IncreaseValueByObjectId(id, "Posts", "Reads", 1))
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
        public string likePost(string id)
        {
            try
            {
                if (dbUtility.IncreaseValueByObjectId(id, "Posts", "Likes", 1))
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
        public string unlikePost(string id)
        {
            try
            {
                if (dbUtility.IncreaseValueByObjectId(id, "Posts", "Likes", -1))
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
        public string saveComment(string id, string comments)
        {
            try
            {
                if (dbUtility.InsertDocumentsInArrayByObjectId(id, "Posts", "Comments", comments))
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
        public string getPostList(string postedByEMailID)
        {
            try
            {
                return dbUtility.GetDocumentByIdWithObjectId("Posts", "PostedByEMailID", postedByEMailID);
            }
            catch (Exception ex)
            {
                return "Error";
            }
        }
        public string getAllPublishedPostList()
        {
            try
            {
                return dbUtility.GetDocumentByIdWithObjectId("Posts", "IsPublished", "true");
            }
            catch (Exception ex)
            {
                return "Error";
            }
        }
        public string getAllPublishedPostListByTag(string tag)
        {
            try
            {
                return dbUtility.GetDocumentByIdWithObjectIdInArray("Posts", "Tags", tag);
            }
            catch (Exception ex)
            {
                return "Error";
            }
        }


    }
}
