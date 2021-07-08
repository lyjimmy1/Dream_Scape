import React, {useEffect, useState} from 'react';
import {useSelector, useDispatch} from 'react-redux';
import {obtainEntries} from '../../store/entry'
import { NavLink } from 'react-router-dom'
import {Box, HStack, LinkBox, LinkOverlay} from '@chakra-ui/react'
import { NavLink as ReactLink} from 'react-router-dom';



const AllEntries =()=>{
    const dispatch = useDispatch()
    const entries = useSelector(state => Object.values(state.entry.entries))

    useEffect(async()=>{
        await dispatch(obtainEntries())
    }, [dispatch])

    return(
        <HStack>
            {entries.map(entry=>
            <LinkBox w="100px" h="100px" borderRadius="md" bg="teal.100" >
                <LinkOverlay as={ReactLink} to={`/entry-form/${entry.id}`}>{entry.title}</LinkOverlay>
            </LinkBox>)}
        </HStack>

    )
}


export default AllEntries
