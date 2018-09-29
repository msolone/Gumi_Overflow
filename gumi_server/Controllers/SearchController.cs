using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Gumi_Server.Models;
using Gumi_Server.ViewModels;
using Microsoft.AspNetCore.Mvc;

namespace Gumi_Server.Controllers {
    [Route ("api/[controller]")]
    [ApiController]
    public class SearchController : ControllerBase {

        private gumioverflow_datebaseContext db { get; set; }

        //Making db Global
        public SearchController (gumioverflow_datebaseContext _db) {
            this.db = _db;
        }

        [HttpGet]
        // [FromQuery] string q = the letters you put after api/search/...
        public IEnumerable<SearchResults> Get ([FromQuery] string q) {

            // Searches the Questions Table for what ever is typed after api/search/...
            var questionsResults = this.db
                // Accessing Questions Table
                .Questions
                // Filtering the data to only include Titles and Content with the q value
                .Where (w => w.Title.ToLower ().Contains (q) || w.Content.ToLower ().Contains (q))
                // Orders the remaining array by the date 
                .OrderBy (o => o.Date)
                // Creates a new array to fit the SearchResults View Model
                .Select (s => new SearchResults {
                    Id = s.Id,
                        Title = s.Title,
                        UpVotes = s.UpVotes,
                        DownVotes = s.DownVotes,
                        Type = "question"
                });

            return questionsResults;

            // // Searches the Answers Table for what ever is typed after api/search/...
            //     var answersResults = this.db 
            //         // Accessing Answers Table  
            //         .Answers
            //             // Filtering data to only include Content with the q value
            //             .Where(w => w.Content.ToLower().Contains(q))
            //                 // Orders the remaining array by the date 
            //                 .OrderBy(o => o.Date)
            //                     // Truncates the list to the first 5
            //                     .Take(5)
            //                         // Creates a new array to fit the SearchResults View Model
            //                         .Select(s => new SearchResults {
            //                             Id = s.Id,
            //                             Text = s.Content,
            //                             Type = "answer"
            //                         });
            //      // Create empty list and add search results from both searches to it
            //     var finalResults = new List<SearchResults>();
            //     finalResults.AddRange(questionsResults);
            //     finalResults.AddRange(answersResults);

            //      return finalResults.OrderBy(o => o.Text);

        }
    }

}