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
            List<OrgObject> defaultOrgs = new List<OrgObject>();
            //defaultOrgs.Add(new OrgObject("E4000", "test", "ASDF Org", new PersonObject("Tom", "Brown", "Mitchell", "N1", "101A"), new List<OrgObject>(), new List<PersonObject>()));
            return new OrgObject("E4000", "test", "ASDF Org", new PersonObject("Tom", "Brown", "Mitchell", "N1", "101A"), new List<OrgObject>(), new List<PersonObject>());
        }

        [HttpGet("[action]")]
        public ActionResult<IEnumerable<PersonObject>> GetPersons()
        {
            List<PersonObject> defaultPersons = new List<PersonObject>();
            defaultPersons.Add(new PersonObject("Lind", "Mill", "Lorraine", "N2", "102A"));
            defaultPersons.Add(new PersonObject("Cindy", "Simms", "Rachael", "N3", "102B"));
            return defaultPersons;
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
        public OrgObject(string orgId, string orgTitle, string orgName, PersonObject manager, List<OrgObject> children, List<PersonObject> members)
        {
            Id = orgId;
            Name = orgName;
            Title = orgTitle;
            Manager = manager;
            Children = children;
            Members = members;
        }

        //property fields
        public string Id { get; set; }
        public string Name { get; set; }
        public string Title { get; set; }
        public PersonObject Manager { get; set; }
        public List<OrgObject> Children { get; set; }
        public List<PersonObject> Members { get; set; }

    }    

    public class PersonObject
    {
        public PersonObject(string firstName, string lastName, string middleName, string userID, string roomNumber)
        {
            FirstName = firstName;
            LastName = lastName;
            MiddleName = middleName;
            UserID = userID;
            RoomNumber = roomNumber;
            //Org = org;
        }

        //org they belong to
        //public OrgObject Org { get; set; }
        //refer to person json object in github  -- fname lname mname userid rmnum
        public string FirstName { get; set; }
        public string LastName { get; set; }
        public string MiddleName { get; set; }
        public string UserID { get; set; }
        public string RoomNumber { get; set; }

    }
}
