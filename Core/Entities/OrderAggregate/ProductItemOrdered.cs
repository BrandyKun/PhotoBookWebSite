namespace Core.Entities.OrderAggregate
{
    public class ProductItemOrdered
    {
        public ProductItemOrdered()
        {
        }

        public ProductItemOrdered(int productItemId, string productName, string url)
        {
            ProductItemId = productItemId;
            ProductName = productName;
            Url = url;
        }

        public int ProductItemId { get; set; }
        public string ProductName { get; set; }
        public string Url { get; set; }
    }
}