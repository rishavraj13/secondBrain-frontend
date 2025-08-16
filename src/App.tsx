
import './App.css'
import { Button } from './compontents/ui/Button'
import { PlusIcon } from './icons/plusicon'

function App() {

  return (
    <>
      < Button variant='primary' text='share' size='md'/>
      <Button  StartIcon={<PlusIcon size={'md'}/>} variant='secondary' text='Add content' size='md'/>
    </>
  )
}

export default App
