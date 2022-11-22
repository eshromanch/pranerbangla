import React,{useEffect,useState} from 'react';
import Circle from '../svgs/Circle'
function Edotorial(props) {
    const [data, setData]=useState();


    useEffect(()=>{
        async function fetchData() {
          const res = await fetch(
            'https://pranerbangla.com.bd/api/vb1/editorial'
          );
          const {data} = await res.json();
          setData(data)
        }
        fetchData()
      },[]);

    return (
        <div className='flex flex-col '><b><h1 className='mb-4 flex text-lg text-black dark:text-white'><Circle className=" h-3 pr-2 mt-1"/>সম্পাদকীয়</h1></b>
        <div className='flex flex-col'>
          {/* <div className='h-40 w-40 bg-gray-500'></div> */}
          <div className='h-[18rem] relative flex flex-col items-center  '>
            <img className='h-[12.5rem] w-full object-cover' src={data?.['image']} alt="" />
            <div className="cursor-pointer  w-36 h-36  ">
        <img src="koli-pranerbangla.png" alt="" className=" w-36 h-36 rounded-full object-cover border-2 border-primary absolute  -translate-y-16"></img>
        
     </div>
            </div>
          <p className='my-8 text-base text-black dark:text-white' dangerouslySetInnerHTML={{ __html: data?.content_bn }}></p>
          <img src={`https://pranerbangla.com.bd/${data?.signature}`} alt=""  />
        </div>
        </div>
    );
}

export default Edotorial;