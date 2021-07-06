import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Redirect } from "react-router-dom";
import { login } from "../../store/session";
import {Heading, extendTheme, Flex, Input, Button} from "@chakra-ui/react"

const LoginForm = () => {
  const dispatch = useDispatch();
  const user = useSelector(state => state.session.user)
  const [errors, setErrors] = useState([]);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const onLogin = async (e) => {
    e.preventDefault();
    const data = await dispatch(login(email, password));
    if (data.errors) {
      setErrors(data.errors);
    }
  };

  const updateEmail = (e) => {
    setEmail(e.target.value);
  };

  const updatePassword = (e) => {
    setPassword(e.target.value);
  };

  if (user) {
    return <Redirect to="/" />;
  }

  return (
    <>
    <Flex height="100vh" align="center" justify="center">
      <Flex direction="column" background="gray.100" p={12} rounded={12}>
      <Heading>Log In</Heading>
      <form onSubmit={onLogin}>
        <div>
          {errors.map((error) => (
            <div>{error}</div>
          ))}
        </div>
        <div>
          <Input
            name="email"
            type="text"
            placeholder="Email"
            mt={3}
            mb={3}
            value={email}
            onChange={updateEmail}
          />
        </div>
        <div>
          <Input
            name="password"
            type="password"
            placeholder="Password"
            mb={6}
            value={password}
            onChange={updatePassword}
          />
          <Button colorScheme="purple" type="submit">Login</Button>
        </div>
      </form>
      </Flex>
    </Flex>
    </>
  );
};

export default LoginForm;
