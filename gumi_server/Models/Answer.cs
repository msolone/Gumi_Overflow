using System;

namespace Gumi_Server.Models

{
    public class Answer

    {
        public int Id { get; set; }
        public string Content { get; set; }
        public DateTime Date { get; set; } = DateTime.Now;
        public int UpVotes { get; set; } = 0; 
        public int DownVotes { get; set; } = 0;
        public string PostedBy { get; set; } 
        public int QuestionId { get; set; }
        public Question Question { get; set; }
    }

}