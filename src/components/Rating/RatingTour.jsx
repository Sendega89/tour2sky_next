/*import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";*/
import React from "react";
import {Rating} from "@mui/material";


const RatingTour = (props) => {
    return    <div className="rating">
        <Rating size={'small'}
                readOnly
                defaultValue={2.5}
                value={props.rating}
                precision={0.2}
                icon={<i>+</i>}
                emptyIcon={<i>-</i>}/>

    </div>
}
export default RatingTour