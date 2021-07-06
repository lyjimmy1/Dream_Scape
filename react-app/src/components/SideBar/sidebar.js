import React from 'react';
import { NavLink } from 'react-router-dom';
import {Flex, Spacer, Square, Center, Box} from "@chakra-ui/react"

const SideBar = () =>{

    return(
        <Flex pos="sticky"
        left="5" h="95vh"
        marginTop="2.5vh"
        w="200px"
        direction="column"
        justifyContent="space-between"
        background="purple.100">
            <p> hey </p>
        </Flex>
    )
}

export default SideBar
