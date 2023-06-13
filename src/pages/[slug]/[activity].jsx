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
import axios from "axios";

import FilterByPrice from "../../components/FiltersForCatalog/FilterByPrice/FilterByPrice";
import {getFilteredCatalog} from "../../redux/productCards_Reducer";
import Header from "../../components/Header/Header";
import Footer from "../../components/Footer/Footer";
import FilterByLength from "../../components/FiltersForCatalog/FilterByLength/FilterByLength";
import FilterByRatingCatalog from "../../components/FiltersForCatalog/FilterByRatingCatalog/FilterByRatingCatalog";
import PaginatorContainer from "../../components/PaginatorContainer/PaginatorContainer";
import {getCategoriesView} from "../../redux/directory_Reducer";


const Activity = ({data}) => {

    const activityLocation = data
    const dispatch = useDispatch();
    const router = useRouter();
    const { slug, activity } = router.query;
    const productCards = useSelector((state) => state.productCards);
    const pagination = useSelector((state) => state.productCards.pagination);
    //const isFavoriteItem = useSelector((state) => state.myAccount.isFavoriteItem);
    const getPopularCities = useSelector(() => getPopular_city);
    const filterCatalog = useSelector(() => getFilteredCatalog);
    const popularCities = useSelector((state) => state.location.popular_city.data);
    const [page, setPage] = useState(pagination.current_page || 1);
    const [minPrice, setMinPrice] = useState(0);
    const [maxPrice, setMaxPrice] = useState(100);
    const [minTime, setMinTime] = useState(0);
    const [maxTime, setMaxTime] = useState(100);
    const [sort, setSort] = useState("")
    const [rating, setRating] = useState([]);
    const getCategoryViewInfo = useSelector(() => getCategoriesView)
    const categoryLink = router.query;
    const changedCategory = useSelector((state) => state.directory.categoriesView.category?.seo_image?.link)

    const changeSelect = (e) => {
        setSort(e.target.value)
    }
    const changeCheckBox = (e) => {
        let newArray = [...rating, +e?.target.id];
        if (rating.includes(+e?.target?.id)) {
            newArray = newArray.filter(day => day !== +e.target.id);
        }
        setRating(
            newArray
        );
    }
    useEffect(() => {
        dispatch(getCategoryViewInfo(categoryLink.slug))
        //dispatch(activityInLocation(categoryLink, currentCity))
        if (activityLocation?.category_id && activityLocation?.region_id) {
            dispatch(getPopularCities(
                activityLocation.category_id,
                activityLocation.region_id
            ))
        }
        dispatch(filterCatalog({
            categoryLink: slug || ""
            , currentCity: activity || ""
            , activityLocationLink: activityLocation?.link,
            sort, rating, page,
        }))
    }, [sort, rating, activity, activityLocation, data,page])

    return (<>
        <Head>
            <meta name="title" content={data?.seo_title}/>
            <meta name="description" content={data?.seo_description}/>
            {/*<meta property="og:image" content={data?.seo_image?.link}/>*/}
            <link rel="canonical" href={`${slug}`}/>
        </Head>
        <Header/>
        <div className="catalog">
            <div className="header_title"
                 style={{backgroundImage: `url(${activityLocation?.seo_image ? activityLocation?.seo_image.link : changedCategory ? changedCategory : ""})`}}>
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
                        <Link href={`/${slug}`}>{activityLocation?.category_name}</Link>
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
                            <div className="credit_block container">
                                <Link href="/" className="cancelComment" title="">
                                    {/*<FontAwesomeIcon icon="fa-solid fa-times"/>*/}</Link>
                                <FilterByPrice activityLocation={activityLocation} maxTime={maxTime} minTime={minTime}
                                               sort={sort} rating={rating} page={page} minPrice={minPrice}
                                               maxPrice={maxPrice}
                                               setMaxPrice={setMaxPrice} setMinPrice={setMinPrice}/>
                                <FilterByLength activityLocation={activityLocation} minTime={minTime}
                                                setMinTime={setMinTime}
                                                sort={sort} rating={rating} page={page} setMaxTime={setMaxTime}
                                                maxPrice={maxPrice} maxTime={maxTime}
                                                minPrice={minPrice}/>
                                <FilterByRatingCatalog changeCheckBox={changeCheckBox} />
                                <div className="row wighet">
                                    <h4>Top cities</h4>
                                    <div className="row wighet_row">
                                        <div className="filter_links">
                                            <ul>
                                                {popularCities?.map((popCity) =>
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
                            <h4>{productCards?.data?.length} tours found</h4>
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
                            {productCards?.data.map((card) => <ProductCard
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
                            {/*{data?.services?.data.map((card: any) => <ProductCard
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
                            />)}*/}
                        </div>
                        <div className="row">
                            <PaginatorContainer totalItemCount={pagination.total}
                                                pageSize={pagination.count}
                                                currentPage={page}
                                                totalPages={pagination.total_pages}
                                                links={pagination.links}
                                                setPage={setPage}/>

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
        <Footer/>
    </>);
};

export const getStaticPaths = async () => {

    return {
        paths: [
            {params: {slug: "helicopter", activity: "sedona"},},
            {params: {slug: "hot-air-balloon-rides", activity: "sedona"}},
        ],
        fallback: true,
    };
};
export const getStaticProps = async ({params}) => {
    const res = await axios.get(`https://t2sb.rcnwd.com/api/page/activity-location/special-link/${params?.slug}-${params?.activity}`);
    const data = await res.data;
    return {
        props: {
            data
        },
    };
};
export default Activity;