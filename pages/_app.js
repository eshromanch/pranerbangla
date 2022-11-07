import Layouts from '../components/Layouts'
import '../styles/globals.css'
import 'react-quill/dist/quill.snow.css'
import { ThemeProvider } from 'next-themes'
import Footer from '../components/Footer';
import Nav from '../components/Nav';
import React, {useEffect} from "react";
function MyApp({ Component, pageProps }) {
  useEffect(() => {
    document.getElementById("__next").className = "dark:bg-slate-800 relative";
  }, []);
  return  <ThemeProvider attribute="class" enableSystem={true}>
                <Nav/>
   <Layouts>
    <Component {...pageProps} />
  </Layouts>
  <Footer/> 
  </ThemeProvider>

}

export default MyApp
