import Layouts from '../components/layouts'
import '../styles/globals.css'
import { ThemeProvider } from 'next-themes'

function MyApp({ Component, pageProps }) {
  return  <ThemeProvider attribute="class" enableSystem={true}>
   <Layouts>
    <Component {...pageProps} />
  </Layouts>
  </ThemeProvider>
}

export default MyApp
