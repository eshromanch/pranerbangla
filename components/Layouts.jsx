import React from 'react';
// import Footer from './Footer';
import Nav from './Nav';

import dynamic from 'next/dynamic'


const Footer = dynamic(()=> import ('./Footer'))

function Layouts({ children }) {
    return (
        <div className="dark:bg-slate-800 font-body  ">
            {/* <Nav/> */}
    
            { children }
            {/* <Footer/> */}
        </div>
    );
}

export default Layouts;