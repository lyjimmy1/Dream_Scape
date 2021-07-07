import React, {useEffect, useState} from 'react';
import {useSelector, useDispatch} from 'react-redux';
import {obtainEntries} from '../../store/entry'
import { NavLink } from 'react-router-dom'
import {Box, HStack} from '@chakra-ui/react'


const AllEntries =()=>{
    const dispatch = useDispatch()
    const entries = useSelector(state => Object.values(state.entry.entries))

    useEffect(async()=>{
        await dispatch(obtainEntries())
    }, [dispatch])

    return(
        <HStack>
            {entries.map(entry=>
            <Box w="100px" h="100px" borderRadius="md" bg="teal.100" >
                <NavLink to={`/entry-form/${entry.id}`}>{entry.title}</NavLink>
            </Box>)}
        </HStack>

    )
}


export default AllEntries
