import { getOrders, addOrder} from './orderState'


export const getActiveOrders = async () => {
    return getOrders();
  };
  
  export const getCompletedOrders = async () => {
    return [
      {
        id: 3,
        customer_id: 11808,
        sku_id: 410,
        price: 67.00,
        quantity: 34.00,
        invoice_no: "INV567512",
        invoice_date: "2024-02-05",
      },
      {
        id: 4,
        customer_id: 12910,
        sku_id: 330,
        price: 23.00,
        quantity: 23.00,
        invoice_no: "INV895564",
        invoice_date: "2024-03-06",
      },
    ];
  };
  
export const createSaleOrder = async (order) => {
  console.log("Creating order", order);
  const newOrder = addOrder(order);
  return { success: true, data: newOrder };
};
