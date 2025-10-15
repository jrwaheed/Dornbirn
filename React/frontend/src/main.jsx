import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { BrowserRouter } from 'react-router-dom'
import './css/index.css'
import '../sandlot/testing.css'
import App from './App.jsx'
import Dummy from '../sandlot/testing.jsx'
import UseHooks from '../sandlot/ReactTestingArea.jsx'
import Square from '../TicTacToe/App.js'

createRoot(document.getElementById('root')).render(
  <>
    {/* // <StrictMode> */}
    {/* <BrowserRouter>
      <App />
      </BrowserRouter> */}
    {/* <Dummy /> */}
    {/* <UseHooks /> */}
    <Square />
    {/* // </StrictMode>, */}
  </>
)

