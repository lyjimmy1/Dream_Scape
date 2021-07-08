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
import React from 'react';

const LittleDeleteIcon=()=>{
    return(
        <Menu>
            <MenuButton
                as={DeleteIcon}
                aria-label="Delete"
                icon={DeleteIcon}
                variant="outline"/>
            <MenuList>
                <MenuItem >
                    Delete Entry
                </MenuItem>
            </MenuList>
        </Menu>

    )
}

export default LittleDeleteIcon
