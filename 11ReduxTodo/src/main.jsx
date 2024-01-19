import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { Provider } from 'react-redux'
import {visal} from '../src/App/Stor.js'


ReactDOM.createRoot(document.getElementById('root')).render(
  <Provider store={visal}>
    <App/>
    </Provider>
)
