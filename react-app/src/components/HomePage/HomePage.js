import AllEntries from "../Entries/Entries";
import React from 'react'
import {HStack, Stack} from "@chakra-ui/react"
import SideBar from "../SideBar/sidebar";

const HomePage =()=>{

    return(
        <>
            <AllEntries/>


            <SideBar />
        </>
    )
}

export default HomePage
