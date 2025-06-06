import { useRef } from 'react';
import './App.css'
import AboutMe from './components/about-me';
import Experience from './components/experience';
import Home from './components/home';
import Links from './components/links';
import Skills from './components/skils';
import TopBar from './components/top-bar';
import dots from '@/assets/Dots.svg';

function App() {
  const homeRef = useRef<HTMLDivElement>(null);
  const skilsRef = useRef<HTMLDivElement>(null);
  const expRef = useRef<HTMLDivElement>(null);
  const abouMeRef = useRef<HTMLDivElement>(null);

  const scrollToSection = (ref: React.MutableRefObject<HTMLDivElement | null>) => {
    if (ref.current) {
      ref.current.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className='relative'>
      <Links />
      <div className='lg:px-[20rem] lg:py-[2rem] p-0 px-[2rem] flex flex-col gap-4'>
        <TopBar abouMeRef={abouMeRef} expRef={expRef} homeRef={homeRef} scrollToSection={scrollToSection} skilsRef={skilsRef} />
        <div ref={homeRef}>
          <Home />
        </div>
        <div className='flex w-full justify-center pt-[3rem]'>
          <div className='text-[1.5rem] text-white border border-solid border-gray py-4 px-6 w-fit'>I don’t always test my code, but when I do, I do it in production😭.</div>
          <svg className='absolute right-[0] top-[32%] hidden lg:block' width='200' height='200' viewBox="0 0 200 200">
            <path d='M 200 0 H 50 V 150 H 200' stroke='#abb2bf' strokeWidth='2' fill='none' />
          </svg>
          <svg className='absolute left-[-6%] top-[52%] rotate-6 hidden lg:block' width='200' height='200' viewBox="0 0 200 200">
            <path d='M 200 0 H 50 V 150 H 200 V -150' stroke='#abb2bf' strokeWidth='2' fill='none' />
          </svg>
          <img src={dots} className='w-[5rem] absolute right-0 bottom-[30%] hidden lg:block' />
        </div>
        <div ref={expRef}>
          <Experience />
        </div>
        <div ref={skilsRef}>
          <Skills />
        </div>
        <div ref={abouMeRef}>
          <AboutMe />
        </div>
      </div>
    </div>
  );
}

export default App