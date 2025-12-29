import { Button } from '@repo/ui/button'
import './App.css'
import { VALUE } from "@repo/common/config"


function App() {

  return (
    <div>
      {VALUE}
      Hi there from the react turbo project
      <Button appName='react turbo button'>button react turbo</Button>
    </div>
  )
}

export default App
