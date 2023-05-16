import React, {useEffect, useState} from 'react';
import {GetStaticPaths, GetStaticProps} from "next";
import Head from "next/head";
import {useDispatch, useSelector} from "react-redux";
import {useRouter} from "next/router";
import s from "./Catalog.module.css";
import {getPopular_city} from "@/redux/location_Reducer";
import Slider from "rc-slider";
import Link from "next/link";
import ProductCard from "../../components/ProductCard/ProductCard";
import Header from "@/components/Header/Header";
import Footer from "@/components/Footer/Footer";

type Data = {
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
    services:{data:[]},
    category_id:string,
    region_id:string,
    seo_title:string,

}
type Props = {
    data: Data;
}


const Activity = ({data}:any) => {
    let activityLocation = data
    const dispatch = useDispatch();
    const router = useRouter();
    const { currentLink, currentCity } = router.query;
    const [minTime, setMinTime] = useState(14);
    const [maxTime, setMaxTime] = useState(100);

    //const productCards = useSelector((state) => state.productCards);
   // const pagination = useSelector((state) => state.productCards.pagination);
   // const isAuth = useSelector((state:any) => state.profilePage.isAuth);
   // const isFavoriteItem = useSelector((state) => state.myAccount.isFavoriteItem);
    const getPopularCities = useSelector(() => getPopular_city);
    //const activityInLocation = useSelector(() => getActivityLocationSpecialLink);
    //const filterCatalog = useSelector(() => getFilteredCatalog);
    //const activityLocation = useSelector((state) => state.activityLocation.activityLocationView);
   // const activityLocationServices = useSelector((state) => state.activityLocation.activityLocationViewServices);
   const popularCities = useSelector((state:any) => state.location.popular_city.data);
    //const [page, setPage] = useState(pagination.current_page || 1);
    const [minPrice, setMinPrice] = useState(undefined);
    const [maxPrice, setMaxPrice] = useState(undefined);
   // const [minTime, setMinTime] = useState(productCards.meta?.filters?.duration.min);
   // const [maxTime, setMaxTime] = useState(productCards.meta?.filters?.duration.max);
    const [sort, setSort] = useState("")
    const [rating, setRating] = useState([]);



    const changeSelect = (e:any) => {
        setSort(e.target.value)
    }
    const changeCheckBox = (e:any) => {
        /*let newArray = [...rating, +e?.target.id];
        if (rating.includes(+e?.target?.id)) {
            newArray = newArray.filter(day => day !== +e.target.id);
        }*/
        /*setRating(
            newArray
        );*/
    }
    useEffect(() => {
        //dispatch(activityInLocation(categoryLink, currentCity))
        if (activityLocation?.category_id && activityLocation?.region_id) {
            dispatch(getPopularCities(
                activityLocation.category_id,
                activityLocation.region_id
            ))
        }
        /*dispatch(filterCatalog({
            categoryLink, currentCity,activityLocationLink:activityLocation?.link,
            sort, rating, page,
        }))*/
    }, [sort,rating,currentCity,activityLocation,data])

    return (<>
        <Head>
            <meta name="title" content={activityLocation?.seo_title}/>
            <meta name="description" content={activityLocation?.seo_description}/>
            <meta property="og:image" content={activityLocation?.seo_image?.link}/>
            <link rel="canonical" href={`${currentLink}`}/>
        </Head>
        <Header />
        <div className="catalog">
            <div className="header_title"
                 style={{backgroundImage: `url(${activityLocation?.seo_image ? activityLocation?.seo_image.link :"" })`}}>
                <div className="container">
                    <div className="row">
                        <h1>{activityLocation?.name}</h1>
                        <p>{activityLocation?.title}</p>
                    </div>
                </div>
            </div>
            <div className="catalog_item row wighet">
                <div className="container">
                    {/*breadcrumbs*/}
                    <div className="row breadcrumbs">
                        <Link href="/">Home</Link>
                        <Link href={`/${currentLink}`}>{activityLocation?.category_name}</Link>
                        <span>{activityLocation?.city_name}</span>
                    </div>
                    {/* breadcrumbs*/}
                    {/*Sidebar*/}
                    <div className="sidebar">
                        <Link className="pp-credit-block-button" href="/">
                            <svg className="button-icon fill-secondary"
                                 width="17"
                                 height="17"
                                 aria-hidden="true"
                                 role="img"
                                 viewBox="0 0 24 24">
                                <path
                                    d="M9.6 5.2c-.4-1.3-1.7-2-3-1.6-.8.2-1.5.9-1.7 1.6H3v1.5h1.9C5.3 8.1 6.7 8.8 8 8.4c.8-.2 1.4-.9 1.7-1.7H21V5.2H9.6zM12 15.5c-1.1 0-2 .7-2.4 1.8H3v1.5h6.7c.4 1.3 1.8 2.1 3.1 1.7.8-.2 1.4-.9 1.7-1.7H21v-1.5h-6.6c-.3-1.1-1.3-1.8-2.4-1.8zM16.8 9.5c-1.1 0-2 .7-2.4 1.8H3v1.5h11.4c.4 1.3 1.8 2.1 3.1 1.7.8-.2 1.4-.9 1.7-1.7H21v-1.5h-1.9c-.3-1.1-1.3-1.8-2.3-1.8z"/>
                            </svg>
                            Filter</Link>
                        {/*<SearchFilter/>*/}
                        <div className="popup-credit">
                            <div className="credit_block ">
                                <Link href="/" className="cancelComment" title="">
                                    {/*<FontAwesomeIcon icon="fa-solid fa-times"/>*/}</Link>
                                <div className="row wighet">
                                    <h4>Filter by price</h4>
                                    <div className="row wighet_row">
                                        <Slider range
                                                /*onAfterChange={(value) => {
                                                    setMaxPrice(value[1]);
                                                    setMinPrice(value[0]);
                                                    /!*dispatch(filterCatalog({
                                                        currentLink, currentCity,
                                                        maxPrice: value[1], minPrice: value[0],
                                                        maxTime, minTime,
                                                        sort, rating, page
                                                    }))*!/
                                                }}*/
                                                onChange={(value:any) => {
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
                                <div className="row wighet">
                                    <h4>Flight length</h4>
                                    <div className="row wighet_row">
                                        <Slider range
                                                onChange={(value:any) => {
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
                                                    backgroundImage: "none",
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
                                                min={minTime}
                                                max={maxTime}
                                                defaultValue={[ 10, 200]}
                                               /* onAfterChange={(value:any) => {
                                                    //setMaxTime(value[1]);
                                                    //setMinTime(value[0]);
                                                    /!*dispatch(filterCatalog({
                                                        categoryLink, currentCity,
                                                        maxTime: value[1], minTime: value[0],
                                                        maxPrice, minPrice,
                                                        sort, rating, page
                                                    }))*!/
                                                }}*/

                                        />
                                        <div className={s.infoSliderPanel}>
                                            {/*<div className={s.info_L}>{minTime || 0} min</div>
                                            <div className={s.info_R}>{maxTime || 300} max</div>*/}
                                            <div className={s.info_L}>{ 0} min</div>
                                            <div className={s.info_R}>{ 300} max</div>
                                        </div>
                                    </div>
                                </div>
                                <div className="row wighet">
                                    <h4>Filter by Rating</h4>
                                    <div className="row wighet_row">
                                        <div className="row checkbox_row">
                                            <div className="row checkbox_item">
                                                <label className="custom-big-checkbox">
                                                    <input type="checkbox" id="5" value={5}
                                                           className="align-self-center" onChange={changeCheckBox}
                                                    />
                                                    <span className="custom-big-checkbox__checkbox">
                                                </span>
                                                </label>
                                                <span className="labeltext">5 star</span>
                                            </div>
                                            <div className="row checkbox_item">
                                                <label className="custom-big-checkbox">
                                                    <input type="checkbox" id="4" value={4}
                                                           className="align-self-center" onChange={changeCheckBox}/>
                                                    <span className="custom-big-checkbox__checkbox">
                                                </span>
                                                </label>
                                                <span className="labeltext">4 star</span>
                                            </div>
                                            <div className="row checkbox_item">
                                                <label className="custom-big-checkbox">
                                                    <input type="checkbox" name="3" id="3" value={3}
                                                           className="align-self-center" onChange={changeCheckBox}/>
                                                    <span className="custom-big-checkbox__checkbox">
                                            </span>
                                                </label>
                                                <span className="labeltext">3 star</span>
                                            </div>
                                            <div className="row checkbox_item">
                                                <label className="custom-big-checkbox">
                                                    <input type="checkbox" id="2" value={2}
                                                           className="align-self-center" onChange={changeCheckBox}/>
                                                    <span className="custom-big-checkbox__checkbox">
                                            </span>
                                                </label>
                                                <span className="labeltext">2 star</span>
                                            </div>
                                            <div className="row checkbox_item">
                                                <label className="custom-big-checkbox">
                                                    <input type="checkbox" id="1" value={1}
                                                           className="align-self-center" onChange={changeCheckBox}/>
                                                    <span className="custom-big-checkbox__checkbox">
                                            </span>
                                                </label>
                                                <span className="labeltext">1 star</span>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="row wighet">
                                    <h4>Top cities</h4>
                                    <div className="row wighet_row">
                                        <div className="filter_links">
                                            <ul>
                                                {popularCities?.map((popCity:any) =>
                                                    <li key={popCity?.id}>
                                                        <Link className={`${+popCity.id && "active"}`}
                                                                 href={`/${activityLocation?.category_link}/${popCity.link}`}>
                                                            {popCity?.name}</Link></li>)}
                                            </ul>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                    </div>
                    <div className="catalog_r">
                        <div className="row cat_top">
                            {/*<h4>{productCards?.data?.length} tours found</h4>*/}
                            <h4> tours found</h4>
                            <div className="short">
                                <select onChange={changeSelect}>
                                    <option value="price_asc">Price from low to high</option>
                                    <option value="price_desc">Price from high to low</option>
                                    <option value="rating_asc">Rating from low to high</option>
                                    <option value="rating_desc">Rating from high to low</option>
                                    <option value="popular_asc">Popular from low to high</option>
                                    <option value="popular_desc">Popular from high to low</option>
                                    <option value="name_asc">Name А / Z</option>
                                    <option value="name_desc">Name Z / А</option>
                                </select>
                            </div>
                        </div>
                        <div className="row row-15">
                            {data?.services?.data.map((card:any )=> <ProductCard
                                key={card.id}
                                description={card.description}
                                id={card.id}
                                categoryLink={data?.category_link}
                                link={card.link}
                                cityLink={data?.city_link}
                                name={card.name}
                                booking_link={card.booking_link}
                                rating={card.rating}
                                price={card.price}
                                duration={card.duration}
                                img={card.images}
                            />)}
                        </div>
                        <div className="row">
                           {/* <PaginatorContainer totalItemCount={pagination.total}
                                                pageSize={pagination.count}
                                                currentPage={pagination.current_page}
                                                totalPages={pagination.total_pages}
                                                links={pagination.links}
                                                setPage={setPage}/>*/}

                        </div>
                        <div className="row container">
                            <article className={`row ${s.cat_text}`}
                                     dangerouslySetInnerHTML={{__html: activityLocation?.description}}>
                            </article>
                        </div>
                    </div>

                </div>
            </div>
        </div>
        <Footer />
</>);
};


export const getStaticPaths: GetStaticPaths = async () => {

    return {
        paths: [
            { params: { slug: "helicopter", activity:"sedona"}, },
            { params: { slug: "hot-air-balloon-rides", activity:"sedona" } },
        ],
        fallback: true,
    };
};
export const getStaticProps:GetStaticProps = async ({params}) => {
    const res = await fetch(`https://t2sb.rcnwd.com/api/page/activity-location/special-link/${params?.slug}-${params?.activity}`);
    const data =await res.json();
    return {
        props: {
            data
        },
    };
};
    export default Activity;