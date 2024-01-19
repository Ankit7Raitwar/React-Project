import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import { render } from 'react-dom';

function Chai (){
  return(
      <h1>It is a main function component
      </h1>
  );
}
ReactDOM.createRoot(document.getElementById('root')).render(
  <>
    <App />
    <Chai/>
  </>
    
 
)
