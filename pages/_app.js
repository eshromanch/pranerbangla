import Layouts from '../components/Layouts'
import '../styles/globals.css'
import { ThemeProvider } from 'next-themes'
import Footer from '../components/Footer';
import Nav from '../components/Nav';
function MyApp({ Component, pageProps }) {
  return  <ThemeProvider attribute="class" enableSystem={true}>
                <Nav/>
   <Layouts>
    <Component {...pageProps} />
  </Layouts>
  <Footer/> 
  </ThemeProvider>

}

export default MyApp
