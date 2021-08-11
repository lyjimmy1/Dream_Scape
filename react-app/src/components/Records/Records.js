import React, {useEffect} from 'react';
import {useSelector, useDispatch} from 'react-redux';
import {obtainRecords} from '../../store/record'
import {obtainEntries} from '../../store/entry'
import {Flex, List, ListItem, ListIcon, Table,Thead,Tbody,Tr,Th,Td,TableCaption, Container, Divider} from '@chakra-ui/react'
import {GiSecretBook} from 'react-icons/gi'
import SideBar from '../SideBar/sidebar'
import UpdateRecordMenu from '../RecordForm/recordMenu';

const AllRecords = ()=>{
    const dispatch = useDispatch()
    const records = useSelector(state => Object.values(state.record.records))
    const entries = useSelector(state => Object.values(state.entry.entries))
    console.log(records)

    const displayNumber = (recordId) =>{

        const filledRecord = entries.filter(entry => entry.record_id === recordId)

        if(filledRecord.length){
            return ` (${filledRecord.length})`
        }
    }


    useEffect(async()=>{
        await dispatch(obtainRecords())
        await dispatch(obtainEntries())
    }, [dispatch])


    return(
        <Flex>
            <SideBar />
            <Container>
                <Table variant="striped" colorScheme="gray">
                    <TableCaption color="white">---End of List---</TableCaption>
                    <Thead>
                        <Tr>
                            <Th color="white" size="large">Records</Th>
                        </Tr>
                    </Thead>
                    <Tbody>
                        <Tr>
                            <Td>
                                <List spacing={5} >
                                    {records.map(record =>
                                    <Flex justify="space-around">
                                        <ListItem >
                                            <ListIcon as={GiSecretBook} />
                                            {record.title}
                                            {displayNumber(record.id)}
                                            <UpdateRecordMenu props={record}/>
                                            <Divider />
                                        </ListItem>
                                    </Flex>)}
                                </List>
                            </Td>
                        </Tr>
                    </Tbody>
                </Table>
            </Container>
        </Flex>
    )
}

export default AllRecords
