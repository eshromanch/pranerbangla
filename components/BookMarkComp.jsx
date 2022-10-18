import React, { useEffect,useState, useRef, useCallback } from 'react';
import BookMark from "./svgs/BookMarks"
import Styles from "../styles/Search.module.css"
import Close from "../components/svgs/Close"
import Link from 'next/link';
let token;
if (typeof window !== 'undefined') {
   token = localStorage.getItem("token")
  // console.log(token)
}

let bookMarksList=[];

function BookMarkComp(props) {
//     const initialState = [];
    const [data, setData] = useState();
//  useEffect(() => {
//     window.addEventListener('storage', () => {

//   const bookMarksItem = JSON.parse(localStorage.getItem("bookMarks"));
//   setbookMarksItem(bookMarksItem || [])   
// });
//       }, [])
// console.log(bookMarksItem)

// useEffect(() => {
//  bookMarksItem = JSON.parse(localStorage.getItem("bookMarks"));
 
// }, [])
// console.log(bookMarksItem)




// let bookMarksItem;
// if (typeof window !== 'undefined') {
//  bookMarksItem = JSON.parse(localStorage.getItem("bookMarks")) ; 
// }


// let [data, setData] = useState(false);


// const catchFuckingData = useCallback(
//    ()  => {

//   },[bookMarksItem]
// )




// useEffect(() => {
//   bookMarksItem = JSON.parse(localStorage.getItem("bookMarks"));
//   if(bookMarksItem)  setbookMark(bookMarksItem) 
// }, [])


// const bookMarksItems =  ()=>{
  useEffect(()=>{
    async function fetchData() {
      const res = await fetch(
        'https://pranerbangla.com.bd/api/vb1/bookmark-list',{
          headers: {
      
                  // "Content-Type": 'application/json',
                  'Accept': 'application/json',
                  "Authorization": `Bearer ` + token

          }
        }
      );
      const {data} = await res.json();
      setData(data)
      
    }
    fetchData()
  },[]);
// }


// const bookMarksItems = async (event)=>{
// //   if (typeof window !== 'undefined') {
// //  bookMarksItem = JSON.parse(localStorage.getItem("bookMarks")) ; 
// // }
// // window.addEventListener("storage", ()=> bookMarksItem = JSON.parse(localStorage.getItem("bookMarks")))

// // event.preventDefault()
// const endpoint = `https://pranerbangla.com.bd/api/vb1/bookmark-list`


// const options = {

//   method: 'GET',
  
//   headers: {
//     // "Content-Type": 'application/json',
//     'Accept': 'application/json',
//     "Authorization": `Bearer ` + token
//   },
  
// }

// const response = await fetch(endpoint, options)

//  const result = await response.json()
// //  result["data"]?.map(items=>{
// //   bookMarksList.push(items)
// //   console.log(items)

  
// //  })

// bookMarksList.push(result["data"])
// // console.log( bookMarksList)

// bookMarksList.map(e=>{
//   console.log(e)
//   e.map(p=>{
//     console.log(p)
//   })
// })




// }

// let [bookMarksItem, setbookMark] = useState();
// useEffect(() => {
//   bookMarksItems()
//   if(bookMarksItem)  setbookMark(bookMarksItem) 
// }, [])



// console.log(bookMarksItem)

async function  removeData(id){
    
// event.preventDefault()
const endpoint = `https://pranerbangla.com.bd/api/vb1/bookmark-delete/${id}`


const options = {

  method: 'GET',
  
  headers: {
    // "Content-Type": 'application/json',
    'Accept': 'application/json',
    "Authorization": `Bearer ` + token
  },
  
}

const response = await fetch(endpoint, options)

 const result = await response.json()

 location.reload()
}



// const [mounted,setMounted] = useState(false)
// useEffect(()=> {
//   setMounted(true)
// },[])
// if(!mounted) return null
    return (

<div>

<div class="dropdown mt-2 ">
  <label tabindex="0" class="btn btn-ghost m-1"><BookMark className="h-5 dark:stroke-white"/></label>
  <ul tabindex="0" class="dropdown-content menu p-2 shadow bg-base-100 rounded-box w-96 md:-ml-80 sm:w-60 sm:-ml-40">
    {data?.map(items=>{
      
      return <li  className='flex justify-between p-4'><Link href={``}><a className='text-white w-60 sm:w-36'>{items.post?.title_bn}</a></Link> <button key={items.id} onClick={()=>removeData(items.id)} className='btn text-white'>-</button></li>

        
    })}
    

  </ul>
</div>

        </div>

    );
}

export default BookMarkComp;




{/* <div className="SearchBar">
{isOpen && (
  <>
    <div className={`${Styles.box} absolute -mt-3  z-10  top-0 right-0 left-0 w-[100vw] h-[75vh] bg-white shadow-xl dark:bg-slate-800   `}>
<div className="w-full h-full relative  flex justify-center items-center">
<button className="absolute top-5 right-10 text-black " onClick={closeModal}><Close className="h-10 dark:stroke-white"/></button>
      <form onSubmit={handleSubmit}>
          <h1 className="text-xl text-gray-500 dark:text-gray-100 md:text-lg" >অনুসন্ধান করতে টাইপ করুন এবং এন্টার টিপুন</h1>
<div  className="relative my-5">
<input type="text" placeholder=" খুঁজুন ..." name="search" className="h-10 w-[40rem] input rounded-none bg-[#f0f2f5] text-black p-5 focus:border-primary md:w-[20rem]" />
          <button type="submit"><Search className="absolute top-2 right-2 h-5 stroke-gray-500  "/></button>
</div>
      </form>
</div>

    
    </div>
  
  </>
)}

<button className="" onClick={openModal}><BookMark className="h-5 dark:stroke-white"/></button>
</div> */}