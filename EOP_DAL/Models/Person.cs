using System;
using System.Collections.Generic;

#nullable disable

namespace EOP_DAL
{
    public partial class Person
    {
        public Person()
        {
            AreaAccesses = new HashSet<AreaAccess>();
            Devices = new HashSet<Device>();
        }

        public string AdmOrgMgrCmpAltId { get; set; }
        public string AdmOrgMgrEmail { get; set; }
        public string AdmOrgMgrName { get; set; }
        public string AdmOrgMgrOrgCode { get; set; }
        public string AdmininstrationOrganizationId { get; set; }
        public string AdministrationCode { get; set; }
        public string AdministrationTitle { get; set; }
        public string AliasSoundex { get; set; }
        public string AuthorityAgencyCode { get; set; }
        public string AuthorityAlternateLevel { get; set; }
        public string AuthorityLevel { get; set; }
        public string BadgeCoCd { get; set; }
        public string Beeper { get; set; }
        public string Birthdate { get; set; }
        public string BuildingCode { get; set; }
        public string BuildingNumber { get; set; }
        public string Clerical { get; set; }
        public string CocsCd { get; set; }
        public string CocsDe { get; set; }
        public string CompanyBenefitGroupCode { get; set; }
        public string CompanyCode { get; set; }
        public string CostCenter { get; set; }
        public string CostCenterTitle { get; set; }
        public string EmailAddress { get; set; }
        public string EmailLocal { get; set; }
        public DateTime? EmpLastHireDate { get; set; }
        public DateTime? EmpOrigHireDate { get; set; }
        public DateTime? EmpTermDate { get; set; }
        public string EmployeeStatusCode { get; set; }
        public string ExemptStatus { get; set; }
        public string FaxNumber { get; set; }
        public string FirstName { get; set; }
        public string FirstNameSoundex { get; set; }
        public string FullName { get; set; }
        public string HrOwnerFlag { get; set; }
        public string LastName { get; set; }
        public string LastNameSoundex { get; set; }
        public string LastUpdated { get; set; }
        public string MiddleName { get; set; }
        public string MiddleNameSoundex { get; set; }
        public string NickName { get; set; }
        public string OrgCode { get; set; }
        public string OrgId { get; set; }
        public string OrganizationCode { get; set; }
        public string OrganizationId { get; set; }
        public string OrganizationTitle { get; set; }
        public string OtherFlag { get; set; }
        public string Pager { get; set; }
        public string PersImg { get; set; }
        public string PersSubcontractor { get; set; }
        public DateTime? PoEndDt { get; set; }
        public string RoomNumber { get; set; }
        public string ShiftCode { get; set; }
        public string SiteAreaCode { get; set; }
        public string StaffAugPono { get; set; }
        public string StruserId { get; set; }
        public string Suffix { get; set; }
        public string SupervisorFlag { get; set; }
        public string UpdatePendingFlag { get; set; }
        public string UserId { get; set; }
        public string VendorId { get; set; }
        public string WorkCode { get; set; }
        public string WorkPhoneNumber { get; set; }

        public virtual ICollection<AreaAccess> AreaAccesses { get; set; }
        public virtual ICollection<Device> Devices { get; set; }
    }
}
