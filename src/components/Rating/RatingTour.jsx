import React from "react";
import {Rating} from "@mui/material";


const RatingTour = (props) => {
    return    <div className="rating">
        <Rating size={'small'}
                sx={{color:"#2980B9"}}
                readOnly
                defaultValue={2.5}
                value={props.rating || 5}
                precision={0.2}
                /*icon={<i>+</i>}*/
                emptyIcon={<i>-</i>}/>

    </div>
}
export default RatingTour