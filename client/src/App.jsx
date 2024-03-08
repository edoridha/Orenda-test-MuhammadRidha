import { RouterProvider } from 'react-router-dom'
import routers from './routers'
import store from './store'
import { Provider } from 'react-redux'


function App() {
  return (
    <Provider store={store}>
    <RouterProvider router={routers}/>
    </Provider>
  )
}

export default App
