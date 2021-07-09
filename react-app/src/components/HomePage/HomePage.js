import AllEntries from "../Entries/Entries";
import React, {useEffect, useState} from 'react'
import {useDispatch, useSelector} from 'react-redux'
import {HStack, Stack, Flex} from "@chakra-ui/react"
import SideBar from "../SideBar/sidebar";
import {obtainEntries} from "../../store/entry"

const HomePage =()=>{
    const dispatch = useDispatch()
    const currentState = useSelector(state => state.entry.entries)

    useEffect(async()=>{
        await dispatch(obtainEntries())
    }, [dispatch, currentState])

    return(
        <Flex>
            <SideBar />
            <AllEntries/>
        </Flex>

    )
}

export default HomePage
