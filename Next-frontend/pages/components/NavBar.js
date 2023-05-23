import React from 'react'
import Link from 'next/link'
import Image from 'next/image'

const NavBar = () => { 
  
  return (
   <>
   

   

   <nav class="bg-white ">
        <div class="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto mt-1">
                
                <Link href='/' class="flex items-center">
                    <Image src={'https://cdn.thecodehelp.in/qdo970k2vrxj8kefd1zt_9520ff468a.svg'} width={200} height={800} class="mr-3" alt="iblogs Logo" />
                    
                </Link>
              
                <div class="hidden w-full md:block md:w-auto" id="navbar-multi-level">
                  <ul class="flex flex-col font-medium p-4 md:p-0 mt-4  md:flex-row md:space-x-8 md:mt-0 text-black">
                    <li>
                      <Link href='/' class="block py-2 pl-3 pr-4 dark:text-black bg-blue-700 rounded md:bg-transparent md:text-blue-700 md:p-0 md:dark:text-blue-500 dark:bg-blue-600 md:dark:bg-transparent" aria-current="page">Home</Link>
                    </li>
                    
                    <li>
                      <Link href='../categories/Productivity' class="block py-2 pl-3 pr-4 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 dark:text-black md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent">Productivity</Link>
                    </li>
                    <li>
                      <Link href='../components/Blogs' class="block py-2 pl-3 pr-4 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 dark:text-black md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent">All Blogs</Link>
                    </li>
                    <li>
                      <Link href='../categories/TimeManagment' class="block py-2 pl-3 pr-4 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 dark:text-black md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent">Time Management</Link>
                    </li>
                    <li>
                      <Link href='../categories/SelfHelp' class="block py-2 pl-3 pr-4 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 dark:text-black md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent">Self Help</Link>
                    </li>
                    <li>
                      <Link href='../categories/StudyHacks' class="block py-2 pl-3 pr-4 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 dark:text-black md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent">Study Hacks</Link>
                    </li>
                    <li>
                      <Link href='../components/About' class="block py-2 pl-3 pr-4 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 dark:text-black md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent">AboutUs</Link>
                    </li>
                    <li>
                      <Link href='../components/Authors' class="block py-2 pl-3 pr-4 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 dark:text-black md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent">Authers</Link>
                    </li>
                  </ul>
                </div>

        </div>
</nav>




   
   
   </>
  )
}

export default NavBar