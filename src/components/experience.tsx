

export default function Experience() {
    return (
        <div className='flex flex-col gap-4 pt-[3rem]'>
            <div className='text-white text-[2rem] font-medium flex items-center gap-[1rem]'><div><span className='text-primarColor'>#</span>experience</div>
            <hr className='border-solid border-[1px] border-primarColor p-0 m-0 w-[20rem]' />
            </div>
            <ol className="relative text-white border-s border-gray-200 dark:border-gray-700">
                <li className="mb-10 ms-4">
                    <div className="absolute w-3 h-3 bg-gray-200 rounded-full mt-1.5 -start-1.5 bg-primarColor border border-white dark:border-gray-900 dark:bg-gray-700"></div>
                    <time className="mb-1 text-sm font-normal leading-none text-gray-400 dark:text-gray-500">February 2022 - Present</time>
                    <h3 className="text-lg font-semibold text-gray-900 dark:text-white">IQZ Systems</h3>
                    <p className="mb-4 text-base font-normal text-gray dark:text-gray-400">Upgraded Node and dependencies across 100+ repositories, reducing build errors by 30%. Boosted test coverage to 85%, cutting production bugs by 25%. Enhanced API endpoints, improving response times by 20%. Built efficient search, filtering, and lazy loading, increasing data retrieval speed by 25%. Developed reusable components and optimized styling, improving development efficiency by 20%. Led front-end development, refining UI/UX and building a drag-and-drop Form Builder. Integrated third-party sheets with a database for seamless form response storage. Collaborated with architects on feature development and adopted best coding practices, enhancing maintainability by 40%.</p>
                </li>
                <li className="mb-10 ms-4">
                    <div className="absolute w-3 h-3 bg-gray-200 rounded-full mt-1.5 -start-1.5 bg-primarColor border border-white dark:border-gray-900 dark:bg-gray-700"></div>
                    <time className="mb-1 text-sm font-normal leading-none text-gray-400 dark:text-gray-500">Jan 2021 - Feb 2022</time>
                    <h3 className="text-lg font-semibold text-gray-900 dark:text-white">Dataspire technologies</h3>
                    <p className="text-base font-normal text-gray dark:text-gray-400"> Independently developed a COVID-19 simulation app, creating reusable components and implementing a dynamic map with real-time location updates, improving accuracy by 30%. Integrated WebSockets for real-time data updates, enhancing responsiveness by 40%. Led solutioning and technical design for a tree growth tracking app, designing its monolithic architecture and database. Developed both the mobile app and web admin portal, collaborating closely with client product owners and taking ownership of multiple features.</p>
                </li>
            </ol>
        </div>
    )
}
