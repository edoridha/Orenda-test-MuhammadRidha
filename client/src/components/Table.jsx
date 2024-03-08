import React, { useState } from 'react'
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import TextField from '@mui/material/TextField';
import PageSelect from './PageSelect';
import MoreVertIcon from '@mui/icons-material/MoreVert';
import Button from '@mui/material/Button';
import { useLocation, useNavigate } from 'react-router-dom';

export default function TableComponent(props) {
    const navigate = useNavigate()
    const location = useLocation()

    const { customerList, currentPage, totalItem, startItem, endItem } = props

    const queryParams = new URLSearchParams(location.search)
    const name = queryParams.get("name") || ""
    const phone = queryParams.get("phone") || ""

    const [searchName, setSearchName] = useState(name || '');
    const [searchPhone, setSearchPhone] = useState(phone || '');

    const handleSearchNameChange = (event) => {
        setSearchName(event.target.value);
    };

    const handleSearchKeyPress = (event) => {
        console.log(event);
        if (event.key === 'Enter') {
            navigate(`/?page=0&limit=10&name=${searchName}&phone=${searchPhone}`)
        }
    }

    const handleSearchPhoneChange = (event) => {
        setSearchPhone(event.target.value);
    };
    return (
        <TableContainer>
            <Table>
                <TableHead>
                    <TableRow>
                        <TableCell>Customer Name</TableCell>
                        <TableCell>Phone Number </TableCell>
                        <TableCell>Email Address</TableCell>
                        <TableCell>Address</TableCell>
                        <TableCell>Action</TableCell>
                    </TableRow>
                </TableHead>
                <TableBody>
                    <TableRow>
                        <TableCell>
                            <TextField id="outlined-basic"
                                label="Search name"
                                variant="outlined"
                                value={searchName}
                                onChange={handleSearchNameChange}
                                onKeyDown={handleSearchKeyPress} />
                        </TableCell>
                        <TableCell>
                            <TextField id="outlined-basic"
                                label="Search phone"
                                variant="outlined"
                                value={searchPhone}
                                onChange={handleSearchPhoneChange}
                                onKeyDown={handleSearchKeyPress} />
                        </TableCell>
                        <TableCell />
                        <TableCell />
                        <TableCell />
                    </TableRow>
                    {
                        customerList.map((d, k) => {
                            return <TableRow key={k}>
                                <TableCell> {d.name} </TableCell>
                                <TableCell>{d.phone}</TableCell>
                                <TableCell> {d.email} </TableCell>
                                <TableCell> {d.address} </TableCell>
                                <TableCell>
                                    <Button startIcon={<MoreVertIcon/>} ></Button>
                                </TableCell>
                            </TableRow>
                        })
                    }
                    <TableRow>
                        <TableCell colSpan={5} align="right">
                            <PageSelect totalItem={totalItem} currentPage={currentPage} startItem={startItem} endItem={endItem} />
                        </TableCell>
                    </TableRow>
                </TableBody>
            </Table>
        </TableContainer>
    )
}
