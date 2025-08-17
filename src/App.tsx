
import './App.css'
import { Button } from './compontents/ui/Button'
import { PlusIcon } from './icons/plusicon'
import { ShareIcon } from './icons/shareicon'

function App() {

  return (
    <div className='flex m-3 gap-3 space-x-1 justify-end'>
      <div className=''>
        <Button StartIcon={<ShareIcon size={'md'} />} variant='primary' text='share' size='md' />

      </div>
      <div className=''>
        <Button StartIcon={<PlusIcon size={'md'} />} variant='secondary' text='Add content' size='md' />

      </div>

    </div>

  )
}

export default App
