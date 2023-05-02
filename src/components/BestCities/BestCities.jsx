import React from "react";
import Link from "next/link";



const BestCities = ({cities,categoryLink}) => {

if(cities?.length ===0){
    return <div></div>
} else
    return <div className="container">

            <div className="myBestCities row">
                <ul>
                    {cities && cities?.map(city =>
                            <li key={city.id}>
                                <Link href={`/${categoryLink ?? ""}/${city.link}`}>{city.name}</Link>
                            </li>
                        )}
                </ul>
            </div>
    </div>






}
export default BestCities