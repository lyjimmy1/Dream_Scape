import React, {useEffect, useState} from 'react';
import {useSelector, useDispatch} from 'react-redux';
import {obtainEntries} from '../../store/entry'

const AllEntries =()=>{
    const dispatch = useDispatch()
    const entries = useSelector(state => Object.values(state.entry.entries))
    console.log(entries, "THESE ARE ALL MY ENTRIES")

    useEffect(async()=>{
        await dispatch(obtainEntries())
    }, [dispatch])

    return(
        <div>
            {entries.map(entry=>
            <p>{entry.title}</p>)}
        </div>
    )
}


export default AllEntries
