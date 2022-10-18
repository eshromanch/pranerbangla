import React from 'react';


export async function getStaticPaths() {
      const res = await fetch("https://pranerbangla.com.bd/api/vb1/page-menu/")
        const data = await res.json();
      
        const content = data["data"]
      
        const paths = content.map(pageName =>{
         
      // console.log(pageName.page_menu_id)

            return {
                params: {pageId: pageName.id.toString()
                    // id: pageName.id?.toString()
                }
            }
         
        })
        return {
          paths,
          fallback: true // true or 'blocking'
        };
      }
      
      export async function getStaticProps(context) {
        const id = context.params.pageId

        const res = await fetch('https://pranerbangla.com.bd/api/vb1/page-content/' +id )
        const posts = await res.json()
        const data = posts["data"]

    
        return {
          props: {
            data,
          },
        }
      }
      
    
    
    
function SubPages({data}) {
    return (
<>
{[data]?.map(items=>{
    return         <div className='mx-48 my-12'>
    <h1 className='text-black text-4xl my-12 dark:text-white '>{items.title_bn}</h1>
  <div className=' text-black dark:text-white' dangerouslySetInnerHTML={{ __html: items.content_bn }}>
       
  </div>
</div>
})}
</>
    );
}

export default SubPages;