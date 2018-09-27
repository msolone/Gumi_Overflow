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

        }//END HttpGet

        // Post an Answer to the Database
        [HttpPost]
        public Answer Post([FromBody] Answer a)
        {
            this.db.Add(a);
            this.db.SaveChanges();
            return a;

        }//END HttpPost

        // Update an Answer already in the Database
        [HttpPatch("{id}")]
        public Answer Patch(int id)
        {
            // Find the Answer in the Database with matching id
            var answer = this.db.Answers.FirstOrDefault(a => a.Id == id);
            // Change Content
            answer.Content = "Practice Patch of Content";
            // Change Date to Now
            answer.Date = DateTime.Now;
            // Saves Changes to DB
            this.db.SaveChanges();
            // Returns the New Answer
            return answer;

        } // END HttpPatch

    } //END public class LocationsController : ControllerBase
} //END namespace PlacesTravelled.Controllers