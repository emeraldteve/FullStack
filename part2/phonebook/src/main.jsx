import React from 'react'
import ReactDOM from 'react-dom/client'
import axios from 'axios'
import App from './App.jsx'

axios.get('http://localhost:3001/persons').then(response => {
  const persons = response.data
  ReactDOM.createRoot(document.getElementById('root')).render(<App persons={persons} />)
})