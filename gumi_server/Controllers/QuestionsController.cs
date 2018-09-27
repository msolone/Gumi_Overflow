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

        // Update an Question Content in the Database
        [HttpPatch("{id}/Content")]
        public Question Patch([FromBody] Question _question, int id)
        {
            // Find the Question in the Database with matching id
            var question = this.db.Questions.FirstOrDefault(a => a.Id == id);
            // Change Content
            question.Content = _question.Content;
            // Change Date to Now
            question.Date = DateTime.Now;
            // Saves Changes to DB
            this.db.SaveChanges();
            // Returns the New Question
            return question;

        } // END HttpPatch

    } //END public class LocationsController : ControllerBase
} //END namespace PlacesTravelled.Controllers