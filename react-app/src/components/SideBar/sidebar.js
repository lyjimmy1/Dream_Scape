import React from 'react';
import {useSelector, useDispatch} from 'react-redux'
import { useHistory } from 'react-router-dom';
import {Flex, Avatar, Heading, Text, IconButton, Divider, LinkOverlay} from "@chakra-ui/react"
import {MoonIcon, AddIcon, InfoOutlineIcon, CloseIcon} from '@chakra-ui/icons'
import {logout} from "../../store/session"
import RecordModal from '../RecordForm/recordModal'

const SideBar = () =>{

    const user = useSelector(state => state.session.user)
    const history = useHistory()
    const dispatch= useDispatch()

    const makeEntry= async (e) => {
        e.preventDefault()
        history.push('/entry-form')
    }

    const goHome = async(e) =>{
        e.preventDefault()
        history.push('/home')
    }

    const logOut = async(e)=>{
        e.preventDefault()
        await dispatch(logout());
    }

    return(
        <Flex pos="sticky"
         h="95vh" ml={2}
        marginTop="2.5vh"
        w="200px"
        borderRadius='md'
        direction="column"
        justifyContent="flex-start"
        background="purple.100"
        boxShadow='md'>

            <Flex align="center" ml={3} mb={3} mt={3}>
                <Avatar size="sm"/>
                <Flex direction="column" ml={3}>
                    <Heading size="sm" direction="column" ml={2}>Welcome!</Heading>
                    <Text ml={3}>{user.full_name}</Text>
                </Flex>
            </Flex>

            <Divider  orientation="horizontal" colorScheme="purple"/>

            <Flex align="center" mt={3} mb={3}>
                <IconButton
                ml={3}
                borderRadius='md'
                colorScheme="purple"
                aria-label="Redirects to Home"
                icon={<MoonIcon/>}
                onClick={goHome}
                />
                <Flex direction="column" ml={3}>
                        <Text>Home</Text>
                </Flex>
            </Flex>

            <Flex align="center" mt={3} mb={3}>
                <IconButton
                ml={3}
                borderRadius='50'
                colorScheme="purple"
                aria-label="Creates an Entry"
                icon={<AddIcon/>}
                onClick={makeEntry}
                />
                <Flex direction="column" ml={3}>
                        <Text>New Dream Entry</Text>
                </Flex>
            </Flex>

            <Flex align="center" mt={3} mb={3}>
                <IconButton
                ml={3}
                borderRadius='50'
                colorScheme="purple"
                aria-label="Creates a Record"
                icon={<AddIcon/>}
                />
                <Flex direction="column" ml={3}>
                        <RecordModal />
                </Flex>
            </Flex>

            {/* <Flex align="center">
                <LinkOverlay href="https://github.com/lyjimmy1">
                    <IconButton
                    ml={3}
                    borderRadius='md'
                    colorScheme="purple"
                    aria-label="Redirects to About Me Page"
                    icon={<InfoOutlineIcon/>}
                    />
                </LinkOverlay>
                <Flex direction="column" ml={3}>
                        <Text>Github</Text>
                </Flex>
            </Flex> */}

            <Flex align="flex-end" mt={3} mb={3}>
                <IconButton
                ml={3}
                borderRadius='md'
                colorScheme="purple"
                aria-label="Logs me out"
                icon={<CloseIcon/>}
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
