using System;

namespace Gumi_Server

{
    public class Answer

    {
        public int Id { get; set; }
        public string Content { get; set; }
        public DateTime Date { get; set; } = DateTime.Now;
        public int Upvotes { get; set; } = 0; 
        public int Downvotes { get; set; } = 0;
        public string Postedby { get; set; } 
        public int QuestionId { get; set; }
        public Question Question { get; set; }
    }

}