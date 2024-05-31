import React from "react";
import { useForm } from "react-hook-form";
import { Box, Button, Input, FormControl, FormLabel, Text } from "@chakra-ui/react";
import { useNavigate } from "react-router-dom";

const Login = () => {
  const { register, handleSubmit } = useForm();
  const navigate = useNavigate();

  const onSubmit = (data) => {
    if (data.username === "user" && data.password === "password") {
      localStorage.setItem("auth", "true");
      navigate("/orders");
    } else {
      alert("Invalid credentials");
    }
  };

  return (
    <Box maxW="sm" mx="auto" mt="10">
      <Text mb="4" fontSize="lg">
        Use ! user and password as credentials
      </Text>
      <form onSubmit={handleSubmit(onSubmit)}>
        <FormControl>
          <FormLabel>Username</FormLabel>
          <Input {...register("username", { required: true })} />
        </FormControl>
        <FormControl mt="4">
          <FormLabel>Password</FormLabel>
          <Input type="password" {...register("password", { required: true })} />
        </FormControl>
        <Button mt="4" colorScheme="teal" type="submit">
          Login
        </Button>
      </form>
    </Box>
  );
};

export default Login;
