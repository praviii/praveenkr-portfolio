import dots from '@/assets/Dots.svg';
import boxs from '@/assets/box.svg';
import hi from '@/assets/hi.png'

function Home() {
    return (
        <div className='w-full flex text-white pt-[10rem]'>
            <div className='flex flex-col justify-center items-center gap-4 w-[60%]'>
                <div className='text-[2rem] font-semibold'>
                    Hi (வணக்கம்), I'm Praveenkumar — <span className='text-primarColor'>Software Engineer</span>.
                </div>
                <div className='text-[1rem] text-gray'>
                    I build efficient, scalable web solutions with a passion for clean code and problem-solving 🚀.
                </div>
            </div>
            <div className='flex flex-col w-[40%] relative'>
                <div className='flex flex-col items-center justify-center top-[5%] left-[25%] absolute' >
                    <img src={hi} className='w-[18rem] brightness-[80%]' />
                    <hr className='border-solid border-[1px] border-primarColor p-0 mt-[-15px] m-0 w-[20rem]' />
                </div>
                <img src={boxs} className='w-[15rem]' />
                <div className='flex justify-end'>
                    <img src={dots} className='w-[10rem]' />
                </div>
            </div>
        </div>
    )
}

export default Home