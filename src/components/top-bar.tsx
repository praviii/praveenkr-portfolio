function TopBar(props: TopBarProps) {
    return (
        <div className='w-full flex justify-between'>
            <div className='font-bold text-white'>
                PRAVEEN KR
            </div>
            <div className='flex gap-8 text-gray'>
                <div className="cursor-pointer" onClick={() => props.scrollToSection(props.homeRef)}>
                    <span className='text-primarColor'>#</span>home
                </div>
                <div className="cursor-pointer" onClick={() => props.scrollToSection(props.expRef)}>
                    <span className='text-primarColor'>#</span>work
                </div>
                <div className="cursor-pointer" onClick={() => props.scrollToSection(props.skilsRef)}>
                    <span className='text-primarColor'>#</span>skils
                </div>
                <div className="cursor-pointer" onClick={() => props.scrollToSection(props.abouMeRef)}>
                    <span className='text-primarColor'>#</span>about-me
                </div>
            </div>
        </div>
    )
}

export default TopBar

export interface TopBarProps {
    homeRef: React.MutableRefObject<HTMLDivElement | null>;
    skilsRef: React.MutableRefObject<HTMLDivElement | null>;
    expRef: React.MutableRefObject<HTMLDivElement | null>;
    abouMeRef: React.MutableRefObject<HTMLDivElement | null>;
    scrollToSection: (ref: React.MutableRefObject<HTMLDivElement | null>) => void;
}