import './App.scss'
import Home from './views/Home'
import AddCart from './views/AddCart'
//import CardForm from './components/CardForm/CardForm'
import { createBrowserRouter, RouterProvider } from 'react-router-dom' 

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />
  },
  {
    path: "addCart",
    element: <AddCart />
  }
])

function App() {
  

  return (
    <div className="App">
      <RouterProvider router={ router } />
      
    </div>
  )
}

export default App
