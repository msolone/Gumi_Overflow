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
    public class QuestionsController : ControllerBase
    {

        private gumioverflow_datebaseContext db { get; set; }

        //Making db Global
        public QuestionsController(gumioverflow_datebaseContext _db)
        { 
            this.db = _db;
        }

        [HttpGet]
        public IEnumerable<Question> Get()
        {
            // Query Database Table Questions --> Return Ordered by Title and then by Date
            var questions = this.db.Questions.OrderBy(o => o.Title.ToLower()).ThenBy(t => t.Date);
            return questions;  

        }//END HttpGet

        [HttpPost]
        public Question Post([FromBody] Question Question)
        {
            this.db.Questions.Add(Question);
            this.db.SaveChanges();
            return Question;

        }//ENDHttpPost

    } //END public class LocationsController : ControllerBase
} //END namespace PlacesTravelled.Controllers