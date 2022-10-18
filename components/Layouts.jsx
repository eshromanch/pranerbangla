import React from 'react';
import Footer from './Footer';
import Nav from './Nav';



function Layouts({ children }) {
    return (
        <div className="dark:bg-slate-800 font-body  ">
            <Nav/>
    
            { children }
            <Footer/>
        </div>
    );
}

export default Layouts;