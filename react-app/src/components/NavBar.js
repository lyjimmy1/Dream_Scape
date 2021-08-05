import React from 'react';
import { NavLink as ReactLink, useHistory} from 'react-router-dom';
import {Flex, Button, Image, Spacer, Text, Heading} from "@chakra-ui/react"
import { useSelector, useDispatch } from 'react-redux';
import {demoUser} from '../../src/store/session'
import {FaLinkedin, FaGithub} from 'react-icons/fa'
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

      <Flex bgGradient="linear(to-r, purple.100, purple.400, purple.100)" h="auto" w="100%"  p={6}>
        <ReactLink to="/home" exact={true} margin="0" position="absolute">
          <Image justify="flex-start" align="center" src={cuteMoon} height='50px'/>
        </ReactLink>
        <Heading mt={5} align="center" color="purple" fontSize="lg">DREAM SCAPE</Heading>
        <Spacer />
      </Flex>
    </>
    )
  } else{
    sessionLinks=(
      <>
      <Flex justify="space-between" bg="purple.200" h="auto" w="100%" color="white" p={6} position="relative">
        <Button colorScheme="purple"as={ReactLink} to="/" exact={true} activeClassName="active">
          Home
        </Button>
        <Button colorScheme="purple" as={ReactLink} to="/login" exact={true} activeClassName="active">
          Login
        </Button>
        <Button colorScheme="purple" as={ReactLink} to="/sign-up" exact={true} activeClassName="active">
          Sign Up
        </Button>
        <Button colorScheme="purple" onClick={submitDemo}>Demo User</Button>
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
