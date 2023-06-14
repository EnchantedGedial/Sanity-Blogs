
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


export default function Home({blogs,featuredBlogs,Productivity,TimeManagement}) {
  const client = createClient({
    projectId: "liq8cp7u",
    dataset: "production",
    useCdn: false
  });
  const builder = imageUrlBuilder(client)
  


  return (
    <>
      <Script src="/assets/js/main.js"></Script>
      
   
      <Hero featuredBlogs={featuredBlogs}/>
      <Category/>
      <RecentPost blogs={Productivity.slice(0,3)} category={"Productivity" }/>
     <RecentPost blogs={TimeManagement?.slice(0,3)} category={"Time Management" }/>
      <RecentPost blogs={blogs} category={"Self Help" }/>
      <RecentPost blogs={blogs} category={"Study Hacks" }/>
      <NewsLetter/>
      <RecentPost blogs={blogs} category={"Books" }/>
      <RecentPost blogs={blogs} category={"Mental Health" }/>
       
      
   

      

 
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
  
 return {
    props: {
      blogs,featuredBlogs,Productivity,TimeManagement
    
    }
  }
}

