using System;
using System.Collections.Generic;
using System.Text;

namespace EOP_DAL.Models
{
    public partial class KanbanTask
    {
        public Guid TaskId { get; set; }
        public string Description { get; set; }
        public DateTime DueDate { get; set; }
        public string ForField { get; set; }
        public string Status { get; set; }
    }
}
