import React, { useState} from "react";
import { useDispatch } from "react-redux";
import { makeRecord} from '../../store/record'
import {Input, Button, Modal,
    ModalOverlay,
    ModalContent,
    ModalHeader,
    ModalBody,
    ModalCloseButton,
    useDisclosure, Text,} from "@chakra-ui/react"




const RecordForm =()=>{
    const dispatch = useDispatch()
    const [title, setTitle]=useState("")
    const { isOpen, onOpen, onClose} = useDisclosure()

    const createTitle=(e)=>{
        setTitle(e.target.value)
    }

    const submitRecord = async(e)=>{
        e.preventDefault();
        const sendRecord= await dispatch(makeRecord({title}))
    }


    return(
        <>
            <Text onClick={onOpen}>New Record</Text>

            <Modal isOpen={isOpen} onClose={onClose}>
                <ModalOverlay />
                <ModalContent>
                    <ModalHeader>Create a Record</ModalHeader>
                    <ModalCloseButton/>
                    <ModalBody>
                        <form onSubmit={submitRecord}>
                            <div>
                                <Input
                                    name="title"
                                    type="text"
                                    placeholder="Title"
                                    value={title}
                                    onChange={createTitle}
                                    mb={3}
                                />
                            </div>
                            <Button onClick={onClose} type='submit'>Create</Button>
                        </form>
                    </ModalBody>
                </ModalContent>
            </Modal>
        </>
    )
}


export default RecordForm
