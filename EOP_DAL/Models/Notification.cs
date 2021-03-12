using System;
using System.Collections.Generic;

#nullable disable

namespace EOP_DAL.Models
{
    public partial class Notification
    {
        public int Id { get; set; }
        public string Category { get; set; }
        public string Status { get; set; }
        public string Title { get; set; }
        public string Text { get; set; }
        public int Severity { get; set; }
        public DateTime DateFired { get; set; }
    }
}
