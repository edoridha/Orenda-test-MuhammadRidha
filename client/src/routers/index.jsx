import {createBrowserRouter, redirect} from 'react-router-dom'
import Layout from '../components/Layout'
import MainMenu from '../views/MainMenu'
import FormUser from '../views/FormUser'

export default createBrowserRouter(
    [
        {element: <Layout/>,
    children: [
        {
            path: '/',
            element: <MainMenu/>
        },
        {
            path: '/add-customer',
            element: <FormUser/>
        }
    ]}
    ]
)