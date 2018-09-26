using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;
// using Gumi_Server.DataModel;

namespace Gumi_Server
{
    [Route("api/[controller]")]
    [ApiController]
    public class QuestionsController : ControllerBase
    {

        private gumioverflow_databaseContext db { get; set; }

        //Making Db Variable
        public LocationsController(gumioverflow_databaseContext _db)
        { 
            this.db = _db;
        }

        [HttpGet]
        public IOrderedQueryable<QuestionsController> Get()
        {
            //Query Database Table Questions --> Return Ordered by Title and then by Date
            var questions = this.db.Questions.OrderBy(o => o.Title.ToLower()).ThenBy(t => t.Date);
            return questions;
        }

    } //END public class LocationsController : ControllerBase
} //END namespace PlacesTravelled.Controllers