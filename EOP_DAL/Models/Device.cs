using System;
using System.Collections.Generic;

#nullable disable

namespace EOP_DAL
{
    public partial class Device
    {
        public string DeviceCarrier { get; set; }
        public string DeviceId { get; set; }
        public string DeviceType { get; set; }
        public string EmailEnabled { get; set; }
        public string PreferredManagement { get; set; }
        public string PreferredOrganization { get; set; }
        public string PreferredReceiveMessage { get; set; }
        public string PreferredSite { get; set; }
        public string UpdatedAlternateId { get; set; }
        public DateTime? UpdatedTimestamp { get; set; }
        public string UserId { get; set; }

        public virtual Person User { get; set; }
    }
}
