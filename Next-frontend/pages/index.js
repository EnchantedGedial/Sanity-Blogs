
import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import 'bootstrap/dist/css/bootstrap.css'
import { createClient } from "next-sanity";
import Script from "next/script"
import imageUrlBuilder from '@sanity/image-url'
import Hero from './components/Hero';
import RecentPost from './components/RecentPost';
import NewsLetter from './components/NewsLetter';
import Category from './components/Category';
import logo from '../Assets/FIRE STONE 1.png'


export default function Home({blogs,featuredBlogs,Productivity,TimeManagement,SelfHelp,StudyHacks,Books}) {
  const client = createClient({
    projectId: "liq8cp7u",
    dataset: "production",
    useCdn: false
  });
  const builder = imageUrlBuilder(client)
  


  return (
    <>
    <Head>
        <title>iBlogs</title>
        <meta property="og:image" content={logo} />
        <meta property="og:description" content="A full description of the page."/>

<meta property="og:image:width" content="1200"/>

<meta property="og:image:height" content="630"/>
      </Head>
      <Script src="/assets/js/main.js"></Script>
      
   
      <Hero featuredBlogs={featuredBlogs}/>
      <Category/>
      <RecentPost  blogs={Productivity.slice(0,3)} img_type={"work"}  category={"Productivity" } category_sulg={"Productivity" }/>
     <RecentPost blogs={TimeManagement?.slice(0,3)} img_type={"work"} category={"Time Management" } category_sulg={"Time Management" }/>
      <RecentPost blogs={SelfHelp} img_type={"work"} category={"Self Help" } category_slug={"SelfHelp" }/>
      <RecentPost blogs={StudyHacks} img_type={"study"} category={"Study Hacks" }  category_slug={"StudyHacks" }/>
      <NewsLetter/>
      <RecentPost blogs={Books} img_type={"books"} category={"Books" } category_slug={"Books" }/>
      <RecentPost blogs={blogs} img_type={"work"} category={"Mental Health" } category_slug={"dipression" }/>
       
      
   

      

 
    </>

    
  )
}


export const  getServerSideProps = async(context)=> {
  
  const client = createClient({
    projectId: "liq8cp7u",
    dataset: "production",
    useCdn: false
  });
  const query = `*[_type == "blog"][0...3]`;
  const blogs = await client.fetch(query);



  const query1 = `*[_type == "featuredBlogs"]`;
  const featuredBlogs = await client.fetch(query1);


  const queryforProductivity = `*[_type == "Productivity"]`;
  const Productivity = await client.fetch(queryforProductivity);

  const queryforTimeManagement = `*[_type == "TimeManagement"]`;
  const TimeManagement = await client.fetch(queryforTimeManagement);

  const queryforSelfHelp = `*[_type == "SelfHelp"]`;
  const SelfHelp = await client.fetch(queryforSelfHelp);

  const queryforStudyHacks = `*[_type == "StudyHacks"]`;
  const StudyHacks = await client.fetch(queryforStudyHacks);

  const queryforBooks = `*[_type == "Books"]`;
  const Books = await client.fetch(queryforBooks);
  
 return {
    props: {
      blogs,featuredBlogs,Productivity,TimeManagement,SelfHelp,StudyHacks,Books
    
    }
  }
}

