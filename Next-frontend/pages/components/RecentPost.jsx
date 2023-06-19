import React from 'react'
import Link from 'next/link'
// import imageUrlBuilder from '@sanity/image-url'
import imageUrlBuilder from '@sanity/image-url'
import { createClient } from "next-sanity";

const RecentPost = ({blogs,category,img_type,category_slug}) => {
  const client = createClient({
    projectId: "liq8cp7u",
    dataset: "production",
    useCdn: false
  });
  const builder = imageUrlBuilder(client)
 
  console.log(category_slug)
    return (
    <>
    <div className='max-w-7xl mt-5 m-auto pt-10'>
        <h1 className='text-3xl mt-5 font-bold'>{category}</h1>
    </div>
            <div className="mx-auto grid  grid-cols-1 gap-6 pt-12 sm:w-3/4  lg:grid-cols-3 xl:gap-10 w-11/12"   >
                      {blogs?.map((items) => {
                        return <Link key={items.slug}  href={`${category_slug}_slug/${items.slug.current}`}  className="shadow">
                          <div className='rounded-lg'>
                          <div style={{ "backgroundImage": `url(https://source.unsplash.com/random/768x620?${img_type}/${Math.random()})`}}
                          // <div style={{ "backgroundImage": `url(${builder.image(items.poster).width(200).url()})` }}
                            className="group relative h-72 bg-cover rounded-sm bg-center bg-no-repeat sm:h-84 lg:h-64 xl:h-72">
                            <span
                              className="absolute inset-0 block bg-gradient-to-b from-blog-gradient-from to-blog-gradient-to bg-cover bg-center bg-no-repeat opacity-10 transition-opacity group-hover:opacity-50"></span>
                            
                          </div>
                          <div className="bg-white py-6 px-3  xl:py-8">
                            <span className="block font-body text-lg font-semibold text-black">{items.title}</span>
                            <span className="block pt-2 font-body text-grey-20">{items.metadisc.slice(0,100)}...</span>
                          </div>
                          </div>
                        </Link>
                      })}


                    
            </div>
          
  
    </>
  )
}

export default RecentPost
