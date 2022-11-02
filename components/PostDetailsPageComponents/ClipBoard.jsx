import React from 'react';
import {useRouter} from 'next/router'
import CopyIcon from "../svgs/CopyBoard"
function ClipBoard(props) {

    return (
        <div className='flex relative w-full'>
            {/* <input type="url" value={`http://localhost:3000${pathname}`} readOnly  className='text-black min-w-full  bg-[#F1F1F6] rounded p-4 w-full focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary'/>
            <button className='btn btn-ghost absolute right-0'  onClick={() => navigator.clipboard.writeText(`http://localhost:3000${pathname}`)}><CopyIcon/></button> */}
               <input type="url" value={`https://pranerbangla.netlify.app${props.url}`} readOnly  className='text-black min-w-full  bg-[#F1F1F6] rounded p-4 w-full focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary'/>
            <button className='btn btn-ghost absolute right-0'  onClick={() => navigator.clipboard.writeText(`https://pranerbangla.netlify.app${props.url}`)}><CopyIcon/></button>
        </div>
    );
}

export default ClipBoard;

