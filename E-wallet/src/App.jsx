import './App.scss'
import Home from './views/Home'
import AddCard from './views/AddCard'
import { createBrowserRouter, RouterProvider } from 'react-router-dom' 

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />
  },
  {
    path: "/addCard",
    element: <AddCard />
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
