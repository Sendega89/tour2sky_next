import React, {useState} from "react";
import itemImage from "../../../images/itemImage.jpg"
import BookmarkBorderIcon from "@mui/icons-material/BookmarkBorder";
import BookmarkIcon from "@mui/icons-material/Bookmark";
import s from "./ProductCards.module.css"
import RatingTour from "../Rating/RatingTour";
import Link from "next/link";
import {Checkbox} from "@mui/material";
import Image from "next/image";

type CardProps = {
        key: string,
        img?: {data:[{
                id: number,
                name: string,
                mime_type: string,
                link: string,
                thumb:string
            }]}
        name: string,
        price: number,
        duration: number,
        description: string
        rating: number,
        link: string,
        id: string,
        isAuth: boolean,
        /*popularCard: boolean,*/
        categoryLink: string,
        cityLink: string,
        booking_link: string

}
const ProductCard = (props:any) => {

        const [checked, setChecked] = useState(true);
        const handleChange = () => {
            /*if (props.isAuth) {
                setChecked(event.target?.checked);
            }*/
        }


            return <div className="cat_item">
                <div className="cat_item_vn row">
                    <div className="cat_item_img">
                            <Link style={{minWidth:"100%"}}
                                  href={`/${props.categoryLink}/${props.cityLink}/${props.link}`}>
                                <Image layout={"fill"} src={props.img?.data[0]?.link ? props.img?.data[0]?.link : itemImage}
                                     alt={`${props?.name || "name"}`}/>
                            </Link>
                            {/*<Link href={`${props?.link}`}>
                                <Image src={props?.img?.data[0] ? props?.img?.data[0] : itemImage}
                                     alt={`${props?.name || "name"}`}/>
                            </Link>*/}

                    </div>
                    <div className="cat_item_center">
                        <div className="cat_item_title row">
                            <div className="cat_item_title_checkbox">
                                <Checkbox className={s.bookmark} checked={checked}
                                          sx={{'& .MuiSvgIcon-root': {fontSize: 28}}}
                                          onChange={handleChange}
                                          inputProps={{'aria-label': 'controlled'}}
                                          icon={<BookmarkBorderIcon/>}
                                          checkedIcon={<BookmarkIcon/>}/>
                            </div>
                            <div className="cat_item_title_title">
                                <Link href={`/${props.categoryLink}/${props.cityLink}/${props.link}`}>
                                    {props?.name || ""}</Link>
                                {/*{props?.popularCard ?
                                    <Link href={`/${props.categoryLink}/${props.cityLink}/${props.link}`}>
                                        {props?.name || ""}</Link>
                                    :
                                    <Link href={`${props.link}`}>
                                        {props?.name || ""}</Link>}*/}
                            </div>

                        </div>
                        <div className="cat_item_price">
                            <div className="item_price">
                                <span>from</span> ${props.price != null ? props.price : "???"}
                            </div>
                            <div className="rating-container">
                                <RatingTour rating={props.rating}/>
                                <div className="item_date">
                                    <i>{/*<FontAwesomeIcon icon={faClockFour}/>*/}</i>
                                    <span>{props?.duration || "30"} minutes</span>
                                </div>
                            </div>
                        </div>
                        <div className="cat_item_desk">
                            {props?.description ||
                                "This is short tour description, can be few rows of text"}
                        </div>
                    </div>
                    <div className="cat_item_details">
                        <Link href={`${props?.booking_link}`}>Buy</Link>
                    </div>
                </div>
            </div>

    };
export default ProductCard