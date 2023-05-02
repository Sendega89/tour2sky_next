import { useRouter } from "next/router";
import {useDispatch, useSelector} from "react-redux";
import {getCategories, getCategoriesView} from "@/redux/directory_Reducer";
import {getTopLocations} from "@/redux/page_Reducer";
import React, {useEffect} from "react";
import Head from "next/head";
import HomeSwiper from "../components/HomeSwiper/HomeSwiper"
import BestCities from "../components/BestCities/BestCities"
import About from "../components/About/About"
import {categoriesAPI} from "@/pages/api/api";
import axios from "axios";
 import { GetStaticPaths, GetStaticProps } from "next";


type Data = {
    id: number;
    name: string;
    category: string;
    description: string;
}

type Props = {
    data: Data[];
}

const DynamicPageFirstStep = ({ data }: Props) => {


    const router = useRouter();
    const { slug } = router.query;
    const categoryLink = router.query;
    const dispatch = useDispatch()
    const getCategoryViewInfo = useSelector(() => getCategoriesView)

    const getLocations = useSelector(() => getTopLocations)
    //const changedCategory = useSelector((state) => state.directory.categoriesView)
    const locations = useSelector((state) => state.page.topLocations)
    const changedCategory:Data = data
    useEffect(() => {
        /*if(categoryLink.slug){
            dispatch(getCategoryViewInfo(categoryLink.slug))
        }*/

        if(changedCategory?.category?.id){
            dispatch(getLocations(changedCategory?.category?.id))
        }
    }, [categoryLink,changedCategory?.category?.id])
    return ( <>
        <Head>
            <meta name="title" content={changedCategory?.category?.seo_title}/>
            <meta name="description" content={changedCategory?.category?.seo_description}/>
            <meta property="og:image" content={changedCategory?.category?.seo_image?.link}/>
            <link rel="canonical" href={`${categoryLink.slug}`}/>
        </Head>
        <div className="section">
            <div className="balloning">
                <div className="header_title"
                     style={{backgroundImage:`url(${changedCategory.category.seo_image?changedCategory.category.seo_image.link:""})`}}>
                    <div className="container">
                        <div className="row">
                            <h1>{changedCategory?.category?.title}</h1>
                            <div className="ht_content">
                                <div className={`"row header_search"`}>
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
                        <BestCities cities={changedCategory.cities?.data} categoryLink={categoryLink.slug}/>
                    </div>
                </div>
            </div>

            {/* Start top */}
            <div className="container">
                <div className="row best_cities section">
                    <h3>{changedCategory?.category?.header_2}</h3>
                    <HomeSwiper  placesList={locations} categoryLink={changedCategory.category?.link}/>
                </div>

            </div>
            {/* End top*/}

            <div className="container">
                <About title={changedCategory?.category?.header_3}  description={changedCategory.category.description}/>
            </div>
        </main>
</> );
};
export const getStaticPaths: GetStaticPaths = async () => {

    return {
        paths: [
            { params: { slug: "helicopter" } },
        ],
        fallback: true,
    };
};

export const getStaticProps: GetStaticProps<Props> = async () => {
    const res = await fetch("https://t2sb.rcnwd.com/api/category/helicopter");
    const data = await res.json();
    return {
        props: {
            data,
        },
    };
};
export default DynamicPageFirstStep;