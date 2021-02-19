using System.Collections.Generic;

namespace Core.Entities
{
    public class CustomerBasket
    {
        // no params        
        public CustomerBasket()
        {
        }
        // with id
        public CustomerBasket(string id)
        {
            Id = id;
        }

        public string Id { get; set; }
        public List<BasketItem> Items { get; set; } = new List<BasketItem>();
    }
}