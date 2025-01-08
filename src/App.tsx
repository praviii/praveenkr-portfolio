import './App.css'
import hiMemoji from './assets/hi.png'
import { Left } from './components/left'

function App() {

  return (
    <div className='flex gap-4 p-4 bg-black dark:bg-white dark:text-black text-white h-[100dvh]'>
      <div className='flex flex-col gap-4 w-[50%] h-full'>
        <div className='flex gap-4 h-[50%]'>
          <div className='bg-[#1d1d1d] dark:bg-[#e5e5e5] w-[50%] rounded-lg'>Left-two</div>
          <div className='bg-[#1d1d1d] dark:bg-[#e5e5e5] w-[50%] rounded-lg'>Left-three</div>
        </div>
        <div className='w-full flex flex-col justify-center p-4 bg-[#1d1d1d] dark:bg-[#e5e5e5] h-[50%] rounded-lg'>
          <div className='text-[7rem] font-bold'>PRAVEEN KUMAR</div>
          <div className='text-[4rem] font-semibold'>FULLSTACK DEVLOPER</div>
        </div>
      </div>
      <div className='flex flex-col gap-4 w-[50%] h-full'>
        <div className='flex gap-4 h-[32%]'>
          <div className='bg-[#1d1d1d] dark:bg-[#e5e5e5] w-[75%] rounded-lg'>right-two</div>
          <div className='bg-[#1d1d1d] dark:bg-[#e5e5e5] w-[25%] rounded-lg'>right-three</div>
        </div>
        <div className='flex gap-4 h-[32%]'>
          <div className='bg-[#1d1d1d] dark:bg-[#e5e5e5] w-[50%] rounded-lg'>
            right-two
          </div>
          <div className='bg-[#1d1d1d] dark:bg-[#e5e5e5] w-[50%] rounded-lg'>right-three</div>
        </div>
        <div className='flex gap-4 h-[32%]'>
          <div className='bg-[#1d1d1d] dark:bg-[#e5e5e5] w-[25%] rounded-lg'>
            <button onClick={() => {
              document.body.classList.remove('dark');}}>Switch Mode</button>
          </div>
          <div className='bg-[#1d1d1d] dark:bg-[#e5e5e5] w-[75%] rounded-lg'>right-three</div>
        </div>
      </div>
    </div>
  )
}

export default App
