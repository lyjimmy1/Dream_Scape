import React, {useEffect} from 'react';
import {useSelector, useDispatch} from 'react-redux';
import {obtainRecords} from '../../store/record'
import {Flex, List, ListItem, ListIcon, Table,Thead,Tbody,Tr,Th,Td,TableCaption, Container,Menu,
    MenuButton,
    MenuList,
    MenuItem,
   IconButton, Divider} from '@chakra-ui/react'
import {GiSecretBook} from 'react-icons/gi'
import {HamburgerIcon, EditIcon, DeleteIcon} from '@chakra-ui/icons'
import SideBar from '../SideBar/sidebar'
import UpdateRecordMenu from '../RecordForm/recordMenu';

const AllRecords = ()=>{
    const dispatch = useDispatch()
    const records = useSelector(state => Object.values(state.record.records))


    useEffect(async()=>{
        await dispatch(obtainRecords())
    }, [dispatch])


    return(
        <Flex>
            <SideBar />
            <Container>
                <Table variant="striped" colorScheme="gray">
                    <TableCaption>---End of List---</TableCaption>
                    <Thead>
                        <Tr>
                            <Th size="large">Records</Th>
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
