using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;
using CustomerApi.Data;
using CustomerApi.Model;
using Microsoft.EntityFrameworkCore;

// For more information on enabling Web API for empty projects, visit https://go.microsoft.com/fwlink/?LinkID=397860

namespace CustomerApi.Controllers
{
    [Route("api/[controller]")]
    public class CusController : Controller
    {
        private readonly CusDbContext _context;

        public CusController(CusDbContext context) => _context = context;

        [HttpGet]
        public async Task<IEnumerable<CustomerDetail>> Get()
             => await _context.CustomerDetails.ToListAsync();

        [HttpGet("{id}")]
        [ProducesResponseType(typeof(CustomerDetail), StatusCodes.Status200OK)]
        [ProducesResponseType(StatusCodes.Status404NotFound)]

        public async Task<IActionResult> GetById(Guid id)
        {
            var CustomerDetail = await _context.CustomerDetails.FindAsync(id);
            return CustomerDetail == null ? NotFound() : Ok(CustomerDetail);
        }

        [HttpPost]
        [ProducesResponseType(StatusCodes.Status201Created)]
        public async Task<IActionResult> Create(CustomerDetail CustomerDetail)
        {
            await _context.CustomerDetails.AddAsync(CustomerDetail);
            await _context.SaveChangesAsync();

            return CreatedAtAction(nameof(GetById), new { id = CustomerDetail.CustomerID }, CustomerDetail);
        }

        [HttpPut("{id}")]
        [ProducesResponseType(StatusCodes.Status204NoContent)]
        [ProducesResponseType(StatusCodes.Status400BadRequest)]
        public async Task<IActionResult> Update(Guid id, CustomerDetail CustomerDetail)
        {
            if (id != CustomerDetail.CustomerID ) return BadRequest();

            CustomerDetail.IsEdited();

            _context.Entry(CustomerDetail).State = EntityState.Modified;
            await _context.SaveChangesAsync();

            return NoContent();
        }

        [HttpDelete("{id}")]
        [ProducesResponseType(StatusCodes.Status204NoContent)]
        [ProducesResponseType(StatusCodes.Status404NotFound)]
        public async Task<IActionResult> Delete(Guid id)
        {
            var CustomerDetailToDelete = await _context.CustomerDetails.FindAsync(id);
            if (CustomerDetailToDelete == null) return NotFound();

            _context.CustomerDetails.Remove(CustomerDetailToDelete);
            await _context.SaveChangesAsync();

            return NoContent();
        }
    }
}
