using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Inabox.Models;

namespace Inabox.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class ServerController : Controller
    {
        private readonly InaboxContext _context;

        public ServerController(InaboxContext context)
        {
            _context = context;

            if (_context.Servers.Count() == 0)
            {
                // Create a new TodoItem if collection is empty,
                // which means you can't delete all Servers.
                _context.Servers.Add(new Server { 
                    Name = "Item1",
                    Hostname = "localhost",
                    Port = 5001,
                    Active = false
                });
                Console.WriteLine("called");
                _context.SaveChanges();
            }
        }
        // GET: api/Server
        [HttpGet]
        public async Task<ActionResult<IEnumerable<Server>>> GetServers()
        {
            return await _context.Servers.ToListAsync();
        }

        // GET: api/Server/5
        [HttpGet("{id}")]
        public async Task<ActionResult<Server>> GetServer(long id)
        {
            var server = await _context.Servers.FindAsync(id);

            if (server == null)
            {
                return NotFound();
            }

            return server;
        }

        // POST api/Server
        [HttpPost]
        public async Task<ActionResult<Server>> PostServer(Server server)
        {
            _context.Servers.Add(server);
            await _context.SaveChangesAsync();

            return CreatedAtAction(nameof(GetServer), new Server{ Id = server.Id }, server);
        }

        // PUT: api/Server/5
        [HttpPut("{id}")]
        public async Task<IActionResult> PutServer(long id, Server server)
        {
            if (id != server.Id)
            {
                return BadRequest();
            }

            _context.Entry(server).State = EntityState.Modified;
            await _context.SaveChangesAsync();

            return NoContent();
        }
        // DELETE: api/Server/5
        [HttpDelete("{id}")]
        public async Task<IActionResult> DeleteServer(long id)
        {
            var server = await _context.Servers.FindAsync(id);

            if (server == null) 
            {
                return NotFound();
            }

            _context.Servers.Remove(server);
            await _context.SaveChangesAsync();

            return NoContent();
        }
    }
}