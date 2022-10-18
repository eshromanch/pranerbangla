import Link from 'next/link';
import React from 'react';



export async function getStaticProps() {

  const res = await fetch('https://pranerbangla.com.bd/api/vb1/package-list')
  const posts = await res.json()
  const data = posts["data"]
  return {
    props: {
      data,
    },
  }
}



function subscriptions({data}) {
  if (typeof window !== 'undefined') {
    const token = localStorage.getItem("token")

    // 👉️ can use localStorage here
  }

 
    return (
<div  className="h-screen bg-gray-900 p-12">
  <div className="max-w-lg mx-auto">
    <h2 className="text-2xl md:text-5xl font-semibold text-center text-gray-100">Subscriptions Option</h2>
    <h3 className="mt-2 text-center text-gray-500">Create screens directly in Method or add your images from Sketch or Figma. You can even sync designs from your cloud storage!</h3>
  </div>
  <div className="my-8 mt-12 flex flex-row md:flex-col items-center justify-center gap-4">
{data.map(items=>{
  return     <div className="max-w-xs rounded-md border-2 border-solid border-primary border-opacity-25 hover:border-opacity-100 px-8 pt-8 pb-4">
  <h3 className="text-2xl font-semibold text-gray-100">Starter</h3>
  <p className="mt-1 text-gray-500">Go beyond email and customize your workflow</p>
  <div className="flex items-center mt-2 mb-4">
    <h4 className="text-4xl font-semibold text-gray-100 mr-4">BDT {items.price_bn}</h4>
    <span className="text-xs text-gray-500">per user <br />{items.countMonth} month</span>
  </div>
<Link href={{pathname:`Subscription/purchase/${items.id}`, query: items}}><a><button type="button" className="my-2 w-full font-semibold text-primary hover:text-gray-100 hover:bg-primary rounded border border-solid border-primary border-opacity-25 py-3">Select Plan</button></a></Link>
  {/* <button type="button" className="w-full font-semibold text-gray-100 py-3 rounded border border-solid border-transparent hover:border-indigo-700">Learn More</button> */}
</div>
})}
    {/* <div className="max-w-xs rounded-md border-2 border-solid border-indigo-600 px-8 pt-8 pb-4">
      <h3 className="text-2xl font-semibold text-gray-100">Method Plus</h3>
      <p className="mt-1 text-gray-500">Go beyond email and customize your workflow</p>
      <div className="flex items-center mt-2 mb-4">
        <h4 className="text-5xl font-semibold text-gray-100 mr-4">$29</h4>
        <span className="text-xs text-gray-500">per user <br />per month</span>
      </div>
      <button type="button" className="my-2 w-full font-semibold text-gray-100 bg-indigo-600 hover:bg-indigo-700 py-3 rounded">Select Plan</button>
      <button type="button" className="w-full font-semibold text-gray-100 py-3 rounded border border-solid border-transparent hover:border-indigo-700">Learn More</button>
    </div>
    <div className="max-w-xs rounded-md border-2 border-solid border-indigo-600 border-opacity-25 hover:border-opacity-100 px-8 pt-8 pb-4">
      <h3 className="text-2xl font-semibold text-gray-100">Method Pro</h3>
      <p className="mt-1 text-gray-500">Go beyond email and customize your workflow</p>
      <div className="flex items-center mt-2 mb-4">
        <h4 className="text-5xl font-semibold text-gray-100 mr-4">$39</h4>
        <span className="text-xs text-gray-500">per user <br />per month</span>
      </div>
      <button type="button" className="my-2 w-full font-semibold text-indigo-600 hover:text-gray-100 hover:bg-indigo-700 rounded border border-solid border-indigo-600 border-opacity-25 py-3">Select Plan</button>
      <button type="button" className="w-full font-semibold text-gray-100 py-3 rounded border border-solid border-transparent hover:border-indigo-700">Learn More</button>
    </div> */}
  </div>
</div>
    );
}

export default subscriptions;