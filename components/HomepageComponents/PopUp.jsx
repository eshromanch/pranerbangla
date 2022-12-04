import React ,{useState,useEffect}from 'react';


function PopUp(props) {
    const [isOpen, setIsOpen] = useState(false);
    const [data, setData]=useState();

    const openModal = () => {
      setIsOpen(true);
      setTimeout(closeModal,15000)
    }
  
    const closeModal = () => {
      setIsOpen(false);
    
    }

    useEffect(()=>{
        openModal()
        async function fetchData() {
            const res = await fetch(
              'https://pranerbangla.com.bd/api/vb1/popup'
            );
            const {data} = await res.json();
            setData(data)
          }
          fetchData()
      }, [])

    return (
        <>
       {/* {isOpen && ( <div className='sticky top-0 w-full h-full  z-20'>
            <div className='relative  flex justify-center w-full h-full'>
            <img className='absolute z-40' src={data?.image} alt="" />
           
            <button className='absolute z-50 top-0 text-black text-right' onClick={closeModal}>x</button>
            </div>
        </div>
        )} */}
               {isOpen && ( <div className='fixed flex justify-center top-44 w-full h-full  z-20 '>
  
            <div className=' z-40 w-[45rem] h-[45rem] relative flex justify-end md:w-[25rem] md:h-[25rem] sm:w-[20rem] sm:h-[20rem]'><img className='absolute p-5' src={data?.image} alt="" />
            <button className='absolute z-30 text-right text-xl text-white mx-1' onClick={closeModal}>

              <div className='w-10 h-10 rounded-full bg-primary flex justify-center items-center'>
                  x
              </div>
            </button>
            </div>
            <div className='bg-black absolute z-10 -top-6 opacity-50 w-full h-full' ></div>
        </div>
        )}
        </>
    );
}

export default PopUp;