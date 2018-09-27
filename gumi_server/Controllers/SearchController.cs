using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;
using Gumi_Server.Models;
using Gumi_Server.ViewModels;


namespace Gumi_Server.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class SearchController : ControllerBase
    {

        private gumioverflow_datebaseContext db { get; set; }

        //Making db Global
        public SearchController(gumioverflow_datebaseContext _db)
        { 
            this.db = _db;
        }
        //Searches the Questions Table for what ever is typed after api/search/...
         [HttpGet]
        public IEnumerable<SearchResults> Get([FromQuery]string q)
        {
            var questionsResults = this.db
                .Questions
                    .Where(w => w.Title.Contains(q) || w.Content.Contains(q))
                        .OrderBy(o => o.Date)
                            .Take(5)
                                .Select(s => new SearchResults {
                                    Text = s.Title,
                                    Id = s.Id,
                                    Type = "question"
                                });
            return questionsResults;
        }
    }

}