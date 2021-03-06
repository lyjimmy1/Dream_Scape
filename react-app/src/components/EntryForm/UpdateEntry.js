import ReactQuill from 'react-quill';
import 'react-quill/dist/quill.snow.css';
import {Flex, Input, Button, Select} from "@chakra-ui/react"
import React, {useState} from 'react'
import { useSelector, useDispatch} from 'react-redux';
import {updateEntry, makeEntry} from "../../store/entry"
import {useParams, useHistory} from 'react-router-dom'
import DeleteEntryIcon from '../DeleteIcon/DeleteEntryIcon'
import SideBar from "../SideBar/sidebar"
import './entryform.css'

const UpdateEntry =()=>{
    const dispatch = useDispatch()
    const{id} = useParams()
    const history=useHistory()
    const entries = useSelector(state => state.entry.entries[id])
    const records = useSelector(state => Object.values(state.record.records))
    const [title, setTitle] = useState(entries?.title)
    const [content, setContent]=useState(entries?.content)
    const [record_id, setRecordId]=useState(entries?.record_id)



    const updateTitle = (e) =>{
        setTitle(e.target.value)
    }


    const updateContent = (value) =>{
        setContent(value)
    }

    const updateRecord = (e) =>{
//         console.log(Number(e.target.value), "is this running")
        setRecordId(Number(e.target.value))
    }

    const cancelForm= (e) =>{
        e.preventDefault()
        history.push("/home")
    }

    const submitEntry = async (e) =>{
        e.preventDefault();
        const payload = {id, title, content, record_id}
        const sendEntry = await dispatch(updateEntry(payload))
        history.push("/home")
    }
    return(
        <Flex>
            <SideBar/>
                <Flex width="auto" mt="2.5vh" margin="auto" direction="column" background="gray.100" p={12} rounded={12}>
                    <Flex justify="flex-end">
                        <DeleteEntryIcon />
                    </Flex>
                        <form onSubmit={submitEntry}>
                            <Select placeholder="Add To~" w="20vw" onChange={updateRecord} value={record_id}>
                                {records.map(record =>
                                    <option value={record.id}>--{record.title}--</option>
                                )}
                            </Select>
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
                            <Flex justify="space-between">
                                <Button  onClick={cancelForm} type='submit'>Cancel</Button>
                                <Button  type='submit'>Accept Changes</Button>
                            </Flex>
                        </form>
                </Flex>
        </Flex>
    )
}

export default UpdateEntry
