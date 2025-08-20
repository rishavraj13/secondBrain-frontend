
import './App.css'
import { Button } from './compontents/ui/Button'
import { Cards } from './compontents/ui/Card'
// import { Sidebar } from './compontents/ui/Sidebar'
import { PlusIcon } from './icons/plusicon'
import { ShareIcon } from './icons/shareicon'

function App() {

  return (
    <div className=''>


      <div className='flex m-3 gap-3 space-x-1 justify-end'>

        <Button StartIcon={<ShareIcon size={'md'} />} variant='primary' text='share' size='md' />
        <Button StartIcon={<PlusIcon size={'md'} />} variant='secondary' text='Add content' size='md' />

      </div>

      <div className=''>
        <Cards />
      </div>

    </div>


  )
}

export default App
