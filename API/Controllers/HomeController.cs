using System;
using System.Collections.Generic;
using System.Data;
using System.Data.SqlClient;
using System.Linq;
using System.Net;
using System.Net.Http;
using System.Web.Http;
using System.Web.Http.Cors;

namespace ExpTracker.Controllers
{
    [EnableCors(origins: "*", headers: "*", methods: "*")]
    [RoutePrefix("exptracker")]
    public class HomeController : ApiController
    {

        private string connStr = System.Configuration.ConfigurationManager.ConnectionStrings["expdefault"].ToString();
      

        [Route("getallcatagories")]
        public List<ExpCatagory> GetExpCatagories()
        {
            List<ExpCatagory> catagories = new List<ExpCatagory>();
            using (SqlConnection con = new SqlConnection(connStr))
            {
                using (SqlCommand cmd = new SqlCommand("[getAllCatagories]", con))
                {
                    cmd.CommandType = CommandType.StoredProcedure;
                    con.Open();
                    var r = cmd.ExecuteReader();
                    while (r.Read())
                    {
                        ExpCatagory t = new ExpCatagory();
                        t.CatId = int.Parse(r["catId"].ToString());
                        t.CatDes = r["catDes"].ToString();
                        t.CatLimit = int.Parse(r["catLimit"].ToString());
                        t.CatFreq = int.Parse(r["catFreq"].ToString());
                        catagories.Add(t);
                    }
                }
            }

            return catagories;
        }

        [Route("getallexpenses")]
        public List<Expense> GetAllExpenses()
        {
            List<Expense> catagories = new List<Expense>();
            using (SqlConnection con = new SqlConnection(connStr))
            {
                using (SqlCommand cmd = new SqlCommand("getAllexpenses", con))
                {
                    cmd.CommandType = CommandType.StoredProcedure;
                    con.Open();
                    var r = cmd.ExecuteReader();
                    while (r.Read())
                    {
                        Expense t = new Expense();
                        t.ExpId = int.Parse(r["expId"].ToString());
                        t.Expcat = int.Parse( r["expcat"].ToString());
                        t.ExpDes = r["expDes"].ToString();
                        t.ExpAmt = int.Parse(r["expAmt"].ToString());
                        t.ExpDate = DateTime.Parse(r["expDate"].ToString());
                        catagories.Add(t);
                    }
                }
            }

            return catagories;
        }

        [Route("addexpenses")]
        [HttpPut]
        public List<Expense> AddExpenses([FromBody] Expense expense)
        {
            List<Expense> catagories = new List<Expense>();
            using (SqlConnection con = new SqlConnection(connStr))
            {
                using (SqlCommand cmd = new SqlCommand("[AddExpense]", con))
                {
                    cmd.CommandType = CommandType.StoredProcedure;
                    cmd.Parameters.Add(new SqlParameter("@catId", expense.Expcat));
                    cmd.Parameters.Add(new SqlParameter("@des", expense.ExpDes));
                    cmd.Parameters.Add(new SqlParameter("@amt", expense.ExpAmt));
                    cmd.Parameters.Add(new SqlParameter("@dt", expense.ExpDate));
                    con.Open();
                    var r = cmd.ExecuteNonQuery();
                  
                }
            }

            return catagories;
        }
    }
   

    public class ExpCatagory
    {
        public int CatId { get; set; }
        public string CatDes { get; set; }
        public int CatLimit { get; set; }
        public int CatFreq { get; set; }
    }

    public class Expense
    {
        public int ExpId { get; set; }
        public int Expcat { get; set; }
        public string ExpDes { get; set; }
        public int ExpAmt { get; set; }
        public DateTime ExpDate { get; set; }
    }


}
