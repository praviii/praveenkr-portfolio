
import link from '@/assets/linkedin.svg'
import git from '@/assets/github.svg'
import codepen from '@/assets/codepen-icon.svg'

export default function Links() {
    return (
        <div className='absolute flex flex-col items-center gap-4'>
            <svg width="100" height="170" version="1.1" xmlns="http://www.w3.org/2000/svg">
                <path d='M 50 0 V 170' stroke='#ABB2BF' />
            </svg>
            <a href="https://www.linkedin.com/in/praveen-marimtuhu/" target="_blank" rel="noopener noreferrer">
                <img src={link} className='w-7' />
            </a>
            <a href="https://github.com/praviii" target="_blank" rel="noopener noreferrer">
                <img src={git} className='w-7' />
            </a>
            <a href="https://codepen.io/praviii" target="_blank" rel="noopener noreferrer">
                <img src={codepen} className='w-6' />
            </a>
        </div>
    )
}
