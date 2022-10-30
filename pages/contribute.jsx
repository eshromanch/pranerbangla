import React from 'react';
import  Link from "next/link"
export async function getStaticProps() {

  const res = await fetch('https://pranerbangla.com.bd/api/vb1/faq')
  const posts = await res.json()
  const data = posts["data"]



  return {
    props: {
      data,
    },
  }
}

function Contribute({data}) {
    return (
      <div>
      <div className=' flex justify-center items-center p-20'>
                  <div className='mx-80 h-full  w-3/6 flex flex-col justify-center items-center  gap-5 lg:mx-40 md:mx-0 '>
                      <h1 className='text-2xl font-bold text-black dark:text-white text-center'>বাংলা ভাষায় সর্ববৃহৎ কন্টেন্ট বিপ্লবের অংশ হোন আপনিও</h1>
      <p className='text-md  text-black dark:text-white '>প্রাণের বাংলার যাত্রা শুরু হয়েছিল এমন সব গল্প বলার জন্য, যেগুলো জীবনের কথা বলে, স্বপ্নের কথা বলে, ভেঙে পড়ার গল্প বলে, আবার উঠে দাঁড়ানোর গল্প বলে। প্রাণের বাংলা ইতিহাসের গল্প শোনায়, বর্তমানের বিশ্লেষণ করে, ভবিষ্যতের স্বপ্ন দেখায়। প্রাণের  বাংলা এবার পাঠকদের জন্য গল্প শুনতে চায়, পাঠকদের গল্প শুনতে চায়। লিখুন মন খুলে, আপনার গল্প পৌঁছে যাক  গোটা বিশ্বে বাঙালী পাঠকসমাজের কাছে! </p>
      <Link href={"/writer_signup"} legacyBehavior><button className='btn '>কন্ট্রিব্যুট করুন </button></Link>
                  </div>
              </div>
      <div className='bg-[#f6f6f6] dark:bg-slate-900 ' >
      <div className='mx-48 h-full  grid grid-cols-2  items-center gap-20 lg:mx-10 md:mx-5 '>
      <div className='w-full flex justify-end '>
      <h1 className='text-2xl font-bold text-black dark:text-white  '>বাংলা ভাষায় সর্ববৃহৎ </h1>
      </div>
      <div className='flex flex-col  my-48  gap-5  '>
      {data?.map(items=>{
        return <div key={items.id} className='w-5/6'>
        <div className="collapse  bg-[#fafafa] rounded-box shadow-lg">
          <input type="checkbox" /> 
          <div className="collapse-title text-black text-xl font-medium md:text-sm" >
            {items.question_bn}
          </div>
          <div className="collapse-content "> 
            <p className='text-black md:text-sm'>{items.answer_bn}</p>
          </div>
        </div>
        </div>
      })}

      </div>

      </div>
      </div>
      </div>
    );
}

export default Contribute;