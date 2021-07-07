import AllEntries from "../Entries/Entries";
import React from 'react'
import {HStack, Stack} from "@chakra-ui/react"
import SideBar from "../SideBar/sidebar";

const HomePage =()=>{

    return(
        <>
            <Stack spacing='24px'>
                <AllEntries />
            </Stack>

            <SideBar />
        </>
    )
}

export default HomePage
