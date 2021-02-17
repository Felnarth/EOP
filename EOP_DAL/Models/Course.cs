using System;
using System.Collections.Generic;

#nullable disable

namespace EOP_DAL
{
    public partial class Course
    {
        public string AccredProgFlag { get; set; }
        public int? AttCostAmt { get; set; }
        public int? AttdReqDurHrs { get; set; }
        public string AuthReqFlag { get; set; }
        public DateTime? AvailDate { get; set; }
        public int? CancelNoticeDays { get; set; }
        public int? ClassSizeMaxQty { get; set; }
        public int? ClassSizeMinQty { get; set; }
        public string Content1Desc { get; set; }
        public string Content2Desc { get; set; }
        public string CourseCat { get; set; }
        public string CourseCode { get; set; }
        public string CourseDesc { get; set; }
        public string CourseEquivFlag { get; set; }
        public string CoursePrereqDesc { get; set; }
        public string CourseRevNum { get; set; }
        public string CourseTitle { get; set; }
        public int? CreditHrs { get; set; }
        public int? DevelCostAmt { get; set; }
        public int? DevelHrs { get; set; }
        public DateTime? DisconDate { get; set; }
        public int? DurationHrs { get; set; }
        public string EnrollmentTypeCode { get; set; }
        public string FacilityCode { get; set; }
        public string FlatFeeIn { get; set; }
        public string InfoContactName { get; set; }
        public string InfoContactTelNum { get; set; }
        public string InstrTypeCode { get; set; }
        public string InstructorNeedsText { get; set; }
        public int? MinPassGrdPct { get; set; }
        public string PrimaryCourseF1 { get; set; }
        public string PriorityCode { get; set; }
        public string ProviderText { get; set; }
        public int? QuotaDays { get; set; }
        public int? QuotaSeats { get; set; }
        public string ReasonForTrainingCmnt { get; set; }
        public string RemedPlanId { get; set; }
        public string ReportCat { get; set; }
        public int? RequalIntvlMth { get; set; }
        public string RequiredByText { get; set; }
        public string RespOrgCode { get; set; }
        public int? RmId { get; set; }
        public string SelfRegIn { get; set; }
        public string SourceOrgCode { get; set; }
        public string StatusText { get; set; }
        public int? StructId { get; set; }
        public string TargetAudText { get; set; }
        public int? TestQty { get; set; }
        public string TimeLimitText { get; set; }
        public int? TrackNum { get; set; }
        public DateTime? UpdateDate { get; set; }
        public string UpdateUid { get; set; }
    }
}
