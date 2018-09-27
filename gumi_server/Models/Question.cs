using System;

namespace Gumi_Server.Models

{
    public class Question 
    {
        public int Id { get; set; }
        public string Title { get; set; }
        public string Content { get; set; }
        public DateTime Date { get; set; } = DateTime.Now;
        public int UpVotes { get; set; } = 0;
        public int DownVotes { get; set; } = 0;
        public string Postedby { get; set; }
    }
}