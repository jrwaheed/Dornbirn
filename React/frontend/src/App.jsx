
import './App.css'

function App() {
  return (
    <>
      <Monkey value="Hello, World!" />
      <Monkey value="This is a monkey component." />
    </>
  )
}

function Monkey({ value }) {
  return (
    <div>
      <p>{value}</p>
    </div>
  )
}

export default App
