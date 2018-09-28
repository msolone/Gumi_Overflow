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
        public IEnumerable<Answer> GetAll()
        {
            var answer = this.db.Answers;
            return answer;

        }//END HttpGet

        // Gathers all Answers into an Array
        [HttpGet("{id}")]
        public IEnumerable<Answer> Get(int id)
        {
            var answer = this.db.Answers.Where(a => a.QuestionId == id).OrderBy(o => o.Date);
            return answer;

        }//END HttpGet

        // Post an Answer to the Database
        [HttpPost]
        public Answer Post([FromBody] Answer a)
        {
            this.db.Add(a);
            this.db.SaveChanges();
            return a;

        }//END HttpPost

        // Update an Answer Content in the Database
        [HttpPatch("{id}/Content")]
        public Answer Patch([FromBody] Answer _answer, int id)
        {
            // Find the Answer in the Database with matching id
            var answer = this.db.Answers.FirstOrDefault(a => a.Id == id);
            // Change Content
            answer.Content = _answer.Content;
            // Change Date to Now
            answer.Date = DateTime.Now;
            // Saves Changes to DB
            this.db.SaveChanges();
            // Returns the New Answer
            return answer;

        } // END HttpPatch


    } //END public class LocationsController : ControllerBase
} //END namespace PlacesTravelled.Controllers