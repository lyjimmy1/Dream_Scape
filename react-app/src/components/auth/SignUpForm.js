import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Redirect } from 'react-router-dom';
import { signUp } from '../../store/session';
import {Flex, Heading, Input, Button} from "@chakra-ui/react"

const SignUpForm = () => {
  const dispatch = useDispatch();
  const user = useSelector(state => state.session.user)
  const [username, setUsername] = useState("");
  const [full_name, setFullName] = useState("")
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [repeatPassword, setRepeatPassword] = useState("");


  const onSignUp = async (e) => {
    e.preventDefault();
    if (password === repeatPassword) {
      const data = await dispatch(signUp(full_name, username, email, password));
    }
  };

  const updateName = (e) => {
    setFullName(e.target.value);
  };

  const updateUsername = (e) => {
    setUsername(e.target.value);
  };

  const updateEmail = (e) => {
    setEmail(e.target.value);
  };

  const updatePassword = (e) => {
    setPassword(e.target.value);
  };

  const updateRepeatPassword = (e) => {
    setRepeatPassword(e.target.value);
  };

  if (user) {
    return <Redirect to="/home" />;
  }

  return (
    <>
      <Flex height="100vh" align="center" justify="center">
        <Flex direction="column" background="purple.100" p={12} rounded={12} >
          <Heading>Sign Up</Heading>
          <form onSubmit={onSignUp}>
            <div>
              <Input
                type="text"
                name="full_name"
                placeholder="Full Name"
                mt={3}
                mb={3}
                onChange={updateName}
                value={full_name}
                background="white.100"
              />
            </div>
            <div>
              <Input
                type="text"
                name="username"
                placeholder="Username"
                mb={3}
                onChange={updateUsername}
                value={username}
                background="white.100"
              />
            </div>
            <div>
              <Input
                type="text"
                name="email"
                placeholder="Email"
                mb={3}
                onChange={updateEmail}
                value={email}
                background="white.100"
              />
            </div>
            <div>
              <Input
                type="password"
                name="password"
                placeholder="Password"
                mb={3}
                onChange={updatePassword}
                value={password}
                background="white.100"
              />
            </div>
            <div>
              <Input
                type="password"
                name="repeat_password"
                placeholder="Repeat Password"
                mb={6}
                onChange={updateRepeatPassword}
                value={repeatPassword}
                required={true}
                background="white.100"
              />
            </div>
            <Button colorScheme="purple"type="submit">Sign Up</Button>
          </form>
        </Flex>
      </Flex>
    </>
  );
};

export default SignUpForm;
