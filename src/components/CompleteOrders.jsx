import React from "react";
import { Box, Table, Thead, Tbody, Tr, Th, Td } from "@chakra-ui/react";
import { useQuery } from "@tanstack/react-query";
import { getCompletedOrders } from "../api/index"; // Placeholder function

const CompletedOrders = () => {
  const { data, isLoading } = useQuery({
    queryKey: ["completedOrders"],
    queryFn: getCompletedOrders,
  });
  
  if (isLoading) return <div>Loading...</div>;

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
              <Td>{order.invoice_date}</Td>
            </Tr>
          ))}
        </Tbody>
      </Table>
    </Box>
  );
};

export default CompletedOrders;
