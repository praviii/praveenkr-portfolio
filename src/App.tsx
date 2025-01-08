import './App.css'
import hiMemoji from './assets/hi.png'
import { Left } from './components/left'
import { MyLocation } from './components/my-location';

function App() {

  return (
    <div className='flex gap-4 p-4 bg-black dark:bg-white dark:text-black text-white h-[100dvh]'>
      <div className='flex flex-col gap-4 w-[50%] h-full'>
        <div className='flex gap-4 h-[50%]'>
          <div className='bg-[#1d1d1d] flex flex-col gap-4 justify-center p-4 text-[18px] dark:bg-[#e5e5e5] w-[50%] rounded-lg'>
          <div className='font-semibold text-[5rem]'>About Me</div> 
          Passionate full-stack developer with 4 years of experience crafting impactful web solutions. I thrive on solving complex problems, creating seamless user experiences, and continuously learning to push the boundaries of what’s possible in software development. Dedicated to delivering high-quality, efficient, and innovative solutions that make a difference.
          </div>
          <div className='bg-[#1d1d1d] dark:bg-[#e5e5e5] w-[50%] rounded-lg'>
            <MyLocation/>
          </div>
        </div>
        <div className='w-full flex items-center p-4 bg-[#1d1d1d] dark:bg-[#e5e5e5] h-[50%] rounded-lg'>
          <img src={hiMemoji} alt="" className='w-[20rem] h-[20rem]' />
          <div className='flex flex-col items-center justify-center'>
          <div className='text-[4rem] font-bold motion-preset-typewriter '>PRAVEEN KUMAR</div>
          <div className='text-[2rem] font-semibold motion-preset-typewriter '>FULLSTACK DEVLOPER</div>
          </div>
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