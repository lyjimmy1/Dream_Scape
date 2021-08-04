import React from "react";
import {
    FormControl,
    FormLabel,
    FormErrorMessage,
    FormHelperText,
    Input, InputGroup, InputLeftElement
  } from "@chakra-ui/react"

import {GiArchiveResearch} from "react-icons/gi"

const SearchBar = ()=>{



    return(
        <FormControl id="search" background="purple.300">
            <InputGroup>
                <InputLeftElement
                    pointerEvents="none"
                    children={<GiArchiveResearch />}
                />
                <Input type="text" placeholder="Search" color="white.300"/>
            </InputGroup>
        </FormControl>
    )
}

export default SearchBar
