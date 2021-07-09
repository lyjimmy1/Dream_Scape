import React, {useEffect, useState} from 'react';
import {useSelector, useDispatch} from 'react-redux';
import {obtainEntries} from '../../store/entry'
import { NavLink } from 'react-router-dom'
import {Flex, HStack, LinkBox, LinkOverlay, Text} from '@chakra-ui/react'
import { NavLink as ReactLink} from 'react-router-dom';
import './entries.css'


const AllEntries =()=>{
    const dispatch = useDispatch()
    const entries = useSelector(state => Object.values(state.entry.entries))

    useEffect(async()=>{
        await dispatch(obtainEntries())
    }, [dispatch])



    return(
        <HStack className="scroll-bar">
            {entries.map(entry=>
            <LinkBox w="100px" h="100px" borderRadius="md" bg="teal.100" key={entry.id}>
                <Flex justify="space-between">
                    <Flex align="center">
                        <LinkOverlay as={ReactLink} to={`/entry-form/${entry.id}`}>
                            {entry.title}
                            <Text color="gray.400">{entry.content.replace(/<[^>]*>/g, '')}</Text>
                            <Text color="gray.400">{entry.created_at}</Text>
                        </LinkOverlay>
                    </Flex>
                </Flex>
            </LinkBox>)}
        </HStack>

    )
}


export default AllEntries
