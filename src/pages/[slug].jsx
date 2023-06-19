import { useRouter } from "next/router";
import {useDispatch, useSelector} from "react-redux";
//import {getCategories, getCategoriesView} from "@/redux/directory_Reducer";
//import {getTopLocations} from "@/redux/page_Reducer";
import React, {useEffect} from "react";
import Head from "next/head";
import HomeSwiper from "../components/HomeSwiper/HomeSwiper"
import BestCities from "../components/BestCities/BestCities"
import About from "../components/About/About"
import Header from "../components/Header/Header"
import Footer from "../components/Footer/Footer"
import { GetStaticPaths } from "next";
import {getTopLocations} from "@/redux/page_Reducer";
import {getCategoriesView} from "@/redux/directory_Reducer";
import s from "../components/SubscribeBlock/SubscribeForm.module.css"
import axios from "axios";

/*type Data = {
    id: number;
    name: string;
    category: {
        id:number;
        title:string;
        seo_title:string;
        seo_description:string;
        seo_image:{
            link:string
        }
        header_1:string;
        header_2:string;
        header_3:string;
        link:string;
        description:string
    };
    description: string;
    cities:{data:[]}

}
type Props = {
    data: Data;
}*/

 const fu = async () => {
     const res = await axios.get(`https://t2sb.rcnwd.com/api/page/links?entity=categories`);
     const params =await res.data.data.map((e)=>{
         return {
            params:{slug:e.link}
         }
     })
        /*const result = {paths:params || []}
     console.log(result)*/
    return {
        paths:params || []
    }

 }

fu()
const DynamicPageFirstStep = ({ data }) => {

    const router = useRouter();
    const categoryLink = router.query;
    const dispatch = useDispatch()
    const getCategoryViewInfo = useSelector(() => getCategoriesView)
    const getLocations = useSelector(() => getTopLocations)
    //const changedCategory = useSelector((state) => state.directory.categoriesView)
    const locations = useSelector((state) => state.page.topLocations)
    const changedCategory = data

    useEffect(() => {
        if(categoryLink.slug){
            dispatch(getCategoryViewInfo(categoryLink.slug))
        }

        if(changedCategory?.category?.id){
            dispatch(getLocations(changedCategory?.category?.id))
        }
    }, [categoryLink,changedCategory?.category?.id])
    return ( <>
        <Head>
            <meta name="title" content={data?.category?.seo_title || "title"}/>
            <meta name="description" content={data?.category?.seo_description || "description"}/>
            {/*<meta property="og:image" content={data?.category?.seo_image?.link}/>*/}
            <link rel="canonical" href={`${categoryLink.slug}`}/>
            <title>Home</title>
        </Head>
        <Header />
        <div className="section">
            <div className="balloning">
                <div className="header_title"
                     style={{backgroundImage:`url(${changedCategory?.category.seo_image?changedCategory.category.seo_image.link:""})`}}>
                    <div className="container">
                        <div className="row">
                            <h1>{changedCategory?.category?.title}</h1>
                            <div className="ht_content">
                                <div className={`${s.header_search} row`}>
                                    <form  action="">
                                        <input type="text" className={s.input_search}
                                               placeholder="Enter city, region or country"/>
                                        <button>Search</button>
                                    </form>

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
                        <h3>{changedCategory?.category?.header_1 || "" }</h3>
                        <BestCities cities={changedCategory?.cities?.data || ""} categoryLink={categoryLink.slug}/>
                    </div>
                </div>
            </div>

            {/* Start top */}
            <div className="container">
                <div className="row best_cities section">
                    <h3>{changedCategory?.category?.header_2}</h3>
                    <HomeSwiper  placesList={locations} categoryLink={changedCategory?.category?.link || ""}/>
                </div>

            </div>
            {/* End top*/}

            <div className="container">
                <About title={changedCategory?.category?.header_3 || ""}  description={changedCategory?.category.description || ""}/>
            </div>
        </main>
        <Footer />
</> );
};


export const getStaticPaths = async () => {
    const res = await axios.get(`https://t2sb.rcnwd.com/api/page/links?entity=categories`);
    const params =await res.data.data.map((e)=>{
        return {
            params:{slug:e.link}
        }
    })

    return {
        paths:params || [],
        fallback:true
    }

};

export const getStaticProps = async ({params}) => {
    const res = await fetch(`https://t2sb.rcnwd.com/api/category/${params?.slug }`);
    const data = await res.json();
    if(data)
    return {
        props: {
            data
        },
    };
};
export default DynamicPageFirstStep;