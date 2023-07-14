import { Formik, Form, Field } from "formik";
import {
  Flex,
  Box,
  FormControl,
  FormLabel,
  Input,
  InputGroup,
  HStack,
  InputRightElement,
  Stack,
  Button,
  Heading,
  Text,
  useColorModeValue,
  Link,
} from "@chakra-ui/react";
import { useState } from "react";
import { ViewIcon, ViewOffIcon } from "@chakra-ui/icons";
import { object, string } from "yup";
import APIRequests from "../api";
import { useNavigate } from "react-router-dom";
//import { SubmitTypes } from "../reducers/auth";
import { useAppDispatch } from "../store";


const SignupSchema = object({
  firstName: string().required("First Name is required"),
  lastName: string().required("Last Name is required"),
  email: string().email("Invalid email").required("Email is required"),
  password: string().min(6, "Password must be at least 6 characters").required("Password is required"),
});

export default function SignupCardOg() {
  const [showPassword, setShowPassword] = useState(false);
  const dispatch = useAppDispatch();

  const navigate = useNavigate();

  const Submitvalues = async (values) => {
    console.log(values); // Add your form submission logic here
    // email password as json hai
    values.fname = "amit";
    values.lastname = "mittal";
    values.email = "amit@gmail.com";
    values.password = "amit3456";
    const res = await APIRequests.signUp(values).catch((err) => {
      console.log("Error in SignUp", err);
    });

    if (!res) {
      console.log("Error in SignUp");
      return;
    }

    console.log("res", res);

     dispatch({
          fname: values.fname||"",
          lname: values.lname||"",
          email: values.email||"",
          password: values.password||"",
       }
     );
    navigate("/");
};



  return (
    <Flex
      // minH={"100vh"}
      className="t-min-h-[calc(100vh-60px)]"
      align={"center"}
      justify={"center"}
      bg={useColorModeValue("gray.50", "gray.800")}
    >
      <Stack spacing={8} mx={"auto"} maxW={"lg"} py={12} px={6}>
        <Stack align={"center"}>
          <Heading fontSize={"4xl"} textAlign={"center"}>
            Sign up
          </Heading>
          <Text fontSize={"lg"} color={"gray.600"}>
            to enjoy all of our cool features ✌️
          </Text>
        </Stack>
        <Box
          rounded={"lg"}
          bg={useColorModeValue("white", "gray.700")}
          boxShadow={"lg"}
          p={8}
        >

         <Formik
            initialValues={{ fname:"", lname:"", email: "", password: "" }}
            validationSchema={SignupSchema}
            onSubmit={Submitvalues}
          >
        <Form>
          <Stack spacing={4}>
            <HStack>
              <Box>
                <FormControl id="fname" isRequired>
                  <FormLabel>First Name</FormLabel>
                  <Field as={Input} type="text" name="fname"/>
                </FormControl>
              </Box>
              <Box>
                <FormControl id="lname">
                  <FormLabel>Last Name</FormLabel>
                  <Field as={Input} type="text" name="lname" />
                </FormControl>
              </Box>
            </HStack>
            <FormControl id="email" isRequired>
              <FormLabel>Email address</FormLabel>
              <Field as={Input} type="email" name="email" />
            </FormControl>
            <FormControl id="password" isRequired>
              <FormLabel>Password</FormLabel>
              <InputGroup>
                <Field as={Input} type={showPassword ? "text" : "password"} name="password"/>
                <InputRightElement h={"full"}>
                  <Button
                    variant={"ghost"}
                    onClick={() =>
                      setShowPassword((showPassword) => !showPassword)
                    }
                  >
                    {showPassword ? <ViewIcon /> : <ViewOffIcon />}
                  </Button>
                </InputRightElement>
              </InputGroup>
            </FormControl>
            <Stack spacing={10} pt={2}>
              <Button
                loadingText="Submitting"
                type="submit"
                size="lg"
                bg={"blue.400"}
                color={"white"}
                _hover={{
                  bg: "blue.500",
                }}
              >
                Sign up
              </Button>
            </Stack>
            <Stack pt={6}>
              <Text align={"center"}>
                Already a user?{" "}
                <Link color={"blue.400"} href="/auth/signin">
                  Sign In
                </Link>
              </Text>
            </Stack>
          </Stack>
          </Form>
          </Formik>
        </Box>
      </Stack>
    </Flex>
  );
}
