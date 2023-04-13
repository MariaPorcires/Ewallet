import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import './index.scss'
import { legacy_createStore } from 'redux'
import { Provider } from 'react-redux'
import addCardReducer from './reducers/addCardReducer'

const store = legacy_createStore(
  addCardReducer,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__() 
)



ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Provider store = { store }>
      <App />
   </Provider>
  </React.StrictMode>,
)
