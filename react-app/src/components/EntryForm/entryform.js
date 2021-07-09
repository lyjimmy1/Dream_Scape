import React, { useEffect, useState} from "react";
import { useDispatch } from "react-redux";
import { useHistory } from "react-router-dom";
import { makeEntry } from "../../store/entry";
import ReactQuill from 'react-quill'
import 'react-quill/dist/quill.snow.css';
import {Flex, Input, Button} from "@chakra-ui/react"
import SideBar from "../SideBar/sidebar"
import './entryform.css'

const EntryForm = ()=>{
    const dispatch=useDispatch()
    const history=useHistory()
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

        history.push("/home")
    }

    return(
        <Flex>
            <SideBar />
            <Flex  width="100%" mt='2.5vh' direction="column" background="gray.100" p={12} rounded={12}>
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
                            className="editor"
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
    )
}

export default EntryForm
