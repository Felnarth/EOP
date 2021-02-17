using System;
using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.Metadata;

#nullable disable

namespace EOP_DAL
{
    public partial class eopDBContext : DbContext
    {
        public eopDBContext()
        {
        }

        public eopDBContext(DbContextOptions<eopDBContext> options)
            : base(options)
        {
        }

        public virtual DbSet<AreaAccess> AreaAccesses { get; set; }
        public virtual DbSet<Chain> Chains { get; set; }
        public virtual DbSet<Course> Courses { get; set; }
        public virtual DbSet<Device> Devices { get; set; }
        public virtual DbSet<Person> People { get; set; }

        protected override void OnConfiguring(DbContextOptionsBuilder optionsBuilder)
        {
            if (!optionsBuilder.IsConfigured)
            {
                optionsBuilder.UseSqlServer("Server=127.0.0.1;Database=eopDB;Uid=sqlserver;Password=capstone2020");
            }
        }

        protected override void OnModelCreating(ModelBuilder modelBuilder)
        {
            modelBuilder.HasAnnotation("Relational:Collation", "SQL_Latin1_General_CP1_CI_AS");

            modelBuilder.Entity<AreaAccess>(entity =>
            {
                entity.HasKey(e => new { e.UserId, e.AreaAccessId });

                entity.ToTable("AreaAccess");

                entity.Property(e => e.UserId)
                    .HasMaxLength(5)
                    .HasColumnName("UserID")
                    .IsFixedLength(true);

                entity.Property(e => e.AreaAccessId)
                    .HasMaxLength(25)
                    .HasColumnName("AreaAccessID");

                entity.Property(e => e.ActivatedDate).HasColumnType("datetime");

                entity.Property(e => e.ActivationDate).HasColumnType("datetime");

                entity.Property(e => e.CreatedDate).HasColumnType("datetime");

                entity.Property(e => e.ExpirationDate).HasColumnType("datetime");

                entity.HasOne(d => d.User)
                    .WithMany(p => p.AreaAccesses)
                    .HasForeignKey(d => d.UserId)
                    .OnDelete(DeleteBehavior.ClientSetNull)
                    .HasConstraintName("FK_AreaAccess_Person");
            });

            modelBuilder.Entity<Chain>(entity =>
            {
                entity.HasKey(e => e.EmailAddress);

                entity.ToTable("Chain");

                entity.Property(e => e.EmailAddress)
                    .HasMaxLength(25)
                    .IsFixedLength(true);

                entity.Property(e => e.AdministrationLevel)
                    .HasMaxLength(25)
                    .IsFixedLength(true);

                entity.Property(e => e.AdministrationManager)
                    .HasMaxLength(25)
                    .IsFixedLength(true);

                entity.Property(e => e.AuthorityLevel)
                    .HasMaxLength(25)
                    .IsFixedLength(true);

                entity.Property(e => e.FullName)
                    .HasMaxLength(25)
                    .IsFixedLength(true);
            });

            modelBuilder.Entity<Course>(entity =>
            {
                entity.HasKey(e => e.CourseCode);

                entity.ToTable("Course");

                entity.Property(e => e.CourseCode)
                    .HasMaxLength(25)
                    .HasColumnName("courseCode");

                entity.Property(e => e.AccredProgFlag)
                    .HasMaxLength(25)
                    .HasColumnName("accredProgFlag");

                entity.Property(e => e.AttCostAmt).HasColumnName("attCostAmt");

                entity.Property(e => e.AttdReqDurHrs).HasColumnName("attdReqDurHrs");

                entity.Property(e => e.AuthReqFlag)
                    .HasMaxLength(25)
                    .HasColumnName("authReqFlag");

                entity.Property(e => e.AvailDate)
                    .HasColumnType("datetime")
                    .HasColumnName("availDate");

                entity.Property(e => e.CancelNoticeDays).HasColumnName("cancelNoticeDays");

                entity.Property(e => e.ClassSizeMaxQty).HasColumnName("classSizeMaxQty");

                entity.Property(e => e.ClassSizeMinQty).HasColumnName("classSizeMinQty");

                entity.Property(e => e.Content1Desc)
                    .HasMaxLength(250)
                    .HasColumnName("content1Desc");

                entity.Property(e => e.Content2Desc)
                    .HasMaxLength(250)
                    .HasColumnName("content2Desc");

                entity.Property(e => e.CourseCat)
                    .HasMaxLength(25)
                    .HasColumnName("courseCat");

                entity.Property(e => e.CourseDesc)
                    .HasMaxLength(250)
                    .HasColumnName("courseDesc");

                entity.Property(e => e.CourseEquivFlag)
                    .HasMaxLength(25)
                    .HasColumnName("courseEquivFlag");

                entity.Property(e => e.CoursePrereqDesc)
                    .HasMaxLength(250)
                    .HasColumnName("coursePrereqDesc");

                entity.Property(e => e.CourseRevNum)
                    .HasMaxLength(25)
                    .HasColumnName("courseRevNum");

                entity.Property(e => e.CourseTitle)
                    .HasMaxLength(25)
                    .HasColumnName("courseTitle");

                entity.Property(e => e.CreditHrs).HasColumnName("creditHrs");

                entity.Property(e => e.DevelCostAmt).HasColumnName("develCostAmt");

                entity.Property(e => e.DevelHrs).HasColumnName("develHrs");

                entity.Property(e => e.DisconDate)
                    .HasColumnType("datetime")
                    .HasColumnName("disconDate");

                entity.Property(e => e.DurationHrs).HasColumnName("durationHrs");

                entity.Property(e => e.EnrollmentTypeCode)
                    .HasMaxLength(25)
                    .HasColumnName("enrollmentTypeCode");

                entity.Property(e => e.FacilityCode)
                    .HasMaxLength(25)
                    .HasColumnName("facilityCode");

                entity.Property(e => e.FlatFeeIn)
                    .HasMaxLength(25)
                    .HasColumnName("flatFeeIn");

                entity.Property(e => e.InfoContactName)
                    .HasMaxLength(25)
                    .HasColumnName("infoContactName");

                entity.Property(e => e.InfoContactTelNum)
                    .HasMaxLength(25)
                    .HasColumnName("infoContactTelNum");

                entity.Property(e => e.InstrTypeCode)
                    .HasMaxLength(25)
                    .HasColumnName("instrTypeCode");

                entity.Property(e => e.InstructorNeedsText)
                    .HasMaxLength(25)
                    .HasColumnName("instructorNeedsText");

                entity.Property(e => e.MinPassGrdPct).HasColumnName("minPassGrdPct");

                entity.Property(e => e.PrimaryCourseF1)
                    .HasMaxLength(25)
                    .HasColumnName("primaryCourseF1");

                entity.Property(e => e.PriorityCode)
                    .HasMaxLength(25)
                    .HasColumnName("priorityCode");

                entity.Property(e => e.ProviderText)
                    .HasMaxLength(25)
                    .HasColumnName("providerText");

                entity.Property(e => e.QuotaDays).HasColumnName("quotaDays");

                entity.Property(e => e.QuotaSeats).HasColumnName("quotaSeats");

                entity.Property(e => e.ReasonForTrainingCmnt)
                    .HasMaxLength(250)
                    .HasColumnName("reasonForTrainingCmnt");

                entity.Property(e => e.RemedPlanId)
                    .HasMaxLength(25)
                    .HasColumnName("remedPlanId");

                entity.Property(e => e.ReportCat)
                    .HasMaxLength(25)
                    .HasColumnName("reportCat");

                entity.Property(e => e.RequalIntvlMth).HasColumnName("requalIntvlMth");

                entity.Property(e => e.RequiredByText)
                    .HasMaxLength(25)
                    .HasColumnName("requiredByText");

                entity.Property(e => e.RespOrgCode)
                    .HasMaxLength(25)
                    .HasColumnName("respOrgCode");

                entity.Property(e => e.RmId).HasColumnName("rmId");

                entity.Property(e => e.SelfRegIn)
                    .HasMaxLength(25)
                    .HasColumnName("selfRegIn");

                entity.Property(e => e.SourceOrgCode)
                    .HasMaxLength(25)
                    .HasColumnName("sourceOrgCode");

                entity.Property(e => e.StatusText)
                    .HasMaxLength(25)
                    .HasColumnName("statusText");

                entity.Property(e => e.StructId).HasColumnName("structId");

                entity.Property(e => e.TargetAudText)
                    .HasMaxLength(25)
                    .HasColumnName("targetAudText");

                entity.Property(e => e.TestQty).HasColumnName("testQty");

                entity.Property(e => e.TimeLimitText)
                    .HasMaxLength(25)
                    .HasColumnName("timeLimitText");

                entity.Property(e => e.TrackNum).HasColumnName("trackNum");

                entity.Property(e => e.UpdateDate)
                    .HasColumnType("datetime")
                    .HasColumnName("updateDate");

                entity.Property(e => e.UpdateUid)
                    .HasMaxLength(25)
                    .HasColumnName("updateUid");
            });

            modelBuilder.Entity<Device>(entity =>
            {
                entity.HasKey(e => new { e.DeviceId, e.UserId });

                entity.ToTable("Device");

                entity.Property(e => e.DeviceId)
                    .HasMaxLength(25)
                    .HasColumnName("DeviceID");

                entity.Property(e => e.UserId)
                    .HasMaxLength(5)
                    .HasColumnName("UserID")
                    .IsFixedLength(true);

                entity.Property(e => e.DeviceCarrier).HasMaxLength(25);

                entity.Property(e => e.DeviceType).HasMaxLength(25);

                entity.Property(e => e.EmailEnabled).HasMaxLength(25);

                entity.Property(e => e.PreferredManagement).HasMaxLength(25);

                entity.Property(e => e.PreferredOrganization).HasMaxLength(25);

                entity.Property(e => e.PreferredReceiveMessage).HasMaxLength(25);

                entity.Property(e => e.PreferredSite).HasMaxLength(25);

                entity.Property(e => e.UpdatedAlternateId).HasMaxLength(25);

                entity.Property(e => e.UpdatedTimestamp).HasColumnType("datetime");

                entity.HasOne(d => d.User)
                    .WithMany(p => p.Devices)
                    .HasForeignKey(d => d.UserId)
                    .OnDelete(DeleteBehavior.ClientSetNull)
                    .HasConstraintName("FK_Device_Person");
            });

            modelBuilder.Entity<Person>(entity =>
            {
                entity.HasKey(e => e.UserId);

                entity.ToTable("Person");

                entity.Property(e => e.UserId)
                    .HasMaxLength(5)
                    .HasColumnName("UserID")
                    .IsFixedLength(true);

                entity.Property(e => e.AdmOrgMgrCmpAltId).HasMaxLength(25);

                entity.Property(e => e.AdmOrgMgrEmail).HasMaxLength(25);

                entity.Property(e => e.AdmOrgMgrName).HasMaxLength(25);

                entity.Property(e => e.AdmOrgMgrOrgCode).HasMaxLength(25);

                entity.Property(e => e.AdmininstrationOrganizationId).HasMaxLength(25);

                entity.Property(e => e.AdministrationCode).HasMaxLength(25);

                entity.Property(e => e.AdministrationTitle).HasMaxLength(25);

                entity.Property(e => e.AliasSoundex).HasMaxLength(25);

                entity.Property(e => e.AuthorityAgencyCode).HasMaxLength(25);

                entity.Property(e => e.AuthorityAlternateLevel).HasMaxLength(25);

                entity.Property(e => e.AuthorityLevel).HasMaxLength(25);

                entity.Property(e => e.BadgeCoCd).HasMaxLength(25);

                entity.Property(e => e.Beeper).HasMaxLength(25);

                entity.Property(e => e.Birthdate).HasMaxLength(25);

                entity.Property(e => e.BuildingCode).HasMaxLength(25);

                entity.Property(e => e.BuildingNumber).HasMaxLength(25);

                entity.Property(e => e.Clerical).HasMaxLength(25);

                entity.Property(e => e.CocsCd).HasMaxLength(25);

                entity.Property(e => e.CocsDe).HasMaxLength(25);

                entity.Property(e => e.CompanyBenefitGroupCode).HasMaxLength(25);

                entity.Property(e => e.CompanyCode).HasMaxLength(25);

                entity.Property(e => e.CostCenter).HasMaxLength(25);

                entity.Property(e => e.CostCenterTitle).HasMaxLength(25);

                entity.Property(e => e.EmailAddress).HasMaxLength(25);

                entity.Property(e => e.EmailLocal).HasMaxLength(25);

                entity.Property(e => e.EmpLastHireDate).HasColumnType("datetime");

                entity.Property(e => e.EmpOrigHireDate).HasColumnType("datetime");

                entity.Property(e => e.EmpTermDate).HasColumnType("datetime");

                entity.Property(e => e.EmployeeStatusCode).HasMaxLength(25);

                entity.Property(e => e.ExemptStatus).HasMaxLength(25);

                entity.Property(e => e.FaxNumber).HasMaxLength(25);

                entity.Property(e => e.FirstName).HasMaxLength(25);

                entity.Property(e => e.FirstNameSoundex).HasMaxLength(25);

                entity.Property(e => e.FullName).HasMaxLength(25);

                entity.Property(e => e.HrOwnerFlag).HasMaxLength(25);

                entity.Property(e => e.LastName).HasMaxLength(25);

                entity.Property(e => e.LastNameSoundex).HasMaxLength(25);

                entity.Property(e => e.LastUpdated).HasMaxLength(25);

                entity.Property(e => e.MiddleName).HasMaxLength(25);

                entity.Property(e => e.MiddleNameSoundex).HasMaxLength(25);

                entity.Property(e => e.NickName).HasMaxLength(25);

                entity.Property(e => e.OrgCode).HasMaxLength(25);

                entity.Property(e => e.OrgId)
                    .HasMaxLength(25)
                    .HasColumnName("OrgID");

                entity.Property(e => e.OrganizationCode).HasMaxLength(25);

                entity.Property(e => e.OrganizationId)
                    .HasMaxLength(25)
                    .HasColumnName("OrganizationID");

                entity.Property(e => e.OrganizationTitle).HasMaxLength(25);

                entity.Property(e => e.OtherFlag).HasMaxLength(25);

                entity.Property(e => e.Pager).HasMaxLength(25);

                entity.Property(e => e.PersImg).HasMaxLength(25);

                entity.Property(e => e.PersSubcontractor).HasMaxLength(25);

                entity.Property(e => e.PoEndDt).HasColumnType("datetime");

                entity.Property(e => e.RoomNumber).HasMaxLength(25);

                entity.Property(e => e.ShiftCode).HasMaxLength(25);

                entity.Property(e => e.SiteAreaCode).HasMaxLength(25);

                entity.Property(e => e.StaffAugPono)
                    .HasMaxLength(25)
                    .HasColumnName("StaffAugPONo");

                entity.Property(e => e.StruserId)
                    .HasMaxLength(55)
                    .HasColumnName("StruserID");

                entity.Property(e => e.Suffix).HasMaxLength(25);

                entity.Property(e => e.SupervisorFlag).HasMaxLength(25);

                entity.Property(e => e.UpdatePendingFlag).HasMaxLength(25);

                entity.Property(e => e.VendorId)
                    .HasMaxLength(25)
                    .HasColumnName("VendorID");

                entity.Property(e => e.WorkCode).HasMaxLength(25);

                entity.Property(e => e.WorkPhoneNumber).HasMaxLength(25);
            });

            OnModelCreatingPartial(modelBuilder);
        }

        partial void OnModelCreatingPartial(ModelBuilder modelBuilder);
    }
}
