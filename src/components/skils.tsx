import dots from '@/assets/Dots.svg';
import boxs from '@/assets/box.svg';

export default function Skills( ) {
    return (
        <div className='flex flex-col gap-4 pt-[3rem]'>
            <div className='text-white text-[2rem] font-medium flex items-center gap-[1rem]'><div><span className='text-primarColor'>#</span>skills</div>
                <hr className='border-solid border-[1px] border-primarColor p-0 m-0 w-[20rem]' />
            </div>
            <div className='w-full flex gap-40 text-white'>
                <div className='hidden lg:flex flex-col gap-4 w-[40%] relative'>
                    <img src={boxs} className='w-[10rem]' />
                    <img src={dots} className='w-[7rem] absolute right-0 bottom-0' />
                    <div className='border border-solid border-gray h-[7rem] w-[7rem] absolute top-[5%] right-10'></div>
                    <div className='border border-solid border-gray h-[7rem] w-[3rem] absolute top-[25%] left-[50%] -rotate-12'></div>
                    <img src={dots} className='w-[5rem] absolute left-[30%] bottom-[10%] rotate-45' />
                </div>
                <div className='flex flex-col lg:flex-row gap-[2rem] w-full lg:w-[60%]'>
                    <div className='flex flex-col'>
                        <div className='py-2 px-8 border border-solid border-gray'>Languages</div>
                        <div className='py-2 px-8 border border-solid border-gray'>
                            <div>Typescript</div>
                            <div>Javascript</div>
                            <div>Go(learning)</div>
                        </div>
                    </div>
                    <div className='flex flex-col gap-4'>
                        <div className='flex flex-col'>
                            <div className='py-2 px-8 border border-solid border-gray'>Databases</div>
                            <div className='py-2 px-8 border border-solid border-gray'>
                                <div>Postgres</div>
                                <div>MongoDB</div>
                                <div>Redis</div>
                            </div>
                        </div>
                        <div className='flex flex-col'>
                            <div className='py-2 px-8 border border-solid border-gray'>Methodologies</div>
                            <div className='py-2 px-8 border border-solid border-gray'>
                            <div>Agile</div>
                            <div>Test driven developement(TDD)</div>
                            </div>
                        </div>
                    </div>
                    <div className='flex flex-col gap-4'>
                        <div className='flex flex-col'>
                            <div className='py-2 px-8 border border-solid border-gray'>Tools</div>
                            <div className='py-2 px-8 border border-solid border-gray'>
                                <div>VScode</div>
                                <div>Neovim</div>
                                <div>GIT</div>
                                <div>Linux</div>
                                <div>Azure</div>
                                <div>Docker</div>
                            </div>
                        </div>
                        <div className='flex flex-col'>
                            <div className='py-2 px-8 border border-solid border-gray'>Frameworks</div>
                            <div className='py-2 px-8 border border-solid border-gray'>
                                <div>React</div>
                                <div>Nestjs</div>
                                <div>React Native</div>
                                <div>Angular</div>
                                <div>Tailwind</div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
