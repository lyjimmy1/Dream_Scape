import {Menu,
    MenuButton,
    MenuList,
    MenuItem,
    MenuItemOption,
    MenuGroup,
    MenuOptionGroup,
    MenuIcon,
    MenuCommand,
    MenuDivider} from '@chakra-ui/react'
import {DeleteIcon} from '@chakra-ui/icons'
import React, {useEffect, useState} from 'react'
import {useDispatch, useSelector} from 'react-redux'
import { useParams, useHistory } from 'react-router-dom';
import {deleteEntry, obtainEntries} from '../../store/entry'



const DeleteEntryIcon=()=>{
    // let [currentState, setCurrentState] = useState("")

    const currentState = useSelector(state => state.entry.entries)
    console.log(currentState, "THIS IS THE CURRENT STATE RN")

    const dispatch=useDispatch()
    const {id} = useParams()
    const history = useHistory()

    const deleteSubmit = async(e)=>{
        e.preventDefault();
        const payload = {id}
        const deletedEntry = await dispatch(deleteEntry(payload))
        history.push('/home')
    }


    return(
        <Menu>
            <MenuButton
                as={DeleteIcon}
                aria-label="Delete"
                icon={DeleteIcon}
                variant="outline"/>
            <MenuList>
                <MenuItem onClick={deleteSubmit}>
                    Delete Entry
                </MenuItem>
            </MenuList>
        </Menu>

    )
}

export default DeleteEntryIcon
