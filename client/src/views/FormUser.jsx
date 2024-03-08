import React, { useState } from 'react'
import Box from '@mui/material/Box';
import Divider from '@mui/material/Divider';
import Link from '@mui/material/Link';
import { useNavigate } from 'react-router-dom';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import { useDispatch, useSelector } from 'react-redux';
import { newCustomerRequest } from '../store/actions/customerAction';


export default function FormUser() {
    const dispatch = useDispatch()
    const navigate = useNavigate()

    const [form, setForm] = useState({
        name: '',
        phone: '',
        email: '',
        address: ''
    })

    const handleForm = (e) => {
        setForm({
            ...form,
            [e.target.name]: e.target.value,
        });
    };

    const handleClick = () => {
        navigate('/')
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        dispatch(newCustomerRequest(form))
        navigate('/')
    }
    return (
        <Box sx={{ alignItems: 'center', justifyContent: 'center', padding: '20px', margin: '10px', width: '100vh' }}>
            <Divider />
            <h1>Customers Page</h1>
            <div style={{ display: 'flex', alignItems: 'center' }}>
                <Link underline="none" sx={{ color: '#c40b0b', marginRight: '8px' }} onClick={handleClick} >
                    Main menu
                </Link>
                <p style={{ margin: 0 }}> {'> Create New Customer'}</p>
            </div>

            <form onSubmit={handleSubmit} style={{ border: '1px solid', padding: '5px', margin: '5px' }}>
                <h2>Customer Information</h2>
                <div style={{ display: 'flex', flexDirection: 'row', alignItems: 'center', justifyContent: 'center', width: '100%', height: '100vh' }}>
                    <div style={{ display: 'flex', margin: '5px', flexDirection: 'column' }}>
                        <TextField id="outlined-basic" name='name' sx={{ margin: '5px' }} value={form.name} onChange={handleForm} label="Customer Name *" variant="outlined" fullWidth />
                        <TextField id="outlined-basic" name='phone' sx={{ margin: '5px' }} value={form.phone} onChange={handleForm} label="Phone Number *" variant="outlined" fullWidth />
                        <TextField id="outlined-basic" name='email' sx={{ margin: '5px' }} value={form.email} onChange={handleForm} label="Email Address *" variant="outlined" fullWidth />
                    </div>
                    <TextField id="outlined-basic" name='address' label="Address *" value={form.address} onChange={handleForm} sx={{ margin: '5px' }} variant="outlined" multiline rows={7} />
                </div>
                <Divider />
                <div style={{ display: 'flex', justifyContent: 'flex-end', margin: '5px' }}>
                    <Button sx={{ backgroundColor: 'white', color: "black", border: '1px solid', marginRight: "5px" }} onClick={handleClick}>Cancel</Button>
                    <Button type='submit' sx={{
                        backgroundColor: '#c40b0b', color: 'white', marginRight: '10px', '&:hover': {
                            backgroundColor: '#a10808',
                        },
                    }}>Create New</Button>
                </div>
            </form>
        </Box>
    )
}
