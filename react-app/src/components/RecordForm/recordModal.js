import {
    Modal,
    ModalOverlay,
    ModalContent,
    ModalHeader,
    ModalFooter,
    ModalBody,
    ModalCloseButton, useDisclosure, Button
  } from "@chakra-ui/react"
import React from "react";
import RecordForm from './recordform'

const RecordModal =()=>{
    const { isOpen, onOpen, onClose} = useDisclosure()

    return(
        <>
            <Button onClick={onOpen}>Create a New Record</Button>

            <Modal isOpen={isOpen} onClose={onClose}>
                <ModalOverlay />
                <ModalContent>
                    <ModalHeader>Create a New Record</ModalHeader>
                    <ModalCloseButton/>
                    <ModalBody>
                        <RecordForm />
                    </ModalBody>
                </ModalContent>
            </Modal>
        </>
    )
}

export default RecordModal
