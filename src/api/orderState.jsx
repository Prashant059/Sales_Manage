// src/api/ordersState.js
let orders = [
    {
      id: 1,
      customer_id: 11908,
      sku_id: 220,
      price: 12.0,
      quantity: 12.0,
      invoice_no: "INV346512",
      invoice_date: "2024-07-05",
    },
    {
      id: 2,
      customer_id: 11910,
      sku_id: 230,
      price: 45.0,
      quantity: 56.0,
      invoice_no: "INV201456",
      invoice_date: "2024-05-04",
    },
  ];
  
  export const getOrders = () => {
    return orders;
  };
  
  export const addOrder = (order) => {
    const newOrder = { ...order, id: orders.length + 1 };
    orders.push(newOrder);
    return newOrder;
  };
  