import React, {useEffect} from 'react';
import {useSelector, useDispatch} from 'react-redux';
import {obtainEntries} from '../../store/entry'
import {Flex, LinkBox, LinkOverlay, Text, SimpleGrid, Spacer} from '@chakra-ui/react'
import { NavLink as ReactLink} from 'react-router-dom';
import './entries.css'


const AllEntries =()=>{
    const dispatch = useDispatch()
    const entries = useSelector(state => Object.values(state.entry.entries))

    useEffect(async()=>{
        await dispatch(obtainEntries())
    }, [dispatch])



    return(
        <SimpleGrid columns={5}  spacing={10} marginTop="2.5vh" ml={2.5}>
            {entries.map(entry=>
                <LinkBox w="200px" h="200px" borderRadius="md" bg="teal.100" key={entry.id}>
                    <LinkOverlay as={ReactLink} to={`/entry-form/${entry.id}`}>
                        {entry.title}
                        <Flex>
                            <Text overflow="hidden" color="gray.400">{entry.content.replace(/<[^>]*>/g, '')}</Text>
                        </Flex>
                        <Spacer />
                        <Flex align="flex-end">
                            <Text overflow="hidden" color="gray.400">{entry.created_at}</Text>
                        </Flex>
                    </LinkOverlay>
                </LinkBox>)}
        </SimpleGrid>

    )
}


export default AllEntries
