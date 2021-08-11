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
import {updateRecord, deleteRecord} from "../../store/record"



const UpdateRecordMenu =({props})=>{
    const dispatch = useDispatch()
    const [title, setTitle]=useState(props.title)
    const { isOpen, onOpen, onClose} = useDisclosure()

    const updateTitle=(e)=>{
        setTitle(e.target.value)
    }

    const submitUpdatedRecord = async(e)=>{
        e.preventDefault();

        const sendRecord= await dispatch(updateRecord({title, props}))
    }

    const removeRecord = async(e)=>{
        e.preventDefault();
        const payload = props
        const deletedRecord = await dispatch(deleteRecord(payload))
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
                                        <Button onClick={onClose} type='submit'>Change Title</Button>
                                    </form>
                                </ModalBody>
                            </ModalContent>
                        </Modal>
                    </MenuItem>
                    <MenuItem icon={<DeleteIcon />} onClick={removeRecord}>
                        Delete Record
                    </MenuItem>
                </MenuList>
            </Menu>
        </>
    )
}

export default UpdateRecordMenu
