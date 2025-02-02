import dots from '@/assets/Dots.svg';
import boxs from '@/assets/box.svg';

export default function AboutMe() {
    return (
        <div className='flex flex-col gap-4 pt-[3rem]'>
            <div className='text-white text-[2rem] font-medium flex items-center gap-[1rem]'><div><span className='text-primarColor'>#</span>about me</div>
                <hr className='border-solid border-[1px] border-primarColor p-0 m-0 w-[5rem] lg:w-[20rem]' />
            </div>
            <div className='w-full flex gap-40 text-white'>
                <div className='flex flex-col gap-4 w-ful lg:w-[60%]'>
                    <div className='text-[1rem] text-gray'>
                        Passionate software engineer with 4 years of experience crafting impactful web solutions. I thrive on solving complex problems, creating seamless user experiences, and continuously learning to push the boundaries of what’s possible in software development. Dedicated to delivering high-quality, efficient, and innovative solutions that make a difference.
                    </div>
                </div>
                <div className='hidden lg:flex flex-col w-[40%]'>
                    <img src={boxs} className='w-[15rem]' />
                    <div className='flex justify-end'>
                        <img src={dots} className='w-[10rem]' />
                    </div>
                </div>
            </div>
        </div>
    )
}
