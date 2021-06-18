using Core.Entities.OrderAggregate;
using Core.Specification;

namespace Core.Specifications
{
    public class OrderByPaymentIntentWithItemsSpecification :  BaseSpecification<Order>
    {
        public OrderByPaymentIntentWithItemsSpecification(string paymentIntentId) 
            : base(o => o.PaymentIntentId == paymentIntentId)
        {
        }
    }
}