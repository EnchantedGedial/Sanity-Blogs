// import { useRouter } from 'next/router'
import { useRouter } from 'next/router'
import { createClient } from "next-sanity";
import PortableText from "react-portable-text"
import { CgProfile } from 'react-icons/cg';

const Post = ({blogs}) => {
    const router = useRouter()
   return <>
    <div>
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



