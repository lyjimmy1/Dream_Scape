import React, {useState} from 'react';
import {useSelector, useDispatch} from 'react-redux'
import { useHistory } from 'react-router-dom';
import {Flex, Avatar, Heading, Text, IconButton, Divider, useDisclosure, Spacer, Link} from "@chakra-ui/react"
import {GiSecretBook, GiBookshelf, GiStabbedNote, GiArchiveResearch} from 'react-icons/gi'
import {RiMoonClearFill} from 'react-icons/ri'
import {FiLogOut} from 'react-icons/fi'
import {logout} from "../../store/session"
import RecordForm from '../RecordForm/recordform'
import SearchModal from '../Search/SearchModal'


const SideBar = () =>{

    const user = useSelector(state => state.session.user)
    const history = useHistory()
    const dispatch= useDispatch()
    const { isOpen, onOpen, onClose} = useDisclosure()


    const makeEntry= async (e) => {
        e.preventDefault()
        history.push('/entry-form')
    }

    const goHome = async(e) =>{
        e.preventDefault()
        history.push('/home')
    }

    const goRecords = async(e) =>{
        e.preventDefault()
        history.push('/records')
    }

    const logOut = async(e)=>{
        e.preventDefault()
        await dispatch(logout());
    }


    return(
        <Flex pos="sticky"
         h="auto" ml={2}
        marginTop="2.5vh"
        w="200px"
        borderRadius='md'
        direction="column"
        justifyContent="flex-start"
        background="purple.100"
        boxShadow={"5px 5px 5px gray"}>

            <Flex align="center" ml={3} mb={3} mt={3}>
                <Avatar size="sm"/>
                <Flex direction="column" ml={3}>
                    <Heading size="sm" direction="column" ml={2}>Welcome!</Heading>
                    <Text ml={3}>{user.full_name}</Text>
                </Flex>
            </Flex>

            <Divider  orientation="horizontal" colorScheme="black"/>

            <Link mt={3} mb={3} _hover={{background: "purple.200"}}>
                <Flex align="center"  onClick={goHome}>
                    <IconButton
                    as={RiMoonClearFill}
                    ml={3}
                    borderRadius='md'
                    colorScheme="purple"
                    aria-label="Redirects to Home"
                    onClick={goHome}
                    />
                    <Flex direction="column" ml={3}>
                            <Text>Home</Text>
                    </Flex>
                </Flex>
            </Link>

            <Link mt={3} mb={3} _hover={{background: "purple.200"}}>
                <Flex align="center"  onClick={makeEntry}>
                    <IconButton
                    as={GiStabbedNote}
                    ml={3}
                    borderRadius='md'
                    colorScheme="purple"
                    aria-label="Creates an Entry"
                    onClick={makeEntry}
                    />
                    <Flex direction="column" ml={3}>
                            <Text>New Dream Entry</Text>
                    </Flex>
                </Flex>
            </Link>

            <Link mt={3} mb={3} _hover={{background: "purple.200"}}>
                <Flex align="center" >
                    <IconButton
                    as={GiSecretBook}
                    ml={3}
                    borderRadius='md'
                    colorScheme="purple"
                    aria-label="Creates a Record"
                    />
                    <Flex direction="column" ml={3}>
                        <RecordForm />
                    </Flex>
                </Flex>
            </Link>

            <Link mt={3} mb={3} _hover={{background: "purple.200"}}>
                <Flex align="center" onClick={goRecords}>
                    <IconButton
                    as={GiBookshelf}
                    ml={3}
                    borderRadius='md'
                    colorScheme="purple"
                    aria-label="Redirects to Records page"
                    />
                    <Flex direction="column" ml={3}>
                            <Text>View Records</Text>
                    </Flex>
                </Flex>
            </Link>

            <Link mt={3} mb={3} _hover={{background: "purple.200"}}>
                <Flex align="center" >
                    <IconButton
                    as={GiArchiveResearch}
                    ml={3}
                    borderRadius='md'
                    colorScheme="purple"
                    aria-label="Renders a search modal"
                    />
                    <Flex direction="column" ml={3}>
                            <SearchModal />
                    </Flex>
                </Flex>
            </Link>

            <Spacer />

            <Flex align="flex-end" mt={3} mb={10} _hover={{background: "purple.200"}} onClick={logOut}>
                <IconButton
                as={FiLogOut}
                ml={3}
                borderRadius='md'
                colorScheme="purple"
                aria-label="Logs me out"
                onClick={logOut}
                />
                <Flex direction="column" ml={3}>
                        <Text>Log Out</Text>
                </Flex>
            </Flex>
        </Flex>
    )
}

export default SideBar
