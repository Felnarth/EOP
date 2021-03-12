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
}
