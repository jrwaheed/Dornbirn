
import './App.css'
import MovieCard from './components/MovieCard'
import Home from './pages/Home'


function App() {
  const movieNumber = 1
  /* HERE IS THE KICKER. WE ARE USING THE MOVIECARD FUNCTION AND PASSING
  AN OBJECT AS AN ARGUMENT. THIS ARGUMENT SERVES AS THE PROPERTY THE BEING
  PASSED. THE OUTER CURLY BRACKETS SIGNIFY THE A VARIABLE, THE SECOND SET
  ARE THE OBJECT.*/

  return (
    <>


      <Home />


      {/* THIS IS CONDITIONAL RENDERING  */}
      {/* {movieNumber === 1 ? (
        <MovieCard movie={{ title: "jamals film", release_date: "1999" }} />
      ) : (
        <MovieCard movie={{ title: "Ursulas blovkbuster", release_date: "2004" }} />
      )} */}
    </>
  );
}


function Monkey({ value }) {
  return (
    <div>
    </div>
  )
}

export default App

