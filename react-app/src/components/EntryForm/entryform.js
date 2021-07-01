import React, { useEffect, useState} from "react";
import { useSelector, useDispatch } from "react-redux";
import { makeEntry } from "../../store/entry";

const EntryForm = ()=>{
    const dispatch=useDispatch()
    const [errors, setErrors] = useState([])
    const [entryErrors, setEntryErrors] = useState([])
    const [title, setTitle] = useState("")
    const [content, setContent]=useState("")

    const updateTitle = (e) =>{
        setTitle(e.target.value)
    }

    const updateContent = (e) =>{
        setContent(e.target.value)
    }

    const submitEntry = async (e) =>{
        e.preventDefault();
        const sendEntry = await dispatch(makeEntry({title, content}))

    }

    return(
        <>
            <form onSubmit={submitEntry}>
                <div>
                    <label htmlFor="title">Title</label>
                    <input
                        name="title"
                        type="text"
                        placeholder="Title"
                        value={title}
                        onChange={updateTitle}
                    />
                </div>
                <div>
                    <label htmlFor="content">Content</label>
                    <textarea
                        name="content"
                        type="text"
                        placeholder="Content"
                        value={content}
                        onChange={updateContent}
                    />
                </div>
                <button type='submit'>Create</button>
            </form>
        </>
    )
}

export default EntryForm
