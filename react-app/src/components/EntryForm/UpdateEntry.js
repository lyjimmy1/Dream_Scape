import ReactQuill from 'react-quill';
import 'react-quill/dist/quill.snow.css';
import {Flex, Input, Button} from "@chakra-ui/react"
import React, {useEffect, useState} from 'react'
import { useSelector, useDispatch} from 'react-redux';
import {updateEntry} from "../../store/entry"
import {useParams, useHistory, Redirect} from 'react-router-dom'

const UpdateEntry =()=>{
    const dispatch = useDispatch()
    const{id} = useParams()
    const history=useHistory()
    const entries = useSelector(state => state.entry.entries[id])
    console.log(entries, "THESE ARE MY OLD ENTRIES")
    const [title, setTitle] = useState(entries.title)
    const [content, setContent]=useState(entries.content)

    const updateTitle = (e) =>{
        setTitle(e.target.value)
    }

    const updateContent = (value) =>{
        setContent(value)
    }

    const submitEntry = async (e) =>{
        e.preventDefault();
        const payload = {id, title, content}
        const sendEntry = await dispatch(updateEntry(payload))


        history.push("/home")



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
                        <Button mt={3} type='submit'>Accept Changes</Button>
                    </form>
                </Flex>
            </Flex>
        </>
    )
}

export default UpdateEntry
