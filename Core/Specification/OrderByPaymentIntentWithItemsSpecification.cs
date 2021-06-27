using Core.Entities.OrderAggregate;
using Core.Specification;

namespace Core.Specifications
{
    public class OrderByPaymentIntentSpecification :  BaseSpecification<Order>
    {
        public OrderByPaymentIntentSpecification(string paymentIntentId) 
            : base(o => o.PaymentIntentId == paymentIntentId)
        {
        }
    }
}