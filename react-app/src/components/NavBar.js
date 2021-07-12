import React from 'react';
import { NavLink } from 'react-router-dom';
import LogoutButton from './auth/LogoutButton';
import {Flex, Spacer, Square, Center, Box} from "@chakra-ui/react"
import { useSelector } from 'react-redux';

const NavBar = () => {
  const sessionUser = useSelector(state=> state.session.user)

  let sessionLinks;
  if(sessionUser){
    sessionLinks=(
      <>
      <Flex justify="flex-end" bg="purple.200" h="100px" w="100%" color="white" p={6}>
        <div>
          <a href="https://github.com/lyjimmy1" exact={true} activeClassName="active">
            Github
          </a>
        </div>
        <div>
          <a href="www.linkedin.com/in/jimmy-ly-22b925134">
            LinkedIn
          </a>
        </div>
      </Flex>
    </>
    )
  } else{
    sessionLinks=(
      <>
      <Flex justify="space-between" bg="tomato" h="100px" w="100%" color="white" p={6}>
        <NavLink to="/" exact={true} activeClassName="active">
          Home
        </NavLink>
        <NavLink to="/login" exact={true} activeClassName="active">
          Login
        </NavLink>
        <NavLink to="/sign-up" exact={true} activeClassName="active">
          Sign Up
        </NavLink>
      </Flex>
    </>
    )
  }

  return (
    <nav>
      {sessionLinks}
    </nav>
  );
}

export default NavBar;
