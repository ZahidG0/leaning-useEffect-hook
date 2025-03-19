// Code: useEffect Hook
import './App.css'
import Basics from './Basics'
import PropChangeEffect from './PropChangeEffect'
import StateChangeEffect from './StateChangeEffect'

function App() {

  return (
    <>
      <h1>useEffect-Hook</h1>
      <Basics/>
      <StateChangeEffect/>
      <PropChangeEffect userId={1}/>
    </>
  )
}

export default App
