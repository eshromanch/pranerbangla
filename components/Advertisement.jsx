import React from 'react';
import {useState, useEffect} from "react"
function Advertisement(props) {

    const [data, setData]=useState();


    useEffect(()=>{
        async function fetchData() {
          const res = await fetch(
            'https://pranerbangla.com.bd/api/vb1/advertisement'
          );
          const {data} = await res.json();
          setData(data)
        }
        fetchData()
      },[]);
    return (
        <div>
            {
                data?.map((ad,i) =>{
                    if (ad.add_space==="categoty") {
                        return   <div key={i} className='h-full'>
                        <img className='h-32' src={`https://pranerbangla.com.bd/${ad.image} `} alt="" />
                    </div>
                    }
                }
                  
                )
            }
        </div>
    );
}

export default Advertisement;