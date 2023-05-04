import React, {useRef, useState} from 'react';
import Slider from 'react-slick';
import "./slickStyle.module.css"
import Image from "next/image";
import Link from "next/link";


export default function SlickSlider({images}) {

    const [nav1, setNav1] = useState("");
    const [nav2, setNav2] = useState("");
    const sliderRef = useRef()
    let imagesToShow
    if(images.length === 1){
        imagesToShow=1
    }else if (images.length === 2){
        imagesToShow=2
    } else {
        imagesToShow=3
    }

    return (
        <div>
            <Slider asNavFor={nav2} arrows={false} ref={(slider1) => setNav1(slider1)} className="slider-for">
                {images.map(img=>
                    <div key={img.id}>
                    <Link target={"_blank"} href={`${img.link}`} style={{width:"100%"}}>
                        <Image layout="fill" alt={"product"} src={img.link} /></Link>
                </div>)}
            </Slider>

            <div className="row slideNavBlock">
                {images.length >3 &&
                <div className="slickArrow slickLeft slick-arrow angle_left"
                     onClick={() => sliderRef.current.slickPrev()}>
                    {/*<FontAwesomeIcon icon="fa-solid fa-chevron-left"/>*/}
                </div>}

                <Slider arrows={false} ref={sliderRef}
                        asNavFor={nav1}
                        /*ref={(slider2) => {
                            setNav2(slider2);
                        }}*/
                        slidesToShow={imagesToShow}
                        swipeToSlide={true}
                        focusOnSelect={true}
                        className="slideNavCarousel slick-list draggable">
                    {images.map(img=>
                        <div key={img.id} className="slick-slide slickSlideItem" >
                            <Image layout="fill" src={img?.link} alt={"serviceImage"} />
                        </div>)}
                </Slider>
                {images?.length >3 &&
                    <div className="slickArrow slickRight angle_right slick-arrow"
                     onClick={() => sliderRef.current.slickNext()}>
                    {/*<FontAwesomeIcon icon="fa-solid fa-chevron-right"/>*/}
                </div>}
            </div>
        </div>
    );
}