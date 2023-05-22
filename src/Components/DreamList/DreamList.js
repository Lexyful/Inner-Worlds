import "./DreamList.css";
import DreamCard from "../DreamCard/DreamCard";

import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, EffectCoverflow } from "swiper";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/effect-coverflow";

const DreamList = ({ userID, dreams, deleteDream, updateDream }) => {
    if (!dreams.length) return <h1 className="no-dreams">Nothing logged, get dreamin!</h1>;

    const dreamCards = dreams.map(dream => {
        return <SwiperSlide key={dream.id}>
                    <DreamCard
                        userID={userID}
                        id={dream.id}
                        date={dream.dreamDate} 
                        title={dream.title} 
                        description={dream.description} 
                        emotions={dream.emotions} 
                        tags={dream.tags} 
                        lucidity={dream.lucidity}
                        deleteDream={deleteDream}
                        updateDream={updateDream}
                    />
                </SwiperSlide>
    });
    
    return (
        <>
            <Swiper
                effect="coverflow"
                slidesPerView={3}
                spaceBetween={30}
                centeredSlides={true}
                navigation={true}
                coverflowEffect={{
                    rotate: 50,
                    stretch: 0,
                    depth: 200,
                    modifier: 1,
                    slideShadows: true,
                }}
                breakpoints={{
                    1000: { slidesPerView: 3 },
                    600: { slidesPerView: 2 },
                    1: { slidesPerView: 1 }
                }}
                modules={[ Navigation, EffectCoverflow ]}
                className="mySwiper"
            >
                {dreamCards}
            </Swiper>
        </>
    )
}

export default DreamList;