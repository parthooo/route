import './App.css'
import Dashboard from './components/Dasboard/Dashboard'
import Navbar from './components/Navbar/Navbar'
import PriceList from './components/PriceList/PriceList'

function App() {

  return (
    <>
      <div className='App'>
        <Navbar></Navbar>
        <PriceList/>
        <Dashboard />
      </div>
    </>
  )
}

export default App
