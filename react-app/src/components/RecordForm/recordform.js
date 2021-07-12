import React, { useState} from "react";
import { useDispatch } from "react-redux";
import { makeRecord} from '../../store/record'
import {Flex, Input, Button} from "@chakra-ui/react"


const RecordForm =()=>{
    const dispatch = useDispatch()
    const [title, setTitle]=useState("")

    const createTitle=(e)=>{
        setTitle(e.target.value)
    }

    const submitRecord = async(e)=>{
        e.preventDefault();
        const sendRecord= await dispatch(makeRecord({title}))
    }


    return(
        <>
            <form onSubmit={submitRecord}>
                <div>
                    <Input
                        name="title"
                        type="text"
                        placeholder="Title"
                        value={title}
                        onChange={createTitle}
                    />
                </div>
                <Button type='submit'>Create</Button>
            </form>
        </>
    )
}


export default RecordForm
