import React, { useState} from "react";
import {useSelector} from 'react-redux'
import {Link} from 'react-router-dom'
import {Input, Button, Modal,
    ModalOverlay,
    ModalContent,
    ModalHeader,
    ModalBody,
    ModalCloseButton,
    useDisclosure, Text} from "@chakra-ui/react"
import SearchBar from '../Search/Searchbar'



const SearchModal =()=>{

    const [searchQuery, setSearchQuery] = useState('');
    const entries = useSelector(state => Object.values(state.entry.entries))
    const { isOpen, onOpen, onClose} = useDisclosure()

    const filterEntries =(entries, query) =>{
        if (!query){
            return entries;
        }
        return entries.filter((entry) =>{
            const entryTitle = entry.title.toLowerCase();
            return entryTitle.includes(query);
        })
    }

    const filteredEntries = filterEntries(entries, searchQuery)

                // <SearchBar
                //     searchQuery={searchQuery}
                //     setSearchQuery={setSearchQuery}
                // />
                // <ul>
                //     {filteredEntries.map((entry) =>(
                //         <Link to={`/entry-form/${entry.id}`}key={entry.id}>{entry.title}</Link>
                //     ))}
                // </ul>


    return(
        <>
            <Text onClick={onOpen}>Search</Text>

            <Modal isOpen={isOpen} onClose={onClose}>
                <ModalOverlay />
                <ModalContent>
                    <ModalHeader>Search For An Entry</ModalHeader>
                    <ModalCloseButton/>
                    <ModalBody>
                        <SearchBar
                        searchQuery={searchQuery}
                        setSearchQuery={setSearchQuery}
                        />
                        <ul>
                            {filteredEntries.map((entry) =>(
                                <Link to={`/entry-form/${entry.id}`}key={entry.id}>{entry.title}</Link>
                            ))}
                        </ul>
                    </ModalBody>
                </ModalContent>
            </Modal>
        </>
    )
}


export default SearchModal