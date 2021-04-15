using System;
using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.Metadata;

#nullable disable

namespace EOP_DAL.Models
{
    public partial class eopDBContext : DbContext
    {

        public eopDBContext(DbContextOptions<eopDBContext> options)
            : base(options)
        {
        }

        public virtual DbSet<Notification> Notifications { get; set; }
        public virtual DbSet<KanbanTask> KanbanTasks { get; set; }
        public virtual DbSet<DashWidget> DashWidgets { get; set; }

        protected override void OnConfiguring(DbContextOptionsBuilder optionsBuilder)
        {
            if (!optionsBuilder.IsConfigured)
            {
                //To protect potentially sensitive information in your connection string, you should move it out of source code. You can avoid scaffolding the connection string by using the Name= syntax to read it from configuration - see https://go.microsoft.com/fwlink/?linkid=2131148. For more guidance on storing connection strings, see http://go.microsoft.com/fwlink/?LinkId=723263.
                //optionsBuilder.UseSqlServer("Server=127.0.0.1;Database=eopDB;Uid=sqlserver;Password=capstone2020");
            }
        }

        protected override void OnModelCreating(ModelBuilder modelBuilder)
        {
            modelBuilder.HasAnnotation("Relational:Collation", "SQL_Latin1_General_CP1_CI_AS");

            modelBuilder.Entity<Notification>(entity =>
            {
                entity.ToTable("Notification");

                entity.Property(e => e.Category)
                    .IsRequired()
                    .HasMaxLength(50);

                entity.Property(e => e.DateToFire).HasColumnType("datetime");

                entity.Property(e => e.Status)
                    .IsRequired()
                    .HasMaxLength(50);

                entity.Property(e => e.Text)
                    .IsRequired()
                    .HasMaxLength(200);

                entity.Property(e => e.Title)
                    .IsRequired()
                    .HasMaxLength(50);
            });

            modelBuilder.Entity<KanbanTask>(entity =>
            {
                entity.ToTable("KanbanTask");

                entity.HasKey(e => e.TaskId);

                entity.Property(e => e.Description)
                    .HasMaxLength(500);

                entity.Property(e => e.DueDate)
                    .HasColumnType("datetime");

                entity.Property(e => e.ForField)
                    .HasMaxLength(50);

                entity.Property(e => e.Status)
                    .HasMaxLength(10);
            });

            modelBuilder.Entity<DashWidget>(entity =>
            {
                entity.ToTable("DashWidget");

                entity.HasKey(e => e.DivKey);

                entity.Property(e => e.XPos).IsRequired();

                entity.Property(e => e.YPos).IsRequired();

                entity.Property(e => e.Width).IsRequired();

                entity.Property(e => e.Height).IsRequired();

                entity.Property(e => e.MinWidth).IsRequired();
            });

            OnModelCreatingPartial(modelBuilder);
        }

        partial void OnModelCreatingPartial(ModelBuilder modelBuilder);
    }
}
