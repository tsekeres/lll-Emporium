using LLL_Emporium.DataAccess;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using LLL_Emporium.Models;

namespace LLL_Emporium.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class TransactionController : ControllerBase
    {
        private TransactionRepository _transactionRepository;


        public TransactionController(TransactionRepository transactionRepo)
        {
            _transactionRepository = transactionRepo;
        }

        [HttpGet]
        public IActionResult GetAllTransactions()
        {
            var result = _transactionRepository.GetAllTransactions();
            if (result.Count() > 0)
            {
                return Ok(result);
            }
            else return NotFound("No Transactions.");
        }

        [HttpGet("{transactionId}")]
        public IActionResult GetTransactionById(Guid transactionId)
        {
            var result = _transactionRepository.GetTransactionById(transactionId);
            if (result != null)
            {
                return Ok(result);
            }
            else return NotFound("Transaction not found");
        }

        [HttpGet("order/{orderId}")]
        public IActionResult GetTransactionsByOrderId(Guid orderId)
        {
            var result = _transactionRepository.GetTransactionsByOrderId(orderId);
            if (result != null)
            {
                return Ok(result);
            }
            else return NotFound($"Transactions for order with id {orderId} not found.");
        }

        [HttpGet("paymentType/{paymentTypeId}")]
        public IActionResult GetTransactionsByPaymentTypeId(Guid paymentTypeId)
        {
            var result = _transactionRepository.GetTransactionsByPaymentTypeId(paymentTypeId);
            if (result != null)
            {
                return Ok(result);
            }
            else return NotFound($"Transactions for Payment Type with id {paymentTypeId} not found.");
        }

        [HttpGet("transactionType/{transactionTypeId}")]
        public IActionResult GetTransactionsByTransactionTypeId(Guid transactionTypeId)
        {
            var result = _transactionRepository.GetTransactionsByTransactionTypeId(transactionTypeId);
            if (result != null)
            {
                return Ok(result);
            }
            else return NotFound($"Transactions for Transaction Type with id {transactionTypeId} not found.");
        }


        [HttpPost]
        public IActionResult CreateTransaction(Transaction transaction)
        {
            var result = _transactionRepository.AddTransaction(transaction);
            if (result.Equals(Guid.Empty))
            {
                return BadRequest("Transaction Not Added");
            }
            else
            {
                return Created($"/api/transactions/{result}", result);
            }
        }

        [HttpDelete("{transactionId}")]
        public IActionResult DeleteTransaction(Guid transactionId)
        {
            var result = _transactionRepository.DeleteTransaction(transactionId);
            if (result)
            {
                return Ok($"Transaction with Id {transactionId} was deleted");
            }
            else return NotFound($"Transaction with Id {transactionId} not found for deletion");
        }

        [HttpPatch("{transactionId}")]
        public IActionResult UpdateTransaction(Guid transactionId, Transaction transaction)
        {
            var result = _transactionRepository.UpdateTransaction(transactionId, transaction);
            if (result)
            {
                return Ok($"Transaction with id {transactionId} has been updated");
            }
            else return BadRequest($"Transaction with id {transactionId} not updated");
        }
    }
}
