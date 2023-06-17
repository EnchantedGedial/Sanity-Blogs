import Link from 'next/link'
import React from 'react'

const Category = () => {
        return (
                <>

                        <div className='max-w-7xl mt-5 m-auto pt-10'>
                                <h1 className='text-3xl mt-5 font-bold'>Categories</h1>
                        </div>

                        <div class="flex justify-center">
                                <div class="flex flex-col md:flex-row max-w-7xl justify-center items-center">


                                        <div class="overflow-hidden w-3/4 md:w-1/3 bg-white m-4 shadow-sm flex flex-col justify-center">
                                        <Link href={'../categories/Productivity'}>
                                                <div class="h-26 w-full overflow-hidden"> <img src="https://source.unsplash.com/random/500x400/?productivity "
                                                        alt="" class="" /> </div>

                                                <div href='../categories/Productivity' class="font-bold text-lg text-black m-2 m-auto">Producticity
                                                </div>

                                                <div class="text-gray-500 m-2 text-sm">There is something about nature that just feels so
                                                        calming. Whether you are out hiking through the wilderness or simply taking a stroll through your
                                                        local park, being surrounded by natural</div>

                                        </Link>
                                        </div>

                                        <div class="overflow-hidden w-3/4 md:w-1/3 bg-white m-4 shadow-sm flex flex-col justify-center">
                                        <Link href='../categories/StudyHacks'>
                                                <div class="h-26 w-full overflow-hidden"> <img src="https://source.unsplash.com/random/500x400/?study "
                                                        alt="" class="" /> </div>

                                                <div class="font-bold text-lg text-black m-2 m-auto">Study Hacks</div>
                                                <div class="text-gray-500 m-2 text-sm">When you go to the beach, there are a few things that you
                                                        should expect. The first thing is that the beach will be ho.. The first thing is that the beach will be ho.</div>

                                        </Link>
                                        </div>

                                        <div class="overflow-hidden w-3/4 md:w-1/3 bg-white m-4 shadow-sm flex flex-col justify-center">
                                        <Link href='../categories/TimeManagment'>
                                                <div class="h-26 w-full overflow-hidden"> <img src="https://source.unsplash.com/random/500x400/?work "
                                                        alt="" class="" /> </div>

                                                <div class="font-bold text-lg text-black m-2 m-auto">Time Management</div>
                                                <div class="text-gray-500 m-2 text-sm"><a href="">Galaxies are one of the biggest things in the Universe.
                                                        They are so big that they can be seen with the naked eye. Galaxies are made up of billions of
                                                        stars.</a></div>

                                        </Link>
                                        </div>










                                </div>
                        </div>


                        <div class="flex justify-center">
                                <div class="flex flex-col md:flex-row max-w-7xl justify-center items-center">
                                        <div class="overflow-hidden w-3/4 md:w-1/3 bg-white m-4 shadow-sm flex flex-col justify-center">
                                        <Link href='../categories/SelfHelp'>
                                                <div class="h-26 w-full overflow-hidden"> <img src="https://source.unsplash.com/random/500x400/?selfhelp "
                                                        alt="" class="" /> </div>

                                                <div class="font-bold text-lg text-black m-2 m-auto">Self Help</div>
                                                <div class="text-gray-500 m-2 text-sm">When you go to the beach, there are a few things that you
                                                        should expect. The first thing is that the beach will be ho.. The first thing is that the beach will be ho.</div>

                                        </Link>
                                        </div>


                                        <div class="overflow-hidden w-3/4 md:w-1/3 bg-white m-4 shadow-sm flex flex-col justify-center">
                                                <Link href='../categories/Books'>
                                                <div class="h-26 w-full overflow-hidden"> <img src="https://source.unsplash.com/random/500x400/?books "
                                                        alt="" class="" /> </div>

                                                <div class="font-bold text-lg text-black m-2 m-auto">Books
                                                </div>
                                                <div class="text-gray-500 m-2 text-sm">There is something about nature that just feels so
                                                        calming. Whether you are out hiking through the wilderness or simply taking a stroll through your
                                                        local park, being surrounded by natural</div>

                                        </Link>
                                        </div>


                                        <div class="overflow-hidden w-3/4 md:w-1/3 bg-white m-4 shadow-sm flex flex-col justify-center">
                                        <Link href='../categories/Productivity'>
                                                <div class="h-26 w-full overflow-hidden"> <img src="https://source.unsplash.com/random/500x400/?tech "
                                                        alt="" class="" /> </div>

                                                <div class="font-bold text-lg text-black m-2">Techonology</div>
                                                <div class="text-gray-500 m-2 text-sm"><a href="">Galaxies are one of the biggest things in the Universe.
                                                        They are so big that they can be seen with the naked eye. Galaxies are made up of billions of
                                                        stars.</a></div>

                                        </Link>
                                        </div>






                                </div>
                        </div>


                        <script src="https://cdn.tailwindcss.com"></script>
                        <script src="https://use.fontawesome.com/03f8a0ebd4.js"></script>
                        <script type="module" src="https://unpkg.com/ionicons@5.5.2/dist/ionicons/ionicons.esm.js"></script>
                        <script nomodule src="https://unpkg.com/ionicons@5.5.2/dist/ionicons/ionicons.js"></script>
                </>
        )
}

export default Category
