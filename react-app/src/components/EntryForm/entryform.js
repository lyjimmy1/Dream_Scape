import React, { useEffect, useState} from "react";
import { useSelector, useDispatch } from "react-redux";
import { makeEntry } from "../../store/entry";
import ReactQuill from 'react-quill'
import 'react-quill/dist/quill.snow.css';
import {Heading, extendTheme, Flex, Input, Button, Textarea} from "@chakra-ui/react"


const EntryForm = ()=>{
    const dispatch=useDispatch()
    const [errors, setErrors] = useState([])
    const [entryErrors, setEntryErrors] = useState([])
    const [title, setTitle] = useState("")
    const [content, setContent]=useState("")

    const updateTitle = (e) =>{
        setTitle(e.target.value)
    }

    const updateContent = (value) =>{
        setContent(value)
    }

    const submitEntry = async (e) =>{
        e.preventDefault();
        const sendEntry = await dispatch(makeEntry({title, content}))

    }

    return(
        <>
            <Flex align="center" justify="center">
                <Flex direction="column" background="gray.100" p={12} rounded={12}>
                    <form onSubmit={submitEntry}>
                        <div>
                            <label htmlFor="title">Title</label>
                            <Input
                                name="title"
                                type="text"
                                placeholder="Title"
                                value={title}
                                onChange={updateTitle}
                            />
                        </div>
                        <div>
                            <label htmlFor="content">Content</label>
                            <ReactQuill
                                name="content"
                                type="text"
                                placeholder="Content"
                                value={content}
                                onChange={updateContent}
                                mb={6}
                            />
                        </div>
                        <Button type='submit'>Create</Button>
                    </form>
                </Flex>
            </Flex>
        </>
    )
}

export default EntryForm
