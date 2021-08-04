import React from "react";
import {useHistory} from 'react-router-dom'
import {
    FormControl,
    FormLabel,
    FormErrorMessage,
    FormHelperText,
    Input, InputGroup, InputLeftElement
  } from "@chakra-ui/react"

import {GiArchiveResearch} from "react-icons/gi"

const SearchBar = ({searchQuery, setSearchQuery})=>{



    return(
        <FormControl id="search" >
            <InputGroup>
                <InputLeftElement
                    pointerEvents="none"
                    children={<GiArchiveResearch />}
                />
                <Input
                    value={searchQuery}
                    onChange={e => setSearchQuery(e.target.value)}
                    type="text"
                    placeholder="Search"
                    name="s"/>
            </InputGroup>
        </FormControl>
    )
}

export default SearchBar
