import React, { useState} from "react";
import { useQuery } from "@tanstack/react-query";
import { getActiveOrders } from "../api";
import { IconButton, Box, Table, Thead, Tbody, Tr, Th, Td, Spinner, Center } from "@chakra-ui/react";
import { format } from "date-fns"; // Import date-fns for date formatting
import { EditIcon } from "@chakra-ui/icons";
import EditOrderModal from "./EditOrderModal";


const ActiveOrders = () => {
  const { data, isLoading, isError } = useQuery({
    queryKey: ["activeOrders"],
    queryFn: getActiveOrders,
  });
  const [editOrder, setEditOrder] = useState(null);

  if (isLoading) {
    return (
      <Center>
        <Spinner size="xl" />
      </Center>
    );
  }

  if (isError) {
    return <div>Error loading active orders</div>;
  }

  return (
    <Box>
      <Table variant="simple">
        <Thead>
          <Tr>
            <Th>Customer ID</Th>
            <Th>SKU ID</Th>
            <Th>Price</Th>
            <Th>Quantity</Th>
            <Th>Invoice No</Th>
            <Th>Invoice Date</Th>
          </Tr>
        </Thead>
        <Tbody>
          {data.map((order) => (
            <Tr key={order.id}>
              <Td>{order.customer_id}</Td>
              <Td>{order.sku_id}</Td>
              <Td>{order.price}</Td>
              <Td>{order.quantity}</Td>
              <Td>{order.invoice_no}</Td>
              <Td>{format(new Date(order.invoice_date), "dd/MM/yyyy")}</Td>
              <Td>
                <IconButton
                  icon={<EditIcon />}
                  onClick={() => setEditOrder(order)}
                />
              </Td>
            </Tr>
          ))}
        </Tbody>
      </Table>
      {editOrder && (
        <EditOrderModal order={editOrder} onClose={() => setEditOrder(null)} />
      )}
    </Box>
  );
};

export default ActiveOrders;

