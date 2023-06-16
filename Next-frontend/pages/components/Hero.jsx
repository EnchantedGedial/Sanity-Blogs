import Head from 'next/head'
import Image from 'next/image'
import 'bootstrap/dist/css/bootstrap.css'

import { createClient } from "next-sanity";
import Script from "next/script"
import imageUrlBuilder from '@sanity/image-url'
import Link from 'next/link'
import BackToTop from './BackToTop';
import Popups from './Popups';





export default function Hero({ featuredBlogs }) {


  return (
    <>

      {/* <hr className='' /> */}
      <Popups />

      <section className="px-5 mt-3 dark:bg-white-800 dark:text-black-100">
        <div className="container grid grid-cols-12 mx-auto gap-y-6 md:gap-10">

          <div className="flex flex-col justify-between col-span-12 py-2 space-y-8 md:space-y-16 md:col-span-3">
            <div className="flex flex-col space-y-8 md:space-y-12">
              <div className="flex flex-col mt-6 space-y-1">
                <h3 className="flex items-center space-x-2 dark:text-gray-400">
                  <span className="flex-shrink-0 w-2 h-2 uppercase rounded-full dark:bg-violet-400"></span>
                  <span className="text-xs font-bold tracking-wider uppercase">Leatest</span>
                </h3>
              
                <Link rel="noopener noreferrer" href={`/featuredblog/${featuredBlogs[0].slug.current}`} className="font-serif hover:underline">{featuredBlogs[0].title}</Link>

              </div>
              <div className="flex flex-col mt-4">
                <h3 className="flex items-center  dark:text-gray-400">
                  <span className="flex-shrink-0 w-2 h-2 uppercase rounded-full dark:bg-violet-400"></span>
                  <span className="text-xs font-bold tracking-wider uppercase">Trending</span>
                </h3>
                <Link rel="noopener noreferrer" href='/' className="font-serif hover:underline">{featuredBlogs[1].title}</Link>

              </div>
              <div className="flex flex-col mt-4 space-y-2">
                <h3 className="flex items-center space-x-2 dark:text-gray-400">
                  <span className="flex-shrink-0 w-2 h-2 uppercase rounded-full dark:bg-violet-400"></span>
                  <span className="text-xs font-bold tracking-wider uppercase">Liked</span>
                </h3>
                <Link rel="noopener noreferrer" href='/' className="font-serif hover:underline">{featuredBlogs[2].title}</Link>

              </div>
              <div className="flex flex-col mt-4 space-y-2">
                <h3 className="flex items-center space-x-2 dark:text-gray-400">
                  <span className="flex-shrink-0 w-2 h-2 uppercase rounded-full dark:bg-violet-400"></span>
                  <span className="text-xs font-bold tracking-wider uppercase">Liked</span>
                </h3>
                <Link rel="noopener noreferrer" href='/' className="font-serif hover:underline">{featuredBlogs[3].title}</Link>

              </div>
              <div className="flex flex-col mt-4 space-y-2">
                <h3 className="flex items-center space-x-2 dark:text-gray-400">
                  <span className="flex-shrink-0 w-2 h-2 uppercase rounded-full dark:bg-violet-400"></span>
                  <span className="text-xs font-bold tracking-wider uppercase">Liked</span>
                </h3>
                <Link rel="noopener noreferrer" href='/' className="font-serif hover:underline">{featuredBlogs[4].title}</Link>

              </div>

            </div>
            <div className="flex flex-col w-full space-y-2">
              <div className="flex w-full h-1 bg-opacity-10 dark:bg-violet-400">
                <div className="w-1/2 h-full dark:bg-violet-400"></div>
              </div>
              <Link rel="noopener noreferrer" href='../components/Blogs' className="flex items-center justify-between w-full">
                <span className="text-xs font-bold tracking-wider uppercase">See more exclusives</span>
                <svg viewBox="0 0 24 24" strokeWidth="2.5" fill="none" strokeLinecap="round" strokeLinejoin="round" className="w-4 strokeCurrent dark:text-violet-400">
                  <line x1="5" y1="12" x2="19" y2="12"></line>
                  <polyline points="12 5 19 12 12 19"></polyline>
                </svg>
              </Link>
            </div>
          </div>






          <div className="relative flex col-span-12 bg-center bg-no-repeat bg-cover dark:bg-gray-500 xl:col-span-6 lg:col-span-5 md:col-span-9 min-h-96" style={{ backgroundImage: `url(https://source.unsplash.com/random/768x620?overthinking)` }} >
            <span className="absolute px-1 pb-2 text-xs font-bold uppercase border-b-2 left-6 top-6 dark:border-violet-400 dark:text-gray-100">Trending</span>


            <Link href='/' className="flex flex-col items-center justify-end p-6 text-center sm:p-8 group dark:via-transparent flex-grow-1 bg-gradient-to-b dark:from-gray-900 dark:to-gray-900">
              <h1>
                <div rel="noopener noreferrer" className="font-serif text-2xl font-semibold group-hover:underline dark:text-gray-100">{featuredBlogs[5].title}</div>
              </h1>
            </Link>
          </div>







          <div className="hidden py-2 xl:col-span-3 lg:col-span-4 md:hidden lg:block">
            <div className="mb-8 space-x-5 border-b-2 border-opacity-10 dark:border-violet-400">
              <button type="button" className="pb-2 text-xs font-bold uppercase border-b-2 dark:border-violet-400">Latest</button>
              <button type="button" className="pb-2 text-xs font-bold uppercase border-b-2 dark:border-transparent dark:text-gray-400">Popular</button>
            </div>


            <div className="flex flex-col divide-y divide-gray-700">
              <div className="flex pt-0 px-1 py-4">
                <img alt="" className=" w flex-shrink-0 object-cover w-20 h-20 mr-4 dark:bg-gray-500" style={{ backgroundImage: `url(https://source.unsplash.com/random/80x80/books)` }} />
                <div className="flex flex-col flex-grow">
                  <a rel="noopener noreferrer" href="#" className="font-serif hover:underline">{featuredBlogs[6].title}</a>
                  <p className="mt-auto text-xs dark:text-gray-400">5 minutes ago
                    <a rel="noopener noreferrer" href="#" className="block dark:text-blue-400 lg:ml-2 lg:inline hover:underline">Politics</a>
                  </p>
                </div>
              </div>
              <div className="flex px-1 py-4">
                <img alt="" className="flex-shrink-0 object-cover w-20 h-20 mr-4 dark:bg-gray-500" src="https://source.unsplash.com/random/245x325" />
                <div className="flex flex-col flex-grow">
                  <a rel="noopener noreferrer" href="#" className="font-serif hover:underline">{featuredBlogs[7].title}</a>
                  <p className="mt-auto text-xs dark:text-gray-400">14 minutes ago
                    <a rel="noopener noreferrer" href="#" className="block dark:text-blue-400 lg:ml-2 lg:inline hover:underline">Sports</a>
                  </p>
                </div>
              </div>
              <div className="flex px-1 py-4">
               
                <img alt="" className="flex-shrink-0 object-cover w-20 h-20 mr-4 dark:bg-gray-500" style={{ backgroundImage: `url(https://source.unsplash.com/random/245x325?3)` }} />
                <div className="flex flex-col flex-grow">
                  <a rel="noopener noreferrer" href="#" className="font-serif hover:underline">{featuredBlogs[8].title}</a>
                  <p className="mt-auto text-xs dark:text-gray-400">22 minutes ago
                    <a rel="noopener noreferrer" href="#" className="block dark:text-blue-400 lg:ml-2 lg:inline hover:underline">World</a>
                  </p>
                </div>
              </div>
              <div className="flex px-1 py-4">
                <Image alt="" className="flex-shrink-0 object-cover w-20 h-20 mr-4 dark:bg-gray-500" src={'../../Assets/rocket.svg'} width={200} height={200} />
                <div className="flex flex-col flex-grow">
                  <a rel="noopener noreferrer" href="#" className="font-serif hover:underline">{featuredBlogs[9].title}</a>
                  <p className="mt-auto text-xs dark:text-gray-400">37 minutes ago
                    <a rel="noopener noreferrer" href="#" className="block dark:text-blue-400 lg:ml-2 lg:inline hover:underline">Business</a>
                  </p>
                </div>
              </div>
            </div>

          </div>

        </div>
      </section>


    </>
  )
}


