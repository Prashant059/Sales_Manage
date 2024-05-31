import React from "react";
import { Modal, ModalOverlay, ModalContent, ModalHeader, ModalCloseButton, ModalBody, ModalFooter, Button, FormControl, FormLabel, Input } from "@chakra-ui/react";
import { useForm } from "react-hook-form";

const EditOrderModal = ({ order, onClose }) => {
  const { register, handleSubmit } = useForm();

  const onSubmit = (data) => {
    // Handle edit functionality here
    console.log("Edited order data:", data);
    onClose();
  };

  return (
    <Modal isOpen={true} onClose={onClose}>
      <ModalOverlay />
      <ModalContent>
        <ModalHeader>Edit Order</ModalHeader>
        <ModalCloseButton />
        <ModalBody>
          <form onSubmit={handleSubmit(onSubmit)}>
            <FormControl>
              <FormLabel>Invoice No</FormLabel>
              <Input defaultValue={order.invoice_no} {...register("invoice_no", { required: true })} />
            </FormControl>
            <FormControl mt="4">
              <FormLabel>Customer</FormLabel>
              <Input defaultValue={order.customer_name} {...register("customer_name", { required: true })} />
            </FormControl>
            <FormControl mt="4">
              <FormLabel>Date</FormLabel>
              <Input defaultValue={order.invoice_date} {...register("invoice_date", { required: true })} />
            </FormControl>
            <Button mt="4" colorScheme="teal" type="submit">
              Save Changes
            </Button>
          </form>
        </ModalBody>
      </ModalContent>
    </Modal>
  );
};

export default EditOrderModal;
