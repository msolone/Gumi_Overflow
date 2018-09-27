using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Gumi_Server.Models;
using Microsoft.AspNetCore.Mvc;

namespace Gumi_Server.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class AnswersController : ControllerBase
    {

        private gumioverflow_datebaseContext db { get; set; }

        //Making db Global
        public AnswersController(gumioverflow_datebaseContext _db)
        { 
            this.db = _db;
        }
        // Gathers all Answers into an Array
        [HttpGet]
        public IEnumerable<Answer> Get()
        {
            return this.db.Answers;
        }

        // Post an Answer to the Database
        [HttpPost]
        public Answer Post([FromBody] Answer a)
        {
            this.db.Add(a);
            this.db.SaveChanges();
            return a;
        }

    } 
} 