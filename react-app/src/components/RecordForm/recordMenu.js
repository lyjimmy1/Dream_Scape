import React, { useState} from "react";
import { useDispatch, useSelector } from "react-redux";
import {Input, Button, Modal,
    ModalOverlay,
    ModalContent,
    ModalHeader,
    ModalBody,
    ModalCloseButton,
    useDisclosure,Menu,
    MenuButton,
    MenuList,
    MenuItem,
   IconButton,} from "@chakra-ui/react"
import {HamburgerIcon, EditIcon, DeleteIcon} from '@chakra-ui/icons'
import {updateRecord} from "../../store/record"



const UpdateRecordMenu =({props})=>{
    const dispatch = useDispatch()
    const [title, setTitle]=useState(props.title)
    const { isOpen, onOpen, onClose} = useDisclosure()
    console.log(props, "HELLO THIS IS MY CURRENT RECORD")

    const updateTitle=(e)=>{
        setTitle(e.target.value)
        console.log("is this even hitting?", title)
    }

    const submitUpdatedRecord = async(e)=>{
        e.preventDefault();

        const sendRecord= await dispatch(updateRecord({title, props}))
    }

    return(
        <>
            <Menu >
                <MenuButton
                    as={IconButton}
                    aria-label="Options"
                    icon={<HamburgerIcon />}
                />
                <MenuList>
                    <MenuItem icon={<EditIcon />} onClick={onOpen}>
                        Edit Record Name
                        <Modal isOpen={isOpen} onClose={onClose}>
                            <ModalOverlay />
                            <ModalContent>
                                <ModalHeader>Head Stuck in the Clouds?</ModalHeader>
                                <ModalCloseButton/>
                                <ModalBody>
                                    <form onSubmit={submitUpdatedRecord}>
                                        <div>
                                            <Input
                                                name="title"
                                                type="text"
                                                placeholder="Title"
                                                value={title}
                                                onChange={updateTitle}
                                                mb={3}
                                            />
                                        </div>
                                        <Button type='submit'>Change Title</Button>
                                    </form>
                                </ModalBody>
                            </ModalContent>
                        </Modal>
                    </MenuItem>
                    <MenuItem icon={<DeleteIcon />}>
                        Delete Record
                    </MenuItem>
                </MenuList>
            </Menu>
        </>
    )
}

export default UpdateRecordMenu
