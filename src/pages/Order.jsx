import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Tabs, TabList, TabPanels, Tab, TabPanel, Box, Button, Flex } from "@chakra-ui/react";
import ActiveOrders from "../components/ActiveOrders";
import CompletedOrders from "../components/CompleteOrders";
import SaleOrderModal from "../components/SaleOrdersModal";
import DarkModeToggle from "../components/DarkModeToggle";


const Orders = () => {
  const [isModalOpen, setModalOpen] = useState(false);
  const navigate = useNavigate();

  const handleLogout = () => {
    navigate("/login");
  };

  return (
    <Box p="4">
      <Flex justifyContent="space-between" alignItems="center" mb="4">
        <Button onClick={() => setModalOpen(true)} colorScheme="teal">
          + Sale Order
        </Button>
        <Flex alignItems="center">
          <DarkModeToggle /> 
          <Button onClick={handleLogout} colorScheme="red" ml="4">
            Logout
          </Button>
        </Flex>
      </Flex>
      <Tabs isFitted>
        <TabList>
          <Tab>Active Orders</Tab>
          <Tab>Completed Orders</Tab>
        </TabList>
        <TabPanels>
          <TabPanel>
            <ActiveOrders />
          </TabPanel>
          <TabPanel>
            <CompletedOrders />
          </TabPanel>
        </TabPanels>
      </Tabs>
      <SaleOrderModal isOpen={isModalOpen} onClose={() => setModalOpen(false)} />
    </Box>
  );
};

export default Orders;



