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
    [Route("api/paymenttypes")]
    [ApiController]
    public class PaymentTypeController : ControllerBase
    {
        private PaymentTypeRepository _paymentTypeRepository;

        public PaymentTypeController(PaymentTypeRepository paymentTypeRepo)
        {
            _paymentTypeRepository = paymentTypeRepo;
        }

        [HttpGet]
        public IActionResult GetAllPaymentTypes()
        {
            var result = _paymentTypeRepository.GetAllPaymentTypes();
            if (result.Count() > 0)
            {
                return Ok(result);
            }
            else return NotFound("No payment types.");
        }

        [HttpGet("{paymentTypeId}")]
        public IActionResult GetPaymentTypeById(Guid paymentTypeId)
        {
            var result = _paymentTypeRepository.GetPaymentTypeById(paymentTypeId);
            if (result != null)
            {
                return Ok(result);
            }
            else return NotFound("Payment Type not found");
        }

        [HttpPost]
        public IActionResult CreatePaymentType(PaymentType paymentType)
        {
            var result = _paymentTypeRepository.AddPaymentType(paymentType);
            if (result.Equals(Guid.Empty))
            {
                return BadRequest("Payment Type Not Added");
            }
            else
            {
                return Created($"/api/paymentTypes/{result}", result);
            }
        }

        [HttpDelete("{paymentTypeId}")]
        public IActionResult DeletePaymentType(Guid paymentTypeId)
        {
            var result = _paymentTypeRepository.DeletePaymentType(paymentTypeId);
            if (result)
            {
                return Ok($"Payment Type with Id {paymentTypeId} was deleted");
            }
            else return NotFound($"Payment Type with Id {paymentTypeId} not found for deletion");
        }

        [HttpPatch("{paymentTypeId}")]
        public IActionResult PatchPaymentType(Guid paymentTypeId, PaymentType paymentType)
        {
            var result = _paymentTypeRepository.UpdatePaymentType(paymentTypeId, paymentType);
            if (result)
            {
                return Ok($"Payment Type with id {paymentTypeId} has been updated");
            }
            else return BadRequest($"Payment Type with id {paymentTypeId} not updated");
        }

    }
}
