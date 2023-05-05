/*
import React, {useEffect} from "react";


import s from "./Ballooning.module.css"
import {useParams} from "react-router";
import {useDispatch, useSelector} from "react-redux";
import {getCategoriesView} from "../../redux/directory_Reducer";

import {getTopLocations} from "../../redux/page_Reducer";
import About from "../About/About";




const Ballooning = () => {
    let params = useParams();
    const categoryLink = params.currentLink;
    const dispatch = useDispatch()
    const getCategoryViewInfo = useSelector(() => getCategoriesView)
    const getLocations = useSelector(() => getTopLocations)
    const changedCategory = useSelector((state) => state.directory.categoriesView)
    const locations = useSelector((state) => state.page.topLocations)

    useEffect(() => {
        dispatch(getCategoryViewInfo(categoryLink))
        if(changedCategory?.category?.id){
            dispatch(getLocations(changedCategory?.category?.id))
        }
    }, [categoryLink,dispatch,changedCategory?.category?.id])

    return <>
        <Helmet>
            <meta name="title" content={changedCategory?.category?.seo_title}/>
            <meta name="description" content={changedCategory?.category?.seo_description}/>
            <meta property="og:image" content={changedCategory?.category?.seo_image?.link}/>
            <link rel="canonical" href={`${categoryLink}`}/>
        </Helmet>
        <div className="section">
            <div className="balloning">
                <div className="header_title"
                     style={{backgroundImage:`url(${changedCategory.category.seo_image?changedCategory.category.seo_image.link:""})`}}>
                    <div className="container">
                        <div className="row">
                            <h1>{changedCategory?.category?.title}</h1>
                            <div className="ht_content">
                                <div className={`${s.searchContainer} "row header_search"`}>
                                    <input type="text" className="input_search"
                                           placeholder="Enter city, region or country"/>
                                    <button>Search</button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <main>
            <div className="container">
                <div className="row">
                    <div className="row best_cities section ">
                        <h3>{changedCategory?.category?.header_1 }</h3>
                        <BestCities cities={changedCategory.cities?.data} categoryLink={categoryLink}/>
                    </div>
                </div>
            </div>

            {/!* Start top *!/}
            <div className="container">
                <div className="row best_cities section">
                    <h3>{changedCategory?.category?.header_2}</h3>
                    <HomeSwiper  placesList={locations} categoryLink={changedCategory.category?.link}/>
                </div>

            </div>
            {/!* End top*!/}

            <div className="container">
            <About title={changedCategory?.category?.header_3}  description={changedCategory.category.description}/>
            </div>
        </main>
    </>
}
export default Ballooning*/
