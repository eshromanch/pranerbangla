import Link from 'next/link';
import {useRouter} from 'next/router';
// import { useRouter } from 'next/router';
import {useState, useEffect} from "react"
import Cards from '../components/GridCards';



function SearchDetails() {
    const router = useRouter();
    const search = router.query.search

const [searchData, setSearchData] = useState()
useEffect(()=>{
          
async function torHeda (){
    const data = {
        search: search
    
      }
    
     
      const JSONdata = JSON.stringify(data)
    
      
      const endpoint = 'https://pranerbangla.com.bd/api/vb1/search-post'
    
    
      const options = {
    
        method: 'POST',
        
        headers: {
          'Content-Type': 'application/json',
        },
        
        body: JSONdata,
      }
      const response = await fetch(endpoint, options)

      const resData = await response.json();
      const searchData= resData["data"]
      setSearchData(searchData)

}

torHeda()

  },[search]);


//   console.log(searchData)





    return (
        <div className='grid grid-cols-4 mb-4 gap-10 mx-48 my-12 w-full'> 

            {/* {searchData?.map(pageItem=>{
                return <Link href={"#"}><a ><Cards title={pageItem.title_bn} catagory={pageItem.category_name_bn} time={pageItem.created_at} imgSrc={pageItem.image} route={pageItem.id} status={pageItem.status}/></a></Link>
                // return <Link href={`/categories/${ids}/articles/${pageItem.id}`}><a ><Cards title={pageItem.title_bn} catagory={pageItem.category_name_bn} time={pageItem.created_at} imgSrc={pageItem.image} route={pageItem.id} status={pageItem.status}/></a></Link>
            })} */}

{searchData?.map(pageItem=>{
            if (searchData !== null) {
                return <Link key={pageItem.id} href={"#"} legacyBehavior><Cards title={pageItem.title_bn} catagory={pageItem.category_name_bn} time={pageItem.created_at} imgSrc={pageItem.image} route={pageItem.id} status={pageItem.status}/></Link>;
            }else{
                return <h1 key={1} className='text-black text-4xl w-full dark:text-white'>দুঃখিত আপনি যা খুঁজছেন তা খুঁজে পাওয়া যায়নি! পুনরায় অনুসন্ধান করুণ।</h1>

            }
           
            })}
        </div>
    );
}

export default SearchDetails;