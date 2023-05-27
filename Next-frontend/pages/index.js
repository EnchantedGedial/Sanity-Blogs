
import Head from 'next/head'
import Image from 'next/image'
import 'bootstrap/dist/css/bootstrap.css'
import styles from '../styles/Home.module.css'
import { createClient } from "next-sanity";
import Script from "next/script"
import imageUrlBuilder from '@sanity/image-url'
import Link from 'next/link'

import Hero from './components/Hero';
import Testt from './components/Testt';
import RecentPost from './components/RecentPost';
import NewsLetter from './components/NewsLetter';

import Footer from './components/Footer';
import Category from './components/Category';


export default function Home({blogs,featuredBlogs}) {
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
      <RecentPost blogs={blogs} category={"Productivity" }/>
      <RecentPost blogs={blogs} category={"Time Management" }/>
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
 return {
    props: {
      blogs,featuredBlogs
    
    }
  }
}

