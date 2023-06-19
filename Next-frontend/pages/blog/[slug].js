// import { useRouter } from 'next/router'
import { useRouter } from 'next/router'
import { createClient } from "next-sanity";
import PortableText from "react-portable-text"
import { CgProfile } from 'react-icons/cg';
import Image from 'next/image';
import addvi from '../../Assets/ad-1.jpg'
import NewsLetter from '../components/NewsLetter';

const Post = ({blogs}) => {
    const router = useRouter()
   return <>
    {/* <div>
      <div className="container py-6 md:py-10">
        <div className="mx-auto max-w-4xl">
          <div className="">
            <h1
              className="pt-5 font-body text-3xl font-semibold text-primary sm:text-4xl md:text-5xl xl:text-6xl">
              {blogs?.title}
            </h1>
            <div className="flex items-center pt-5 md:pt-10">
              <div><CgProfile  className="h-20 w-20 rounded-full border-2 border-grey-70 shadow"/></div>
              <div className="pl-5">
                <span className="block font-body text-xl font-bold text-grey-10">By Christy Smith</span>
                <span className="block pt-1 font-body text-xl font-bold text-grey-30">February 27,
                  2022</span>
              </div>
            </div>
          </div>
          <div className="flex">
          <div className="prose max-w-none pt-8">
            <PortableText content={blogs?.content}projectId="liq8cp7u"dataset="production" serializers={{
                h1: (props) => <h1 style={{ color: "red" }} {...props} />,
                li: ({ children }) => <li className="special-list-item">{children}</li>,
              }}
            />

          </div>
          
          </div>
        
        </div>
      </div>
    </div> */}


<div class="max-w-screen-lg mx-auto">
   
    
   

    <main class="mt-10">

      <div class="mb-4 md:mb-0 w-full mx-auto relative">
        <div class="px-4 lg:px-0">
          <h2 class="text-4xl font-semibold text-gray-800 leading-tight">
          {blogs?.title}
          </h2>
          
        </div>

        <img src='https://source.unsplash.com/random/768x620?work' class="w-full object-cover lg:rounded" style={{height: "28em"}}/>
      </div>

      <div class="flex flex-col lg:flex-row lg:space-x-12">

        <div class="px-4 lg:px-0 mt-12 text-gray-700 text-lg leading-relaxed w-full lg:w-3/4">
        <PortableText content={blogs?.content}projectId="liq8cp7u"dataset="production" serializers={{
                h1: (props) => <h1 style={{ color: "red" }} {...props} />,
                li: ({ children }) => <li className="special-list-item">{children}</li>,
              }}
            />

        </div>

        <div class="w-full lg:w-1/4 m-auto mt-12 max-w-screen-sm">
          <div class="p-4 border-t border-b md:border md:rounded">
            <div class="flex py-2">
              <img src="https://randomuser.me/api/portraits/men/97.jpg"
                class="h-10 w-10 rounded-full mr-2 object-cover" />
              <div>
                <p class="font-semibold text-gray-700 text-sm"> Mike Sullivan </p>
                <p class="font-semibold text-gray-600 text-xs"> Editor </p>
              </div>
            </div>
            <p class="text-gray-700 py-3">
              Mike writes about technology
              Yourself required no at thoughts delicate landlord it be. Branched dashwood do is whatever it.
            </p>
            <button class="px-2 py-1 text-gray-100 bg-green-700 flex w-full items-center justify-center rounded">
              Follow 
              <i class='bx bx-user-plus ml-2' ></i>
            </button>
          </div>
          <div class="p-4 mt-6 border-t border-b md:border md:rounded">
            <div class="flex py-2">
              <img src="https://randomuser.me/api/portraits/men/97.jpg"
                class="h-10 w-10 rounded-full mr-2 object-cover" />
              <div>
                <p class="font-semibold text-gray-700 text-sm"> Mike Sullivan </p>
                <p class="font-semibold text-gray-600 text-xs"> Editor </p>
              </div>
            </div>
            <p class="text-gray-700 py-3">
              Mike writes about technology
              Yourself required no at thoughts delicate landlord it be. Branched dashwood do is whatever it.
            </p>
            <button class="px-2 py-1 text-gray-100 bg-green-700 flex w-full items-center justify-center rounded">
              Follow 
              <i class='bx bx-user-plus ml-2' ></i>
            </button>
          </div>
          <div class="p-4 mt-6 border-t border-b md:border md:rounded"><NewsLetter/></div>
          <div class="p-4 mt-6 border-t border-b md:border md:rounded">
          <Image
      src={addvi}
      // width={500}
      // height={500}
      alt="Sample"
    />
          
          </div>
           
          <div class="p-4 mt-6 border-t border-b md:border md:rounded">
          <Image
      src={addvi}
      width={500}
      height={500}
      className='flex items-center content-center'
      alt="Sample"
    />
          
          </div>
           
          <div>
            
          </div>
        </div>

      </div>
    </main>
  
   
  </div>

  </> 

}

export default Post

export  const  getServerSideProps = async(context) =>{
  const {slug} = context.query ;
  // <p>Data : ${slug}</p>
  const client = createClient({
    projectId: "liq8cp7u",
    dataset: "production",
    useCdn: false
  });
  const query = `*[_type == "blog" && slug.current == '${slug}'][0]`;
  const blogs = await client.fetch(query);
  
 
 return {
    props: {
      blogs
    
    }
  }
}



