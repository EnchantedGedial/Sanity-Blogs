import '@/styles/globals.css'
import NavBar from './components/NavBar'
import Footer from './components/Footer'
import BackToTop from './components/BackToTop'

export default function App({ Component, pageProps }) {
  return (

    <>
    <NavBar/>
    <Component {...pageProps} />
    <BackToTop/>
    {/* <BackToTop/> */}
    <Footer/>
    
    </>
  )
}
