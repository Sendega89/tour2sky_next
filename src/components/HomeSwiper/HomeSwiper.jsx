import React from 'react';
import {FreeMode, Pagination} from "swiper";
import {Swiper, SwiperSlide} from "swiper/react";
import s from "./HomeSwiper.module.css";
import "swiper/css";
import "swiper/css/pagination";
import Link from "next/link";
import Image from "next/image";


const HomeSwiper = ({placesList,categoryLink}) => {
    return (
        <div className={s.the_best}>
                {placesList &&
                <Swiper slidesPerGroup={20}
                    slidesPerView={4}
                    loop={false}
                    spaceBetween={29}
                    freeMode={false}
                    pagination={{
                        clickable: true,
                    }}
                    modules={[FreeMode, Pagination]}
                    className="row"
                >{placesList?.map(p =><div key={p.id}>
                {p?.seo_image?.link ?

                    <SwiperSlide key={p.id}>
                        <div key={p.id} className={`item ${s.the_bestItem}`}
                             >
                            <Link href={`/${categoryLink || ""
                            }/${p.link || ""}`}>
                                {p?.seo_image?.link ? <div style={{position: 'relative', width:'100%',height:"196px"}}>
                                <Image layout="fill"
                                       src={p?.seo_image?.link || ""}
                                     alt={p?.name ||"activity"}/>
                                <span>{p?.name || ""}</span>
                                    </div>
                                    :
                                <span style={{color:"black"}}>No image</span>}
                            </Link>
                        </div>
                    </SwiperSlide>:
                    <SwiperSlide key={p.id}>
                        <div className={s.noImageItem} key={p.id}>
                               <div className={s.noImageItemImage}>No Image</div>
                               <div> <Link href={`/${categoryLink ?? ""
                               }/${p?.link}`}>{p.name  || "Name"}</Link></div>
                        </div>
                    </SwiperSlide>
                }</div>
                    )}
                </Swiper>}
        </div>
    );
};

export default HomeSwiper;