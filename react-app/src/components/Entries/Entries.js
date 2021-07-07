import React, {useEffect, useState} from 'react';
import {useSelector, useDispatch} from 'react-redux';
import {obtainEntries} from '../../store/entry'
import { NavLink } from 'react-router-dom'

const AllEntries =()=>{
    const dispatch = useDispatch()
    const entries = useSelector(state => Object.values(state.entry.entries))

    useEffect(async()=>{
        await dispatch(obtainEntries())
    }, [dispatch])

    return(
        <div>
            {entries.map(entry=>
            <NavLink to={`/entry-form/${entry.id}`} >{entry.title}</NavLink>)}
        </div>
    )
}


export default AllEntries
