import {pageAPI} from "../pages/api/api";

const SET_PAGE_HOME = "tour2sky-project/pages/SET_PAGE_HOME";
const SET_ACTIVITY_LOCATION_LIST = "tour2sky-project/pages/SET_ACTIVITY_LOCATION_LIST";
const SET_ACTIVITY_LOCATION_VIEW = "tour2sky-project/pages/SET_ACTIVITY_LOCATION_VIEW";
const SET_TOP_CITIES = "tour2sky-project/pages/SET_TOP_CITIES";
const SET_TOP_LOCATIONS = "tour2sky-project/pages/SET_TOP_LOCATIONS";

let initialState = {
    homePageSEO:[],
    activityLocationList:[],
    activityLocationView:{},
    topCities:[],
    topLocations:[],
}
const page_Reducer = (state=initialState,action)=>{

    switch (action.type) {
        case SET_PAGE_HOME:{
            return {
                ...state,
                homePageSEO:action.data.seo
            }
        }
        case SET_ACTIVITY_LOCATION_LIST:{
            return {
                ...state,
                activityLocationList:action.data.data
            }
        }
        case SET_ACTIVITY_LOCATION_VIEW:{
            return {
                ...state,
                activityLocationView:action.data.data
            }
        }
        case SET_TOP_CITIES:{

            return {
                ...state,
                topCities:action.data.cities.data
            }
        }
        case SET_TOP_LOCATIONS:{
            return {
                ...state,
                topLocations:action.data.locations.data
            }
        }
        default:
            return state
    }
}

export const setHomePageInfo = (data) =>({type:SET_PAGE_HOME,data});
export const setActivityLocationList = (data) =>({type:SET_ACTIVITY_LOCATION_LIST,data});
export const setActivityLocationView = (data) =>({type:SET_ACTIVITY_LOCATION_VIEW,data});
export const setTopCities = (data) =>({type:SET_TOP_CITIES,data});
export const setTopLocations = (data) =>({type:SET_TOP_LOCATIONS,data});

export const getActivityLocationList = () => async (dispatch) => {
    try {
        let response = await pageAPI.getActivityLocationsList();
        dispatch(setActivityLocationList(response.data))
    } catch (e) {
    }
}
export const getHomePageInfo = () => async (dispatch) => {
    try {
        let response = await pageAPI.getHomePage();
        dispatch(setHomePageInfo(response.data))
    } catch (e) {
    }
}

export const getActivityLocationView = (searchParam) => async (dispatch) => {
    try {
        let response = await pageAPI.getActivityLocationsList(searchParam);
        dispatch(setActivityLocationView(response.data))
    } catch (e) { }
}
export const getTopCities = (id) => async (dispatch) => {
    try {
        let response = await pageAPI.getTopCitiesList(id);
        dispatch(setTopCities(response.data))
    } catch (e) { }
}
export const getTopLocations = (id) => async (dispatch) => {
    try {
        let response = await pageAPI.getTopLocationsList(id);
        dispatch(setTopLocations(response.data))
    } catch (e) { }
}





export default page_Reducer