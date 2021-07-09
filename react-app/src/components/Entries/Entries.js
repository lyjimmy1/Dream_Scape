import React, {useEffect, useState} from 'react';
import {useSelector, useDispatch} from 'react-redux';
import {obtainEntries} from '../../store/entry'
import { NavLink } from 'react-router-dom'
import {Flex, HStack, Stack, LinkBox, LinkOverlay, Text} from '@chakra-ui/react'
import { NavLink as ReactLink} from 'react-router-dom';
import './entries.css'


const AllEntries =()=>{
    const dispatch = useDispatch()
    const entries = useSelector(state => Object.values(state.entry.entries))

    useEffect(async()=>{
        await dispatch(obtainEntries())
    }, [dispatch])



    return(
        <Stack className="scroll-bar" background="gray.100" direction="row" marginTop="2.5vh" ml={2.5} height='min-content'>
            {entries.map(entry=>
                <LinkBox w="200px" h="200px" borderRadius="md" bg="teal.100" key={entry.id}>
                    <LinkOverlay as={ReactLink} to={`/entry-form/${entry.id}`}>
                        {entry.title}
                        <Text overflow="hidden" color="gray.400">{entry.content.replace(/<[^>]*>/g, '')}</Text>
                        <Flex align="flex-end">
                            <Text overflow="hidden" color="gray.400">{entry.created_at}</Text>
                        </Flex>
                    </LinkOverlay>
                </LinkBox>)}
        </Stack>

    )
}


export default AllEntries
