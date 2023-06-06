import React,{useState}  from 'react';
import Slider from "rc-slider";
import {useDispatch, useSelector} from "react-redux";
import {getFilteredCatalog} from "../../../redux/productCards_Reducer";
import s from "./FilterByPrice.module.css"
import 'rc-slider/assets/index.css';
const FilterByPrice = ({activityLocation, sort, rating, page,maxTime, minTime,minPrice,maxPrice,setMinPrice,setMaxPrice}) => {
    const dispatch = useDispatch();
    const filterCatalog = useSelector(() => getFilteredCatalog);
    return (
        <div className={s.filterByPriceContainer}>
            <h4>Filter by price</h4>
            <div >
                <Slider range enableReinitialize
                        onAfterChange={(value) => {

                            setMaxPrice(value[1] || 1);
                            setMinPrice(value[0]);
                            dispatch(filterCatalog({
                                categoryLink:activityLocation?.category_link || ""
                                , currentCity:activityLocation?.city_link || "",
                                maxPrice: value[1], minPrice: value[0],
                                maxTime, minTime,
                                sort, rating, page
                            }))
                        }}
                        onChange={(value) => {
                            setMaxPrice(value[1]);
                            setMinPrice(value[0]);
                        }}
                        step={10}
                        trackStyle={{
                            backgroundImage: "linear-gradient(272deg,#3cc,#2980b9)",
                            padding: "3px",
                        }}
                        dotStyle={{
                            backgroundColor: "#ffffff",
                            cursor: "pointer",
                        }}
                        handleStyle={{
                            position: "absolute",
                            width: "16px",
                            height: "16px",
                            boxShadow: " 0 3px 4px 0 rgba(10, 31, 68, 0.1), 0 0 1px 0 rgba(10, 31, 68, 0.08)",
                            backgroundColor: "white",
                            backgroundImage: "white",
                            cursor: "pointer",
                        }}
                        min={0}
                        max={1000}
                        defaultValue={[minPrice || 0, maxPrice || 1000]}/>
                <div className={s.infoSliderPanel}>
                    <div className={s.info_L}>$ {minPrice || 0}</div>
                    <div className={s.info_R}>$ {maxPrice || 1000}</div>
                </div>
            </div>

        </div>
    );
};

export default FilterByPrice;