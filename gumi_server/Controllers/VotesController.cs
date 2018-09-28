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
    public class VotesController : ControllerBase
    {

        private gumioverflow_datebaseContext db { get; set; }

        //Making db Global
        public VotesController(gumioverflow_datebaseContext _db)
        {
            this.db = _db;
        }

        // Increase the UpVotes on a Answer in the Database
        [HttpPatch("{id}/Question/UpVotes")]
        public Question QuestionUpVotes(int id)
        {
            // Find the Answer in the Database with matching id
            var question = this.db.Questions.FirstOrDefault(a => a.Id == id);
            // Increase UpVotes by 1
            question.UpVotes++;
            // Saves Changes to DB
            this.db.SaveChanges();
            // Returns the New Answer
            return question;

        } // END HttpPatch

                // Increase the DownVotes on a Answer in the Database
        [HttpPatch("{id}/Question/DownVotes")]
        public Question QuestionDownVotes(int id)
        {
            // Find the Answer in the Database with matching id
            var question = this.db.Questions.FirstOrDefault(a => a.Id == id);
            // Increase DownVotes by 1
            question.DownVotes++;
            // Saves Changes to DB
            this.db.SaveChanges();
            // Returns the New Answer
            return question;

        } // END HttpPatch


        // Increase the UpVotes on a Answer in the Database
        [HttpPatch("{id}/Answer/UpVotes")]
        public Answer AnswerUpVotes(int id)
        {
            // Find the Answer in the Database with matching id
            var answer = this.db.Answers.FirstOrDefault(a => a.Id == id);
            // Increase UpVotes by 1
            answer.UpVotes++;
            // Saves Changes to DB
            this.db.SaveChanges();
            // Returns the New Answer
            return answer;

        } // END HttpPatch

                // Increase the DownVotes on a Answer in the Database
        [HttpPatch("{id}/Answer/DownVotes")]
        public Answer AnswerDownVotes(int id)
        {
            // Find the Answer in the Database with matching id
            var answer = this.db.Answers.FirstOrDefault(a => a.Id == id);
            // Increase DownVotes by 1
            answer.DownVotes++;
            // Saves Changes to DB
            this.db.SaveChanges();
            // Returns the New Answer
            return answer;

        } // END HttpPatch
    }
}