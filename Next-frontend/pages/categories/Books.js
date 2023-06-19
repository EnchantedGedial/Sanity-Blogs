import React from 'react'
import ImageGridBook from '../components/ImageGridBook'
import AllCategBlogs1 from '../components/AllCategBlogs1'
import { createClient } from "next-sanity";
import Script from "next/script"
import imageUrlBuilder from '@sanity/image-url'
const   Books = ({Books}) => {

  const client = createClient({
    projectId: "liq8cp7u",
    dataset: "production",
    useCdn: false
  });
  const builder = imageUrlBuilder(client)
  return (
    <>


    <ImageGridBook/>
    <AllCategBlogs1  category={"Books"} blog={Books}/>
      
    </>
  )
}

export default Books

export const  getServerSideProps = async(context)=> {
  
  const client = createClient({
    projectId: "liq8cp7u",
    dataset: "production",
    useCdn: false
  });
  // const query = `*[_type == "blog"][0...3]`;
  // const blogs = await client.fetch(query);



  // const query1 = `*[_type == "featuredBlogs"]`;
  // const featuredBlogs = await client.fetch(query1);


  // const queryforProductivity = `*[_type == "Productivity"]`;
  // const Productivity = await client.fetch(queryforProductivity);

  // const queryforTimeManagement = `*[_type == "TimeManagement"]`;
  // const TimeManagement = await client.fetch(queryforTimeManagement);

  // const queryforSelfHelp = `*[_type == "SelfHelp"]`;
  // const SelfHelp = await client.fetch(queryforSelfHelp);

  // const queryforStudyHacks = `*[_type == "StudyHacks"]`;
  // const StudyHacks = await client.fetch(queryforStudyHacks);

  const queryforBooks = `*[_type == "Books"]`;
  const Books = await client.fetch(queryforBooks);
  
 return {
    props: {
      Books
    
    }
  }
}