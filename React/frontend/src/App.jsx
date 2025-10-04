
import { Route, Routes } from 'react-router-dom'
import './App.css'
import MovieCard from './components/MovieCard'
import Favorites from './pages/Favorites'
import Home from './pages/Home'
import NavBar from './components/NavBar'

function App() {
  const movieNumber = 1
  /* HERE IS THE KICKER. WE ARE USING THE MOVIECARD FUNCTION AND PASSING
  AN OBJECT AS AN ARGUMENT. THIS ARGUMENT SERVES AS THE PROPERTY THE BEING
  PASSED. THE OUTER CURLY BRACKETS SIGNIFY THE A VARIABLE, THE SECOND SET
  ARE THE OBJECT.*/

  return (
    <div>
      <NavBar />
      <main className='main-content'>

        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/favorites' element={<Favorites />} />
        </Routes>
      </main>
    </div>
  );
}
export default App

