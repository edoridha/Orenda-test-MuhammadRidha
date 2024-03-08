import React, { useEffect } from 'react'
import Box from '@mui/material/Box';
import Divider from '@mui/material/Divider';
import TableComponent from '../components/Table';
import AddIcon from '@mui/icons-material/Add';
import Button from '@mui/material/Button';
import { useDispatch, useSelector } from 'react-redux';
import { fetchCustomerRequest } from '../store/actions/customerAction';
import { useLocation, useNavigate } from 'react-router-dom';

export default function MainMenu() {
  const navigate = useNavigate()
  const dispatch = useDispatch()
  const location = useLocation()
  const queryParams = new URLSearchParams(location.search)
  const customerList = useSelector((state) => state.customers.customerList)
  const currentPage = useSelector((state) => state.customers.currentPage)
  const totalItem = useSelector((state) => state.customers.totalItem)
  const startItem = useSelector((state) => state.customers.startItem)
  const endItem = useSelector((state) => state.customers.endItem)
  const loading = useSelector((state) => state.customers.loading)
  const error = useSelector((state) => state.customers.error)

  const page = queryParams.get("page") || "0"
  const limit = queryParams.get("limit") || "10"
  const name = queryParams.get("name") || ""
  const phone = queryParams.get("phone") || ""

  useEffect(() => {
    dispatch(fetchCustomerRequest({ page, limit }, name, phone))
  }, [page, limit, name, phone])

  const addCustomer = ()=> {
    navigate('/add-customer')
  }

  if (loading) {
    return <p>Loading...</p>;
  }

  if (error) {
    return <p>Error: {error}</p>;
  }

  return (
    <div sx={{ textAlign: 'center', margin: '15px', width: '100vh', padding: '10px' }}>
      <Divider sx={{ width: '100vh' }} />
      <h1>Customer Page</h1>
      <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
        <p>Main Menu</p>
        <Button onClick={addCustomer} sx={{ backgroundColor: '#c40b0b', color: 'white', '&:hover': {
            backgroundColor: '#a10808', 
          }, }} startIcon={<AddIcon />}>
          Add New Customer
        </Button>
      </Box>
      <Box sx={{ textAlign: 'center', border: '1px', margin: '2px' }}>
        <TableComponent customerList={customerList} currentPage={currentPage} totalItem={totalItem} startItem={startItem} endItem={endItem} />
      </Box>
    </div>
  )
}
