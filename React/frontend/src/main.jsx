import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import '../sandlot/testing.css'
import App from './App.jsx'
import Dummy from '../sandlot/testing.jsx'


createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
    {/* <Dummy /> */}
  </StrictMode>,
)

