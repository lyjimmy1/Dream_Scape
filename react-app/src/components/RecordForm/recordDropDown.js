import React from "react";
import {useSelector } from "react-redux";
import {useDisclosure,Menu,
    MenuButton,
    MenuList,
    MenuItem,
   IconButton} from "@chakra-ui/react"
import {ChevronDownIcon, EditIcon, MoonIcon} from '@chakra-ui/icons'
import { NavLink as ReactLink} from 'react-router-dom';

const RecordDropDown = ({props}) =>{
    const entries = useSelector(state => Object.values(state.entry.entries))
    const { isOpen, onOpen, onClose} = useDisclosure()

    // const displayEntries = (entry, props) =>{

    //     if (entry.record_id === props.id){
    //         return entry.title
    //     }
    // }

    return(
        <>
            <Menu >
                <MenuButton
                    as={IconButton}
                    aria-label="Options"
                    icon={<ChevronDownIcon />}
                />
                <MenuList>
                {entries.filter(entry => entry.record_id === props.id).map(filteredEntry =>(
                    <MenuItem icon={<MoonIcon />} as={ReactLink} to={`/entry-form/${filteredEntry.id}`}>
                        {filteredEntry.title}
                    </MenuItem>
                ))}
                </MenuList>
            </Menu>
        </>
    )
}

export default RecordDropDown
