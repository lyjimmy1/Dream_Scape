import React, {useEffect} from 'react';
import {useSelector, useDispatch} from 'react-redux';
import {obtainEntries} from '../../store/entry'
import {Flex, LinkBox, LinkOverlay, Text, SimpleGrid, Spacer, Box} from '@chakra-ui/react'
import { NavLink as ReactLink} from 'react-router-dom';
import './entries.css'


const AllEntries =()=>{
    const dispatch = useDispatch()
    const entries = useSelector(state => Object.values(state.entry.entries))

    useEffect(async()=>{
        await dispatch(obtainEntries())
    }, [dispatch])



    return(
        <SimpleGrid  columns={5}  spacing={10} marginTop="2.5vh" ml={3.5}>
            {entries.map(entry=>
                <LinkBox w="200px" h="200px" borderRadius="md" bg="teal.100" key={entry.id} boxShadow={"5px 5px 5px gray"} to={`/entry-form/${entry.id}`}>
                    <LinkOverlay ml={2} mt={1} as={ReactLink} to={`/entry-form/${entry.id}`}>
                        <div className="entry-container">
                            <div className="entry-title">
                                {entry.title}
                            </div>
                            <div className="entry-content">
                                <Text padding={1} color="gray.400">{entry.content.replace(/<[^>]*>/g, '')}</Text>
                            </div>
                            <Spacer />
                            <div className="entry-date">
                                <Text overflow="hidden" color="gray.400">{entry.created_at.toString().split(" ").splice(1,3).join(" ")}</Text>
                            </div>
                        </div>
                    </LinkOverlay>
                </LinkBox>)}
        </SimpleGrid>

    )
}


export default AllEntries
