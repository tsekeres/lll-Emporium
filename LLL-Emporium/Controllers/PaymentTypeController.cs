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
        private PaymentTypeRepository paymentTypeRepository;

    }
}
