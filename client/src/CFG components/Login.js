import {
  Flex,
  Box,
  FormControl,
  FormLabel,
  Input,
  Checkbox,
  Stack,
  Link,
  Button,
  Heading,
  Text,
  useColorModeValue,
} from "@chakra-ui/react";

import { useForm } from "react-hook-form";

export default function Login() {
  const { handleSubmit, register } = useForm();
  // const handleSubmit = (event) => {
  //   event.preventDefault(); // Prevent the default form submission behavior
  //   // Add your form submission logic here, such as making an API request
  //   // or performing client-side validation
  //   // For now, let's log the form data to the console
  //   console.log("FORM DATA", event.target);
  //   const formData = new FormData(event.target);
  //   const email = formData.get("email");
  //   const password = formData.get("password");
  //   console.log("Email:", email);
  //   console.log("Password:", password);
  // };

  const onSubmit = (data) => {
    // Add your form submission logic here, such as making an API request
    // or performing client-side validation
    // For now, let's log the form data to the console
    console.log(data);
  };
  return (
    <Flex
      className="t-w-full t-min-h-[calc(100vh-60px)]"
      // minH={"100vh"}
      align={"center"}
      justify={"center"}
      bg={useColorModeValue("gray.50", "gray.800")}
    >
      <Stack spacing={8} mx={"auto"} maxW={"lg"} py={12} px={6}>
        <Stack align={"center"}>
          <Heading fontSize={"4xl"}>Sign in to your account</Heading>
          <Text fontSize={"lg"} color={"gray.600"}>
            to enjoy all of our cool <Link color={"blue.400"}>features</Link> ✌️
          </Text>
        </Stack>
        <Box
          rounded={"lg"}
          bg={useColorModeValue("white", "gray.700")}
          boxShadow={"lg"}
          p={8}
        >
          <form onSubmit={handleSubmit(onSubmit)}>
            <Stack spacing={4}>
              <FormControl id="email">
                <FormLabel>Email address</FormLabel>
                <Input type="email" ref={register} />
              </FormControl>
              <FormControl id="password">
                <FormLabel>Password</FormLabel>
                <Input type="password" ref={register} />
              </FormControl>
              <Stack spacing={10}>
                <Stack
                  direction={{ base: "column", sm: "row" }}
                  align={"start"}
                  justify={"space-between"}
                >
                  <Checkbox>Remember me</Checkbox>
                  <Link color={"blue.400"}>Forgot password?</Link>
                </Stack>
                <Button
                  type="submit"
                  bg={"blue.400"}
                  color={"white"}
                  _hover={{
                    bg: "blue.500",
                  }}
                >
                  Sign in
                </Button>
              </Stack>
            </Stack>
          </form>
        </Box>
      </Stack>
    </Flex>
  );
}
