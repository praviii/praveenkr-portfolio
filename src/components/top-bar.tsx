function TopBar() {
    return (
        <div className='w-full flex justify-between'>
            <div className='font-bold text-white'>
                PRAVEEN KR
            </div>
            <div className='flex gap-8 text-gray'>
                <div>
                    <span className='text-primarColor'>#</span>home
                </div>
                <div>
                    <span className='text-primarColor'>#</span>work
                </div>
                <div>
                    <span className='text-primarColor'>#</span>skils
                </div>
                <div>
                    <span className='text-primarColor'>#</span>about-me
                </div>
            </div>
        </div>
    )
}

export default TopBar