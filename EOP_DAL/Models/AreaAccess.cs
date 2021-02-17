using System;
using System.Collections.Generic;

#nullable disable

namespace EOP_DAL
{
    public partial class AreaAccess
    {
        public DateTime? ActivatedDate { get; set; }
        public DateTime? ActivationDate { get; set; }
        public string AreaAccessId { get; set; }
        public DateTime? CreatedDate { get; set; }
        public DateTime? ExpirationDate { get; set; }
        public string UserId { get; set; }

        public virtual Person User { get; set; }
    }
}
