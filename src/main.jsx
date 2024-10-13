import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
// import NavBar from './layouts/admin/navbar/NavBar.jsx'
import  NavBar from './layouts/admin/Index.jsx'
import App from './App.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
    <NavBar/>
  </StrictMode>,
)
