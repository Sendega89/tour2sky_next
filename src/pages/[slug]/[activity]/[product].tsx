import React from 'react';
import {GetStaticPaths, GetStaticProps} from "next";
import Link from "next/link";
import RatingTour from "@/components/Rating/RatingTour";
import SlickSlider from "../../../components/SlickSlider/SlickSlider"
//import BestCities from "@/components/BestCities/BestCities";
import ProductAccordion from "@/components/ProductAccordion/ProductAccordion";
import {useRouter} from "next/router";
import image from "../../../../images/product.jpg"
import Head from "next/head";


const Product = ({data}:any) => {
    const router = useRouter();

    const productItemView = data?.data

    const { slug, activity,product } = router.query;
    // @ts-ignore
    const adultsArray:any = [...Array(productItemView?.members_count).keys()]
    const handleChangeAdults = () => {
        // setMembers_count(+e.target.value)
    }
    const setOrderInfo = () => {
    }

    return (
        <>
            <Head>
                <meta name="title" content={data?.seo?.title}/>
                <meta name="description" content={data?.seo?.description}/>
                <meta property="og:image" content={data?.seo?.image}/>
            </Head>
            <div className="container">
                {/*breadcrumbs */}
                <div className="row breadcrumbs_product">
                    <Link href="/">Home page</Link>
                    <Link href={`/${slug}`}>{productItemView?.category?.name}</Link>
                    <Link href={`/${slug}/${activity}`}>{productItemView?.city?.name || productItemView?.location?.name}</Link>
                    <span>{productItemView?.name}</span>
                </div>
                {/*breadcrumbs*/}
                <article>
                    <div className="product_title row">
                        <i>{/*<FontAwesomeIcon icon="fa-solid fa-bookmark"/>*/}</i>
                        <h1>{productItemView?.name}</h1>
                    </div>
                    {/*product top row */}
                    <div className="row product_top">
                        {/*product left block */}
                        <div className="col-2 product_l">
                            {productItemView?.images &&
                                <SlickSlider images={productItemView?.images?.data || [image]}/>}
                        </div>
                        {/*product left block*/}

                        {/*product right block*/}
                        <div className="col-2 product_r">
                            <div className="product_r_vn">
                                <div className="row product_r_top">
                                    <div className="row">
                                        <div className="time">
                                            <i>{/*<FontAwesomeIcon icon="fa-solid fa-clock"/>*/}</i>
                                            <span>{productItemView?.duration || ""} min</span>
                                        </div>
                                        <RatingTour rating={productItemView?.rating || NaN}/>
                                    </div>
                                    <div className="row options">

                                        <div className="row options_item">
                                            <div className="row options_select">
                                                <span className="sel_icon">
                                                    <i>{/*<FontAwesomeIcon icon="fa-solid fa-user"/>*/}</i></span>
                                                <select onChange={handleChangeAdults}>
                                                    {adultsArray?.map((value:any, index:number)=>
                                                        <option key={index} value={index+1}>{value+1} {value+1===1?"adult":"adults"}</option>
                                                    )}
                                                </select>
                                            </div>
                                        </div>
                                        <div className="row price">
                                            {productItemView?.currency?.id === 1 ? "$" : ""}
                                            {productItemView?.price || ""}
                                        </div>
                                    </div>
                                    <div className="add">
                                        <a target={"_blank"} href={productItemView?.booking_link}
                                           onClick={setOrderInfo} className={"btn"}>Book
                                            tour</a>
                                    </div>
                                </div>
                                <div className="row pick">
                                    <div className="pick_l">
                                        <strong>Pick up location</strong>
                                        We are located at <Link href={`${productItemView?.maps_link || ""}`}>the</Link>
                                    </div>
                                    <div className="pick_r">

                                    </div>
                                </div>
                            </div>
                        </div>
                        {/*product right block */}
                    </div>
                    {/*product top row*/}
                    {/* accordion*/}
                    <ProductAccordion cancel_info={productItemView?.cancel_info} description={productItemView?.description} />
                    {/*accordion*/}
                </article>
                {/*Popular helicopter tours start */}
                <div className="catalog_item row">
                    <div className="container ">
                        <h3>Popular {/*servicesInActivity?.name*/} tours</h3>
                        <div className="row row-15 popularService">
                            {/*cat item*/}

                            {/*<ProductCards productCards={popular4Service}
                                      addRemoveWishlist={props?.addRemoveWishlist}
                                      getProductItemView={props?.getProductItemView}
                                      isAuth={props?.isAuth}
                                      popularCard={true}
                                      categoryLink={categoryLink}
                        />*/}

                            {/*cat item */}
                        </div>
                    </div>

                </div>
                <div className="catalog_item row">
                    <div className={"container best_cities"}>
                        <h3>Other popular cities</h3>
                        {/*<BestCities cities={props.popularCitiesByCategoryCity?.data} categoryLink={categoryLink} />*/}

                    </div>
                </div>
                {/*Popular helicopter tours end */}
            </div>
        </>

    );
};
export const getStaticPaths: GetStaticPaths = async () => {
    return {
        paths: [
            { params: { slug: "helicopter", activity:"sedona",product:"bear-wallow-run-helicopter-tour-of-sedona"}, },
        ],
        fallback: true,
    };
};
export const getStaticProps:GetStaticProps = async ({params}) => {
    const res = await fetch(`https://t2sb.rcnwd.com/api/service/link/${params?.product}`);
    const data = await res.json();
    return {
        props: {
            data
        },
    };
};
    export default Product;