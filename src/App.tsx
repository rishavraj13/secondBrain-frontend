
import { useState } from 'react'
import './App.css'
import { CreatecontentModel } from './compontents/CreatecontentModel'
import { Button } from './compontents/ui/Button'
import { Cards } from './compontents/ui/Card'
// import { Sidebar } from './compontents/ui/Sidebar'
import { PlusIcon } from './icons/plusicon'
import { ShareIcon } from './icons/shareicon'
import { Sidebar } from './compontents/ui/Sidebar'

function App() {
  const [modelOpen, SetmodelOpen] = useState(false)



  return (
    <div>
      <Sidebar />

      <div className='p-4 ml-72 h-min-screen bg-grey-100'>
        <CreatecontentModel open={modelOpen} Onclose={() => {
          SetmodelOpen(false);
        }} />


        <div className='flex m-3 gap-3 space-x-1 justify-end'>

          <Button StartIcon={<ShareIcon size={'md'} />} variant='primary' text='share' size='md' />
          <Button onClick={() => {
            SetmodelOpen(true)
          }} StartIcon={<PlusIcon size={'md'} />} variant='secondary' text='Add content' size='md' />

        </div>

        <div className='flex gap-4'>
          <div>
            <Cards type='Youtube' link='https://www.youtube.com/watch?v=R8XzIfEY_xE&list=PL_z_8CaSLPWdbOTog8Jxk9XOjzUs3egMP' title='Backtracking' />
          </div>


          <div>
            <Cards type='Notes' link='https://www.youtube.com/watch?v=R8XzIfEY_xE&list=PL_z_8CaSLPWdbOTog8Jxk9XOjzUs3egMP' title='Notes' />

          </div>

          <div className=''>
            <Cards type='Twitter' link='https://publish.twitter.com/?url=https://twitter.com/FootyHumour/status/1958515385751253401' title='football- tweet' />

          </div>

        </div>

      </div>
    </div>



  )
}

export default App
