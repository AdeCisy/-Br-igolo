import React, { useEffect, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import RecommandationCard from "./recoCard";

import "swiper/css";
import "swiper/css/pagination";
import styles from "./style/slider.module.css";

function Slider() {
  const [dataToMap, setDataToMap] = useState([]);

  useEffect(() => {
    fetch("products.json")
      .then((response) => response.json())
      .then((json) => { 
        setDataToMap(json.products);
      });
  }, []);

  
  return (
    <div className={styles.sliderContainer}>
      <div className={styles.title}>Ces articles peuvent vous intéresser !</div>
      <Swiper
        slidesPerView={3}
        spaceBetween={160} 
        loop={true} 
        pagination={{ 
          clickable: true, 
        }}
        className={styles.slider}
      >
        {dataToMap.length  && dataToMap.slice(1, 7).map((elt) => (
          <SwiperSlide className={styles.slide} key={elt.id}>
            <RecommandationCard produit={elt} key={elt.id} />
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
}

export default Slider;
