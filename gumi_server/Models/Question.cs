using System;

namespace Gumi_Server

{
    public class Questions 
    {
        public int Id { get; set; }
        public string Title { get; set; }
        public string Content { get; set; }
        public DateTime Date { get; set; }
        public int Upvotes { get; set; }
        public int Downvotes { get; set; }
        public string Postedby { get; set; }
    }
}