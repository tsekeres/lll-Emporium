using LLL_Emporium.DataAccess;
using LLL_Emporium.Models;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace LLL_Emporium.Controllers
{
    [Route("api/transactiontypes")]
    [ApiController]
    public class TransactionTypeController : ControllerBase
    {
        private TransactionTypeRepository _transactionTypeRepository;

        public TransactionTypeController(TransactionTypeRepository transactionTypeRepo)
        {
            _transactionTypeRepository = transactionTypeRepo;
        }

        [HttpGet]
        public IActionResult GetAllTransactionTypes()
        {
            var result = _transactionTypeRepository.GetAllTransactionTypes();
            if (result.Count() > 0)
            {
                return Ok(result);
            }
            else return NotFound("No transaction types.");
        }

        [HttpGet("{transactionTypeId}")]
        public IActionResult GetTransactionTypeById(Guid transactionTypeId)
        {
            var result = _transactionTypeRepository.GetTransactionTypeById(transactionTypeId);
            if (result != null)
            {
                return Ok(result);
            }
            else return NotFound("Transaction Type not found");
        }

        [HttpPost]
        public IActionResult CreateTransactionType(TransactionType transactionType)
        {
            var result = _transactionTypeRepository.AddTransactionType(transactionType);
            if (result.Equals(Guid.Empty))
            {
                return BadRequest("Transaction Type Not Added");
            }
            else
            {
                return Created($"/api/transactionTypes/{result}", result);
            }
        }

        [HttpDelete("{transactionTypeId}")]
        public IActionResult DeleteTransactionType(Guid transactionTypeId)
        {
            var result = _transactionTypeRepository.DeleteTransactionType(transactionTypeId);
            if (result)
            {
                return Ok($"Transaction Type with Id {transactionTypeId} was deleted");
            }
            else return NotFound($"Transaction Type with Id {transactionTypeId} not found for deletion");
        }

        [HttpPatch("{transactionTypeId}")]
        public IActionResult PatchTransactionType(Guid transactionTypeId, TransactionType transactionType)
        {
            var result = _transactionTypeRepository.UpdateTransactionType(transactionTypeId, transactionType);
            if (result)
            {
                return Ok($"Transaction Type with id {transactionTypeId} has been updated");
            }
            else return BadRequest($"Transaction Type with id {transactionTypeId} not updated");
        }
    }
}
