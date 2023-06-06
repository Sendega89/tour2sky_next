import React from 'react';
import Slider from "rc-slider";
import s from "./FilterByLength.module.css";
import {useDispatch, useSelector} from "react-redux";
import {getFilteredCatalog} from "../../../redux/productCards_Reducer";
import 'rc-slider/assets/index.css';
const FilterByLength = ({activityLocation, maxTime, minTime,setMinTime, setMaxTime,
                            sort, rating, page, maxPrice, minPrice}) => {
    const dispatch = useDispatch();
    const filterCatalog = useSelector(() => getFilteredCatalog);

    return (
        <div className={s.filterByLengthContainer}>
            <h4>Flight length</h4>
            <div>
                <Slider range enableReinitialize
                        onChange={(value) => {
                            setMaxTime(value[1]);
                            setMinTime(value[0]);
                        }}
                        step={1}
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
                        max={500}
                        defaultValue={[minTime || 10, maxTime || 500]}
                        onAfterChange={(value) => {
                            setMaxTime(value[1]);
                            setMinTime(value[0]);
                            dispatch(filterCatalog({
                                categoryLink:activityLocation?.category_link || ""
                                , currentCity:activityLocation?.city_link || "",
                                maxTime: value[1], minTime: value[0],
                                maxPrice, minPrice,
                                sort, rating, page
                            }))
                        }}

                />
                <div className={s.infoSliderPanel}>
                    <div className={s.info_L}>{minTime} min</div>
                    <div className={s.info_R}>{maxTime} max</div>
                </div>
            </div>
        </div>
    );
};

export default FilterByLength;