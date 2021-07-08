import AllEntries from "../Entries/Entries";
import React, {useEffect, useState} from 'react'
import {useDispatch, useSelector} from 'react-redux'
import {HStack, Stack} from "@chakra-ui/react"
import SideBar from "../SideBar/sidebar";
import {obtainEntries} from "../../store/entry"

const HomePage =()=>{
    const dispatch = useDispatch()
    const currentState = useSelector(state => state.entry.entries)
    console.log(currentState, "AFTER DELETION")

    useEffect(async()=>{
        await dispatch(obtainEntries())
        console.log("IS THIS RUNNING")
    }, [dispatch, currentState])

    return(
        <>
            <AllEntries/>
            <SideBar />
        </>
    )
}

export default HomePage
