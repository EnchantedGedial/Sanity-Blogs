import React, { useEffect, useRef, useState } from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { CgProfile } from 'react-icons/cg';
import { GiCancel } from 'react-icons/gi';
import { GoSignOut } from 'react-icons/go';
import { useSession, signIn, signOut } from "next-auth/react"
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const NavBar = () => {
  const { data: session } = useSession();
  const toggleCart = () => {
    if (ref.current.classList.contains('translate-x-full')) {
      ref.current.classList.remove('translate-x-full');
      ref.current.classList.add('translate-x-0');
    }
    else if (!ref.current.classList.contains('translate-x-full')) {
      ref.current.classList.remove('translate-x-0');
      ref.current.classList.add('translate-x-full');
    }

  }
  const ref = useRef();
//   const [loggedIn, setLoggedIn] = useState(false);
//   const [name, setName] = useState('');
//   useEffect(()=>{


//   toast.success(`Welcome back ${name}`, {
//     position: "top-center",
//     autoClose: 5000,
//     hideProgressBar: false,
//     closeOnClick: true,
//     pauseOnHover: true,
//     draggable: true,
//     progress: undefined,
//     theme: "light",
//   });
// },[loggedIn])

  return (
    <>




      <nav class="bg-beige" >
        <div class="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto pt-0 mt-0">

          <Link href='/' class="flex items-center">
            <Image src={'https://cdn.thecodehelp.in/qdo970k2vrxj8kefd1zt_9520ff468a.svg'} width={200} height={800} class="mr-3 pt-4" alt="iblogs Logo" />

          </Link>

          <div class="hidden w-full md:block md:w-auto color" id="navbar-multi-level">
            <ul class="flex flex-col font-medium p-4 md:p-0 mt-4  md:flex-row md:space-x-8 md:mt-0 text-black">
              <div>
                <Link href='/' class="block py-2 pl-3 pr-4 dark:text-black bg-blue-700 rounded md:bg-transparent md:text-blue-700 md:p-0 md:dark:text-blue-500 dark:bg-blue-600 md:dark:bg-transparent" aria-current="page">Home</Link>
              </div>

              <div>
                <Link href='../categories/Productivity' class="block py-2 pl-3 pr-4 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 dark:text-black md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent">Productivity</Link>
              </div>
              <div>
                <Link href='../components/Blogs' class="block py-2 pl-3 pr-4 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 dark:text-black md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent">All Blogs</Link>
              </div>
              <div>
                <Link href='../categories/TimeManagment' class="block py-2 pl-3 pr-4 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 dark:text-black md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent">Time Management</Link>
              </div>
              <div>
                <Link href='../categories/SelfHelp' class="block py-2 pl-3 pr-4 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 dark:text-black md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent">Self Help</Link>
              </div>
              <div>
                <Link href='../categories/StudyHacks' class="block py-2 pl-3 pr-4 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 dark:text-black md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent">Study Hacks</Link>
              </div>
              <div>
                <Link href='../categories/Books' class="block py-2 pl-3 pr-4 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 dark:text-black md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent">Books</Link>
              </div>

              <div>
                <Link href='../components/About' class="block py-2 pl-3 pr-4 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 dark:text-black md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent">AboutUs</Link>
              </div>

              <div className='flex'>

                {/* {!loggedIn && <ToastContainer
                  position="top-center"
                  autoClose={5000}
                  hideProgressBar={false}
                  newestOnTop={false}
                  closeOnClick
                  rtl={false}
                  pauseOnFocusLoss
                  draggable
                  pauseOnHover
                  theme="light"
                />} */}

                {session ? (<>



                  <div className='flex  '>



                    <div onClick={toggleCart} class="block px-3 pt-1 pl-3 pr-4 text-2xl mt-1 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 dark:text-black md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent" ><CgProfile /></div>
                    <button className='m-2 text-black text-2xl  p-1' onClick={() => signOut()}><GoSignOut className=' hover:text-red-500' /></button>
                  </div>
                  <div>


                    <div ref={ref} className="sidebar absolute top-0 right-0 bg-indigo-100 px-10 py-14 transform transition-transform translate-x-full h-full w-80">


                      <div className='font-bold text-xl text-center '>Signed in as {session?.user?.name}  </div>
                      {/* {setLoggedIn(true)}
                      {setName(session?.user?.name)} */}
                      <span onClick={toggleCart} className="absolute top-2 right-2 cursor-pointer text-2xl text-indigo-500 hover:text-indigo-300"> <GiCancel /></span>

                      <li className='text-center'>
                        <div className="item flex my-3">

                          <div className='w-2/3 m-auto'><img src={session?.user?.image} alt="" /></div>

                        </div>


                      </li>

                      <button class="flex mx-auto mt-16 text-white bg-indigo-500 border-0 py-2 px-8 focus:outline-none hover:bg-red-600 rounded text-lg" onClick={() => signOut()}>Sign out</button>

                    </div>
                  </div>
                </>) : (<>

                  <button className='m-2 bg-green-600 text-white p-1' onClick={() => signIn()}>Sign in</button>
                </>)}

              </div>
            </ul>
          </div>
        </div>
      </nav>

      {/* <header class="text-gray-600 body-font">
  <div class="container mx-auto flex flex-wrap p-5 flex-col md:flex-row items-center">
    <a class="flex title-font font-medium items-center text-gray-900 mb-4 md:mb-0">
      <svg xmlns="http://www.w3.org/2000/svg" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" class="w-10 h-10 text-white p-2 bg-indigo-500 rounded-full" viewBox="0 0 24 24">
        <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5"></path>
      </svg>
      <span class="ml-3 text-xl">Tailblocks</span>
    </a>
    <nav class="md:mr-auto md:ml-4 md:py-1 md:pl-4 md:border-l md:border-gray-400	flex flex-wrap items-center text-base justify-center">
      <a class="mr-5 hover:text-gray-900">First Link</a>
      <a class="mr-5 hover:text-gray-900">Second Link</a>
      <a class="mr-5 hover:text-gray-900">Third Link</a>
      <a class="mr-5 hover:text-gray-900">Fourth Link</a>
    </nav>
    <button class="inline-flex items-center bg-gray-100 border-0 py-1 px-3 focus:outline-none hover:bg-gray-200 rounded text-base mt-4 md:mt-0">Button
      <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" class="w-4 h-4 ml-1" viewBox="0 0 24 24">
        <path d="M5 12h14M12 5l7 7-7 7"></path>
      </svg>
    </button>
  </div>
</header> */}






    </>
  )
}

export default NavBar