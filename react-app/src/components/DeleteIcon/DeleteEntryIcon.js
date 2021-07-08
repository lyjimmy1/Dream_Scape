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
import React from 'react'
import {useDispatch} from 'react-redux'
import { useParams, useHistory } from 'react-router-dom';
import {deleteEntry} from '../../store/entry'



const DeleteEntryIcon=()=>{

    const dispatch=useDispatch()
    const {id} = useParams()
    const history = useHistory()

    const deleteSubmit = async(e)=>{
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
