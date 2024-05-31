import React from "react";
import { useForm, Controller } from "react-hook-form";
import {
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalCloseButton,
  ModalBody,
  ModalFooter,
  Button,
  FormControl,
  FormLabel,
  Input,
  FormErrorMessage,
} from "@chakra-ui/react";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import { createSaleOrder } from "../api";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

const SaleOrderModal = ({ isOpen, onClose }) => {
  const {
    register,
    handleSubmit,
    control,
    reset,
    formState: { errors },
  } = useForm();
  const queryClient = useQueryClient();

  const mutation = useMutation({
    mutationFn: createSaleOrder,
    onSuccess: (data) => {
      queryClient.invalidateQueries("activeOrders");
      onClose();
      reset();
    },
  });

  const onSubmit = (data) => {
    mutation.mutate(data);
  };

  return (
    <Modal isOpen={isOpen} onClose={onClose}>
      <ModalOverlay />
      <ModalContent>
        <ModalHeader>Create Sale Order</ModalHeader>
        <ModalCloseButton />
        <ModalBody>
          <form onSubmit={handleSubmit(onSubmit)}>
            <FormControl isInvalid={errors.customer_id} mb="4">
              <FormLabel>Customer ID</FormLabel>
              <Input
                {...register("customer_id", { required: "Customer ID is required" })}
              />
              <FormErrorMessage>{errors.customer_id && errors.customer_id.message}</FormErrorMessage>
            </FormControl>

            <FormControl isInvalid={errors.sku_id} mb="4">
              <FormLabel>SKU ID</FormLabel>
              <Input {...register("sku_id", { required: "SKU ID is required" })} />
              <FormErrorMessage>{errors.sku_id && errors.sku_id.message}</FormErrorMessage>
            </FormControl>

            <FormControl isInvalid={errors.price} mb="4">
              <FormLabel>Price</FormLabel>
              <Input
                type="number"
                {...register("price", {
                  required: "Price is required",
                  valueAsNumber: true,
                })}
              />
              <FormErrorMessage>{errors.price && errors.price.message}</FormErrorMessage>
            </FormControl>

            <FormControl isInvalid={errors.quantity} mb="4">
              <FormLabel>Quantity</FormLabel>
              <Input
                type="number"
                {...register("quantity", {
                  required: "Quantity is required",
                  valueAsNumber: true,
                })}
              />
              <FormErrorMessage>{errors.quantity && errors.quantity.message}</FormErrorMessage>
            </FormControl>

            <FormControl isInvalid={errors.invoice_no} mb="4">
              <FormLabel>Invoice No</FormLabel>
              <Input
                {...register("invoice_no", { required: "Invoice No is required" })}
              />
              <FormErrorMessage>{errors.invoice_no && errors.invoice_no.message}</FormErrorMessage>
            </FormControl>

            <FormControl isInvalid={errors.invoice_date} mb="4">
              <FormLabel>Invoice Date</FormLabel>
              <Controller
                control={control}
                name="invoice_date"
                rules={{ required: "Invoice Date is required" }}
                render={({ field }) => (
                  <DatePicker
                    selected={field.value}
                    onChange={field.onChange}
                    dateFormat="dd/MM/yyyy"
                  />
                )}
              />
              <FormErrorMessage>{errors.invoice_date && errors.invoice_date.message}</FormErrorMessage>
            </FormControl>

            <Button mt="4" colorScheme="teal" type="submit" isLoading={mutation.isLoading}>
              Submit
            </Button>
          </form>
        </ModalBody>
      </ModalContent>
    </Modal>
  );
};

export default SaleOrderModal;

