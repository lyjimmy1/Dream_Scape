import React from 'react';
import { NavLink, useHistory} from 'react-router-dom';
import LogoutButton from './auth/LogoutButton';
import {Flex, Button, Image, Spacer, Text} from "@chakra-ui/react"
import { useSelector, useDispatch } from 'react-redux';
import {demoUser} from '../../src/store/session'
import cuteMoon from '../components/images/cute_moon.png'



const NavBar = () => {
  const sessionUser = useSelector(state=> state.session.user)
  const dispatch = useDispatch();
  const history = useHistory();


  const submitDemo = async (e) =>{
    e.preventDefault()
    let sendDemo= await dispatch(demoUser())

    history.push("/home")

  }


  let sessionLinks;
  if(sessionUser){
    sessionLinks=(
      <>

      <Flex bg="purple.200" h="100px" w="100%" color="white" p={6}>
        <Image  justify="flex-start" align="center" src={cuteMoon} height='80px' mb={3}/>
        <Text align="center" color="purple">DREAM SCAPE</Text>
        <Spacer />
        <Flex justify="flex-end">
          <a href="https://github.com/lyjimmy1"  exact={true} activeClassName="active">
            Github
          </a>

          <a href="https://linkedin.com/in/jimmy-ly-22b925134">
            LinkedIn
          </a>
        </Flex>
      </Flex>
    </>
    )
  } else{
    sessionLinks=(
      <>
      <Flex justify="space-between" bg="purple.200" h="100px" w="100%" color="white" p={6}>
        <NavLink to="/" exact={true} activeClassName="active">
          Home
        </NavLink>
        <NavLink to="/login" exact={true} activeClassName="active">
          Login
        </NavLink>
        <NavLink to="/sign-up" exact={true} activeClassName="active">
          Sign Up
        </NavLink>
        <Button colorScheme="purple.200" onClick={submitDemo}>Demo User</Button>
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
