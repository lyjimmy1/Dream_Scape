import React, { useEffect, useState} from "react";
import { useSelector, useDispatch } from "react-redux";


const EntryForm = ()=>{
    const dispatch=useDispatch()
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
        payload = 
        const data = await dispatch
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
                    <input
                        name="content"
                        type="text"
                        placeholder="Content"
                        value={content}
                        onChange={updateContent}
                    />
                </div>
            </form>
        </>
    )
}
