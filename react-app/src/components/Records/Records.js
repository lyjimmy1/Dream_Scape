import React, {useEffect} from 'react';
import {useSelector, useDispatch} from 'react-redux';
import {obtainRecords} from '../../store/record'
import {Text} from '@chakra-ui/react'

const AllRecords = ()=>{
    const dispatch = useDispatch()
    const records = useSelector(state => Object.values(state.record.records))
    console.log(records, "THESE ARE MY RECORDS")

    useEffect(async()=>{
        await dispatch(obtainRecords())
    }, [dispatch])


    return(
        <>
            {records.map(record =>
            <Text>{record.title}</Text>)}
        </>
    )
}

export default AllRecords
