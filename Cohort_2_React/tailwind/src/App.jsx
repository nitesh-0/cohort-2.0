
import './App.css'
import { RevenuCard } from './components/RevenueCard'

function App() {

  return (
  <div className='grid grid-cols-1 md:grid-cols-3 gap-6 p-4'>
    <RevenuCard title = {"Next Payout"} amount = {"2,312.23"} orderCount={23} background="bg-blue-50 hover:bg-blue-100" />
    <RevenuCard title = {"Amount Pending"} amount = {"92,312.20"} orderCount={13}/>
    <RevenuCard title = {"Amount Processed"} amount = {"23,92,312.20"} />
  </div>    
    
  )
}

export default App
