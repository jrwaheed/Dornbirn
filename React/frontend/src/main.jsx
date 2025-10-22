import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { BrowserRouter } from 'react-router-dom'
import './css/index.css'
import '../sandlot/testing.css'
import Game from '../TicTacToe/Game.jsx'
import '../TicTacToe/styles.css'

createRoot(document.getElementById('root')).render(
  <>
    {/* // <StrictMode> */}
    {/* <BrowserRouter>
      <App />
      </BrowserRouter> */}
    {/* <Dummy /> */}
    {/* <UseHooks /> */}
    <Game />
    {/* // </StrictMode>, */}
  </>
)

