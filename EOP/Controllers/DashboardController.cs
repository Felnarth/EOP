using EOP_DAL.Models;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace EOP.Controllers
{
    [Route("EOP/api/[controller]")]
    [Route("api/[controller]")]
    [ApiController]
    public class DashboardController : ControllerBase
    {
        private readonly eopDBContext _context;
        public DashboardController(eopDBContext context)
        {
            _context = context;
        }

        [HttpGet("[action]")]
        public async Task<ActionResult<IEnumerable<Notification>>> GetNotifications()
        {
            try
            {
                return await _context.Notifications.ToListAsync();
            }
            catch (Exception)
            {
                return BadRequest();
            }
            
        }

        [HttpGet("[action]")]
        public async Task<ActionResult> SetDismissed(int id)
        {
            try
            {
                Notification notification = await _context.Notifications.FindAsync(id);
                notification.Status = "dismissed";
                await _context.SaveChangesAsync();
                return Ok();
            }
            catch (Exception)
            {
                return BadRequest();
            }

        }

        [HttpGet("[action]")]
        public async Task<ActionResult> SetActive(int id)
        {
            try
            {
                Notification notification = await _context.Notifications.FindAsync(id);
                notification.Status = "active";
                await _context.SaveChangesAsync();
                return Ok();
            }
            catch (Exception)
            {
                return BadRequest();
            }

        }

        [HttpGet("[action]")]
        public ActionResult<IEnumerable<TOCObject>> GetEvents()
        {
            List<TOCObject> defaultItems = new List<TOCObject>();
            defaultItems.Add(new TOCObject(0, "j1023", "j1023 - Long Vacation", new DateTime(2021, 4, 5), new DateTime(2021, 4, 9)));
            return defaultItems;
        }

        [HttpGet("[action]")]
        public ActionResult<OrgObject> GetOrgs()
        {
            //List<OrgObject> defaultOrgs = new List<OrgObject>();
            return new OrgObject("E4000", "test", "ASDF Org", new PersonObject("N1", "Tom Joseph Brown", "General Manager", new List<PersonObject>(), "101A"), new List<OrgObject>()
            {
                new OrgObject("E4100", "test", "QWERTY Org", new PersonObject("N2", "Lind Lorraine Mill", "Department Manager", new List<PersonObject>(), "102A"), new List<OrgObject>(){
                    new OrgObject("E4110", "test", "ZXCV Org", new PersonObject("N4", "Tia Rachel Sunny", "Team Lead", new List<PersonObject>(){
                        new PersonObject("N6", "Dan Robert Roberts", "Engineer", new List<PersonObject>(), "102C"),
                        new PersonObject("N7", "Robert Reid Newman", "Engineer", new List<PersonObject>(), "102D")
                    }, "102B"), new List<OrgObject>())
                }),
                new OrgObject("E4200", "test", "YTREWQ Org", new PersonObject("N3", "Cindy Abigail Simms", "Department Manager", new List<PersonObject>(), "103A"), new List<OrgObject>(){
                    new OrgObject("E4210", "test", "VBNM Org", new PersonObject("N5", "Jeffer Jefferson Holmes", "Team Lead", new List<PersonObject>(){
                        new PersonObject("N8", "Andrew Lee Yates", "Engineer", new List<PersonObject>(), "103C"),
                        new PersonObject("N9", "Nicholas Grant Wilkins", "Engineer", new List<PersonObject>(), "103D")
                    }, "103B"), new List<OrgObject>())
                })
            });
        }

        [HttpGet("[action]")]
        public ActionResult<PersonObject> GetPersons()
        {
            List<PersonObject> defaultPersons = new List<PersonObject>();
            return new PersonObject("N2", "Lind Lorraine Mill", "Department Manager", new List<PersonObject>(), "102A");
        }

        [HttpGet("[action]")]
        public ActionResult<IEnumerable<CourseObject>> GetCourses()
        {
            List<CourseObject> defaultCourses = new List<CourseObject>();
            defaultCourses.Add(new CourseObject("1", "CSCI590", "Capstone", "Active", "Applying accumulated knowledge", "January 11 2021", "asdf", "qwerty"));
            defaultCourses.Add(new CourseObject("2", "ITS315", "Introduction to Networks", "Archive", "Networking fundamentals", "January 11 2021", "asdf", "qwerty"));
            defaultCourses.Add(new CourseObject("3", "ITS350", "Information Systems & Security", "Archive", "Network security basics", "January 11 2021", "asdf", "qwerty"));
            defaultCourses.Add(new CourseObject("4", "CSCI515", "Ethical Hacking", "Active", "Network penetration testing", "March 15 2021", "asdf", "qwerty"));
            defaultCourses.Add(new CourseObject("5", "ITS455", "Digital Dorensics & Investigations", "Active", "Digital forensics for business & government", "March 15 2021", "asdf", "qwerty"));
            defaultCourses.Add(new CourseObject("6", "BADM345", "Business Communications", "Archive", "Communication in business setting", "August 20 2020", "asdf", "qwerty"));
            defaultCourses.Add(new CourseObject("7", "COMM190", "Introduction to Communications", "Archive", "Communication basics", "August 20 2020", "asdf", "qwerty"));
            defaultCourses.Add(new CourseObject("8", "CSCI411", "Operating Systems", "Archive", "Windows & Linux system modeling", "August 20 2020", "asdf", "qwerty"));
            defaultCourses.Add(new CourseObject("9", "CSCI520", "Database Systems Design", "Archive", "Intro to databse concepts and SQL", "August 20 2020", "asdf", "qwerty"));
            return defaultCourses;
        }

    }

    public class TOCObject
    {
        public TOCObject(int id, string userId, string title, DateTime start, DateTime end)
        {
            Id = id;
            UserId = userId;
            Title = title;
            Start = start;
            End = end;
        }

        public int Id { get; set; }
        public string UserId { get; set; }
        public string Title { get; set; }
        public DateTime Start { get; set; }
        public DateTime End { get; set; }
    }

    public class OrgObject
    {
        public OrgObject(string orgId, string orgTitle, string orgName, PersonObject manager, List<OrgObject> children)
        {
            Id = orgId;
            Name = orgName;
            Title = orgTitle;
            Manager = manager;
            Children = children;
        }

        //property fields
        public string Id { get; set; }
        public string Name { get; set; }
        public string Title { get; set; }
        public PersonObject Manager { get; set; }
        public List<OrgObject> Children { get; set; }
    }

    public class PersonObject
    {
        public PersonObject(string userId, string fullName, string position, List<PersonObject> children, string roomNumber)
        {
            Id = userId;
            Name = fullName;
            Title = position;
            //FirstName = firstName;
            //LastName = lastName;
            //MiddleName = middleName;
            Children = children;
            RoomNumber = roomNumber;
        }

        public string Id { get; set; }
        public string Name { get; set; }
        public string Title { get; set; }
        public List<PersonObject> Children { get; set; }
        //public string FirstName { get; set; }
        //public string LastName { get; set; }
        //public string MiddleName { get; set; }
        public string RoomNumber { get; set; }

    }

    public class CourseObject
    {
        public CourseObject(string id, string courseCode, string courseTitle, string statusText, string courseDesc, string availDate, string content1, string content2)
        {
            Id = id;
            CourseCode = courseCode;
            CourseTitle = courseTitle;
            StatusText = statusText;
            CourseDesc = courseDesc;
            AvailDate = availDate;
            Content1 = content1;
            Content2 = content2;
        }

        //property fields
        public string Id { get; set; }
        public string CourseCode { get; set; }
        public string CourseTitle { get; set; }
        public string StatusText { get; set; }
        public string CourseDesc { get; set; }
        public string AvailDate { get; set; }
        public string Content1 { get; set; }
        public string Content2 { get; set; }
    }
}
