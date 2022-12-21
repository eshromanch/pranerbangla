
import React,{useEffect, useState} from 'react';


// export function Article({
//   fontSize
// }) {
//   return <p className='text-black dark:text-white' style={{
//     fontSize: `${fontSize}px`
//   }}>ক্লাউড কম্পিউটিং আমাদের জীবনযাত্রাকে প্রতিনিয়ত এগিয়ে নিচ্ছে। ডিজিটালাইজেশনের যুগে সবচেয়ে গুরুত্বপূর্ণ উপাদান তথ্য, অর্থাৎ ডেটা। যোগাযোগ, কর্মক্ষেত্র, পড়াশোনা, অবসরসহ নিত্যদিনের যেকোনো কাজের পুরোটাই নির্ভর করে আছে এই তথ্যের উপর। তো এই বিশাল পরিমাণ তথ্যের ঠিকানা কোথায়? কোথায় গিয়ে জমা হচ্ছে আমাদের জীবনের খুঁটিনাটি? উত্তর- ডেটা সেন্টার। বিশালাকার জায়গা জুড়ে শত শত সার্ভার নিয়ে তৈরি করা হয় একটি ডেটা সেন্টার। কিন্তু যে হারে তথ্যের সংখ্যা বেড়ে চলছে, এগুলোকে রক্ষণাবেক্ষণ করাও ততটা কঠিন হয়ে পড়ছে।

// এজন্য ডেটা রক্ষণাবেক্ষণ ও প্রক্রিয়া সহজতর করে তুলতে মাইক্রোসফট ২০১৮ সালে এক অভিনব সিদ্ধান্ত গ্রহণ করে। যে সিদ্ধান্ত হয়তো ভবিষ্যতের ডেটা স্টোরেজ সিস্টেমই পাল্টে দেয়ার ক্ষমতা রাখে। মাইক্রোসফটের এই পদক্ষেপ যেমন ব্যতিক্রম, তেমনি তাদের সফলতা ডেটা সেন্টারের চিন্তাধারায় অপার সম্ভাবনার মাত্রা যুক্ত করেছে। চলুন জানা যাক মাইক্রোসফটের আন্ডারওয়াটার ডেটা সেন্টারের গল্প!
//   </p>;
// }
//   export default Article;


let token;
if (typeof window !== 'undefined') {
  token = localStorage.getItem("token")
   console.log(status)
}


const credential = false

export function Article(props) {
  // function createMarkup() {
  //   props.content
  //   return { __html: props.content };
  // }
  
  const [data, setData] =useState()
  useEffect(()=>{
    async function fetchData() {
      const res = await fetch(
        'https://pranerbangla.com.bd/api/vb1/user-package-list',{
          headers: {
      
                  "Content-Type": 'application/json',
                  // 'Accept': 'application/json',
                  "Authorization": `Bearer ` + token
  
          }
        }
      );
      const data = await res.json();
      setData(data)
    }
    
  if (token!==null) {
    fetchData()
  }
  },[]);

  // console.log(  props.content.length / 2)
  const num =  props.content.length / 3;

  // console.log(props.content.slice(0,num))

  const torbap = "<div  style='position:absolute;height:70%;width:100%;bottom:0;background-color:rgba(254, 249, 249, 0.95); display:flex; flex-direction:column; justify-content:center; align-items:center; gap:2rem'><div style=' display:flex; width:100%; justify-content:center;align-items:center; overflow-x:hidden; position:relative;'><div style='background:red;width:50%;height:5px' ></div><div style='height:50px;width:50px; border-radius:50%; background:red ; display:flex; align-items:center;justify-content:center'><svg xmlns='http://www.w3.org/2000/svg' width='24' height='24' viewBox='0 0 24 24' fill='none' stroke='white' stroke-width='2' stroke-linecap='round' stroke-linejoin='round' class='feather feather-lock'><rect x='3' y='11' width='18' height='11' rx='2' ry='2'></rect><path d='M7 11V7a5 5 0 0 1 10 0v4'></path></svg></div><div style='background:red;width:50%; height:5px'></div></div><h1 style='font-weight:bold; font-size:1.5em;' >এই লেখাটি সম্পূর্ণ পড়তে সাবস্ক্রাইব করুন। </h1><a  href='/Subscription' style='text-decoration:none;'><button style='background:red; color:white; padding:0.5rem 2rem' >Subscriptions</button></a></div>"

  let myArr = props.content.slice(0,num) + torbap
  let myArr2 = props.content 
  return <div className=''>

  {(()=>{
    if (data?.PackageUser[0]?.status === "1") {
      return <div className='relative text-black dark:text-white ImgSpace' dangerouslySetInnerHTML={{ __html: myArr2 }}> 
  
      </div>

      
    }else{
      return <div className='relative text-black dark:text-white ImgSpaceForPaidArticles' dangerouslySetInnerHTML={{ __html: myArr }}> 
  
      </div>
    }
    })()}
  
  </div>;
}
  export default Article;

