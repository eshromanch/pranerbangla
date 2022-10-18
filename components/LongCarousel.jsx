// import React from 'react';

// function LongCarousel(props) {
//     return (
//         <div className='relative'>
//             <div className="carousel w-full   ">
// <div id='slide1' className='carousel-item rounded-box relative'>
// <div  className="carousel-item">
//     <img src="https://api.lorem.space/image/pizza?w=400&h=300&hash=8B7BCDC2" alt="Pizza" />
//   </div> 
//   <div className="carousel-item">
//     <img src="https://api.lorem.space/image/pizza?w=400&h=300&hash=500B67FB" alt="Pizza" />
//   </div> 
//   <div className="carousel-item">
//     <img src="https://api.lorem.space/image/pizza?w=400&h=300&hash=A89D0DE6" alt="Pizza" />
//   </div> 
//   <div className="carousel-item">
//     <img src="https://api.lorem.space/image/pizza?w=400&h=300&hash=225E6693" alt="Pizza" />
//   </div> 
//   <div className="carousel-item">
//     <img src="https://api.lorem.space/image/pizza?w=400&h=300&hash=9D9539E7" alt="Pizza" />
//   </div> 
//   <div className="carousel-item">
//     <img src="https://api.lorem.space/image/pizza?w=400&h=300&hash=BDC01094" alt="Pizza" />
//   </div> 
//   <div className="carousel-item">
//     <img src="https://api.lorem.space/image/pizza?w=400&h=300&hash=7F5AE56A" alt="Pizza" />
//   </div>
//     <div className="carousel-item">
//     <img src="https://api.lorem.space/image/pizza?w=400&h=300&hash=7F5AE56A" alt="Pizza" />
//   </div>

// </div>
// <div id='slide2' className=' rounded-box relative carousel-item '>
// <div  className="carousel-item">
//     <img src="https://api.lorem.space/image/pizza?w=400&h=300&hash=8B7BCDC2" alt="Pizza" />
//   </div> 
//   <div className="carousel-item">
//     <img src="https://api.lorem.space/image/pizza?w=400&h=300&hash=500B67FB" alt="Pizza" />
//   </div> 
//   <div className="carousel-item">
//     <img src="https://api.lorem.space/image/pizza?w=400&h=300&hash=A89D0DE6" alt="Pizza" />
//   </div> 
//   <div className="carousel-item">
//     <img src="https://api.lorem.space/image/pizza?w=400&h=300&hash=225E6693" alt="Pizza" />
//   </div> 
//   <div className="carousel-item">
//     <img src="https://api.lorem.space/image/pizza?w=400&h=300&hash=9D9539E7" alt="Pizza" />
//   </div> 
//   <div className="carousel-item">
//     <img src="https://api.lorem.space/image/pizza?w=400&h=300&hash=BDC01094" alt="Pizza" />
//   </div> 
//   <div className="carousel-item">
//     <img src="https://api.lorem.space/image/pizza?w=400&h=300&hash=7F5AE56A" alt="Pizza" />
//   </div>
//     <div className="carousel-item">
//     <img src="https://api.lorem.space/image/pizza?w=400&h=300&hash=7F5AE56A" alt="Pizza" />
//   </div>

// </div>

// </div>
// <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
//       <a href="#slide1" className="btn btn-circle">❮</a> 
//       <a href="#slide2" className="btn btn-circle">❯</a>
//     </div>
//         </div>
//     );
// }

// export default LongCarousel;

import React, { useRef, useState , useEffect} from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';

import 'swiper/css/scrollbar';
import 'swiper/css/autoplay';
import Link from "next/link";
// import required modules
import { Autoplay, Pagination, Navigation } from "swiper";
export default function App() {
  const [swiperRef, setSwiperRef] = useState(null);

  let appendNumber = 4;
  let prependNumber = 1;

  const prepend2 = () => {
    swiperRef.prependSlide([
      '<div class="swiper-slide">Slide ' + --prependNumber + "</div>",
      '<div class="swiper-slide">Slide ' + --prependNumber + "</div>",
    ]);
  };

  const prepend = () => {
    swiperRef.prependSlide(
      '<div class="swiper-slide">Slide ' + --prependNumber + "</div>"
    );
  };

  const append = () => {
    swiperRef.appendSlide(
      '<div class="swiper-slide">Slide ' + ++appendNumber + "</div>"
    );
  };

  const append2 = () => {
    swiperRef.appendSlide([
      '<div class="swiper-slide">Slide ' + ++appendNumber + "</div>",
      '<div class="swiper-slide">Slide ' + ++appendNumber + "</div>",
    ]);
  };


  const [data, setData]=useState();


useEffect(()=>{
    async function fetchData() {
      const res = await fetch(
        'https://pranerbangla.com.bd/api/vb1/category-to-post/21'
      );
      const {data} = await res.json();
      setData(data)
    }
    fetchData()
  },[]);
  
  return (
    <>
      <Swiper
                          style={{
                            "--swiper-navigation-color": "red",
                            // "--swiper-navigation-size": "25px",
                          }}
        onSwiper={setSwiperRef}
        slidesPerView={3}
        centeredSlides={false}
        spaceBetween={30}
        navigation={true}
        modules={[Navigation, Autoplay]}
        className="mySwiper"
        autoplay={{
          delay: 2500,
          disableOnInteraction: false,
          pauseOnMouseEnter: true,
        }}
        
    // loop
      >
        {data?.map(items=>{
          return <SwiperSlide><Link href={`categories/9/articles/${items.id}`}><a href=""><div className="w-full h-[20rem] relative flex justify-center  ">
          <div className='absolute w-full h-full bottom-0 bg-gradient-to-t from-black to-transparent '></div>
          <img className="w-full object-cover" src={items.image} alt="" srcset="" />
          <h1 className="absolute bottom-1/2 z-10 text-2xl">{items.title_bn}</h1>
          
          </div></a></Link></SwiperSlide>
        })}

        {/* <SwiperSlide><img src="https://images.pexels.com/photos/167699/pexels-photo-167699.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt="" srcset="" /></SwiperSlide>
        <SwiperSlide><img src="https://images.pexels.com/photos/167699/pexels-photo-167699.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt="" srcset="" /></SwiperSlide>
        <SwiperSlide><img src="https://images.pexels.com/photos/167699/pexels-photo-167699.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt="" srcset="" /></SwiperSlide> */}
      </Swiper>

      {/* <p className="append-buttons">
        <button onClick={() => prepend2()} className="prepend-2-slides">
          Prepend 2 Slides
        </button>
        <button onClick={() => prepend()} className="prepend-slide">
          Prepend Slide
        </button>
        <button onClick={() => append()} className="append-slide">
          Append Slide
        </button>
        <button onClick={() => append2()} className="append-2-slides">
          Append 2 Slides
        </button>
      </p> */}
    </>
  );
}
