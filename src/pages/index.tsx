import Head from 'next/head'
//import { Inter } from 'next/font/google'
//import styles from '@/styles/Home.module.css'
import HomeSwiper from "../components/HomeSwiper/HomeSwiper"
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Box from '@mui/material/Box';
import {useEffect, useState} from "react";
import {useDispatch, useSelector} from "react-redux";
import {getEnterToProfile} from "@/redux/profile_Reducer";
import {getHomePageInfo, getTopCities} from "@/redux/page_Reducer";
import {getCategories, getIndexStatus} from "@/redux/directory_Reducer";
import Header from "../components/Header/Header"
import Footer from "../components/Footer/Footer"
import HeaderTitle from "../components/HeaderTitle/HeaderTitle";
import ServiceStart from "../components/ServiceStart/ServiceStart";
import SubscribeForm from "../components/SubscribeBlock/SubscribeForm";
import About from "../components/About/About";


/*const inter = Inter({ subsets: ['latin'] })*/





export default function Home() {
  const categoriesInMenu = useSelector((state:any) => state.directory.categoriesInMenu);
  const homePageInfo = useSelector((state:any) => state.page.homePageSEO);
  const dispatch:any = useDispatch();
  const getEnterProfile = useSelector(() => getEnterToProfile);
  const getCities = useSelector(() => getTopCities);
  const getIndexStatuses = useSelector(() => getIndexStatus);
  const getCategoryInMenu = useSelector(() => getCategories);
  const getHomePage = useSelector(() => getHomePageInfo);
  const isAuth = useSelector((state:any) => state.profilePage.isAuth);
  const placesList = useSelector((state:any) => state.page.topCities);
  let catId = categoriesInMenu.find((item:any, index:number) => index === 0);
  const [categoryLink, setCategoryLink] = useState(catId?.link);
  const [value, setValue] = useState();


  useEffect(() => {
    dispatch(getHomePage())
    dispatch(getEnterProfile())
    dispatch(getIndexStatuses())
    dispatch(getCategoryInMenu())

    if (value || catId?.id) {
      dispatch(getCities(value || catId?.id))
    }
  },  [isAuth,categoryLink, catId?.id, catId?.link])


  const handleChange = (event:any, newValue:any) => {
    setCategoryLink(event?.currentTarget?.name)
    setValue(newValue);
  };

  return (
    <>
      <Head>
        <meta name="title" content={homePageInfo?.title}/>
        <meta name="description" content={homePageInfo?.description}/>
        <meta property="og:image" content={homePageInfo?.image}/>
        <link rel="canonical" href="https://t2s.rcnwd.com/"/>
      </Head>
      <Header />
      <main>
          <HeaderTitle />
        <div>
          <ServiceStart /><div className="container">
              <div className="row">
                <h3>The best cities for flights</h3>
                <Box sx={{
                  width: '100%',
                  paddingBottom: "16px",
                  borderBottom: "2px solid #ECF0F1",

                }}>
                  <Tabs
                      value={value || catId?.id}
                      onChange={handleChange}
                      textColor="inherit"
                      indicatorColor="primary"
                      aria-label="secondary tabs example"
                  >

                    {categoriesInMenu?.map((c:any) =>
                        // @ts-ignore
                        <Tab sx={{
                          bgcolor: "#ECF0F1",
                          marginRight: "10px",
                          borderTopLeftRadius: "8px",
                          borderTopRightRadius: "8px",
                          '&.Mui-selected': {
                            color: "white",
                            backgroundColor: '#2980B9',
                            borderBottom: "none"
                          },
                        }} value={c?.id} name={c?.link}
                             key={c?.id} label={c?.name || "Name"}

                        />)}
                  </Tabs>
                </Box>
                <HomeSwiper placesList={placesList} categoryLink={categoryLink || catId?.link}/>
              </div>
          </div>
          <SubscribeForm />
          <About
              description={"<p>Tour2Sky is the premier air based activities search platform, offering a large selection of thrilling experiences and trusted providers. Whether you're looking to soar through the skies on a scenic flight, jump out of a plane on a skydiving adventure, or try your hand at indoor skydiving, Tour2Sky has something for everyone. With a vast network of trusted providers, you can be sure that your air-based experience will be safe, exciting, and unforgettable.</p>\n" +
                  "\n" +
                  "<p>Not only does Tour2Sky offer a diverse selection of activities, but they also provide exceptional customer support. The Tour2Sky team is always available to answer any questions or concerns you may have, helping to make the booking process as seamless and stress-free as possible. So why wait? Book your next air-based adventure with Tour2Sky and experience the thrill of the skies like never before!</p>"}
              title={"Tour2Sky"}/>
        </div>
      </main>
      <Footer />
    </>
  )
}
