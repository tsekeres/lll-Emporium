using LLL_Emporium.DataAccess;
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

    }
}
