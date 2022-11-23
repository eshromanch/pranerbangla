// import Layouts from "../components/Layouts";
// import "../styles/globals.css";
// import "react-quill/dist/quill.snow.css";
// import { ThemeProvider } from "next-themes";
// import Footer from "../components/Footer";
// import Nav from "../components/Nav";
// import React, { useEffect } from "react";
// function MyApp({ Component, pageProps }) {
//   useEffect(() => {
//     document.getElementById("__next").className = "dark:bg-slate-800 relative";
//   }, []);
//   return (
//     <ThemeProvider attribute="class" enableSystem={true}>
//       <Nav />
//       <Layouts>
//         <Component {...pageProps} />
//       </Layouts>
//       <Footer />
//     </ThemeProvider>
//   );
// }

// export default MyApp;
import Head from 'next/head'
import Layouts from "../components/Layouts";
import "../styles/globals.css";
import "react-quill/dist/quill.snow.css";
import { ThemeProvider } from "next-themes";
import Footer from "../components/Footer";
import Nav from "../components/Nav";
import React, { useEffect, useState } from "react";
import Router from 'next/router';
import Loadeer from "../components/loader";

    function MyApp({ Component, pageProps }) {
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    Router.events.on('routeChangeStart', () => setLoading(true));
    Router.events.on('routeChangeComplete', () => setLoading(false));
    Router.events.on('routeChangeError', () => setLoading(false));
    return () => {
      Router.events.off('routeChangeStart', () => setLoading(true));
      Router.events.off('routeChangeComplete', () => setLoading(false));
      Router.events.off('routeChangeError', () => setLoading(false));
    };
  }, [Router.events]);

  
      useEffect(() => {
    document.getElementById("__next").className = "dark:bg-slate-800 relative";
  }, []);
  return (
    <>
     <Head>
 <link rel="icon" href="/fv-01.png" />
        
      </Head>
    {
      (loading)
      ?
      <div className="h-[100vh] flex justify-center items-center">
        <Loadeer/>
      </div>
      :
      <ThemeProvider attribute="class" enableSystem={true}>
     <Nav />
       <Layouts>
         <Component {...pageProps} />
      </Layouts>
      <Footer />
      </ThemeProvider>
      
    } 
    </>
);
}

export default MyApp;