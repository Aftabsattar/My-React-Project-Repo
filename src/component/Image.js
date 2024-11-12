import React from 'react'
import imgs from "../Image/style2.png";
import "bootstrap/dist/css/bootstrap.min.css";
function Image() {
  return (
   <>
   <img src={imgs} alt="Shoes Image" style={{borderRadius:"15px", height:"75%",width:"80%" }}/>
   </>
  )
}

export default Image










// ==================
// import React from "react";
// import { Swiper, SwiperSlide } from "swiper/react";
// import style1 from "../Image/style1.webp";
// import style2 from "../Image/style2.png";
// import style3 from "../Image/style3.webp";
// import "bootstrap/dist/css/bootstrap.min.css";
// import "swiper/css";

// function Image() {
//   return (
//     <Swiper  slidesPerView={1} loop={true}>
//       <SwiperSlide><img src={style1} alt="Slide 1" /></SwiperSlide>
//       <SwiperSlide><img src={style2} alt="Slide 2" /></SwiperSlide>
//       <SwiperSlide><img src={style3} alt="Slide 3" /></SwiperSlide>
//     </Swiper>
//   );
// }

// export default Image;
