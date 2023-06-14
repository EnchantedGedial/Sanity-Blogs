import '@/styles/globals.css'
import { SessionProvider } from "next-auth/react"
import NavBar from './components/NavBar'
import Footer from './components/Footer'
import BackToTop from './components/BackToTop'
// import { Auth0Provider } from '@auth0/auth0-react';
export default function App({ Component, pageProps }) {
  return (

    <>
   
  
   <SessionProvider session={pageProps.session}>
    <NavBar/>
    <Component {...pageProps} />
    <BackToTop/>
  
    <Footer/>
    </SessionProvider>
 
    
    </>
  )
}
