import {locationAPI} from "@/pages/api/api";

const SET_LOCATION_CONTINENT = "tour2sky-project/location/SET_LOCATION_CONTINENT";
const SET_LOCATION_COUNTRY = "tour2sky-project/location/SET_LOCATION_COUNTRY";
const SET_LOCATION_REGION = "tour2sky-project/location/SET_LOCATION_REGION";
const SET_LOCATION_CITY = "tour2sky-project/location/SET_LOCATION_CITY";
const SET_LOCATION_POPULAR_CITY = "tour2sky-project/location/SET_LOCATION_POPULAR_CITY";
const SET_LOCATIONS_LIST = "tour2sky-project/location/SET_LOCATIONS_LIST";
const SET_COUNT_STAT = "tour2sky-project/location/SET_COUNT_STAT";




let initialState = {
    continent:[],
    country:[],
    region:[],
    city:[],
    location:[],
    popular_city: [],
    count_stat:{
        "countriesCount": "",
        "regionsCount": "",
        "citiesCount": "",
        "locationsCount": ""
    }
}
const location_Reducer = (state=initialState,action)=>{

    switch (action.type) {
        case SET_LOCATION_CONTINENT: {
            return {
                ...state,
                continent: action.data.data
            }
        }case SET_LOCATION_COUNTRY: {
            return {
                ...state,
                country: action.data.data
            }
        }case SET_LOCATION_REGION: {
            return {
                ...state,
                region: action.data.data
            }
        }case SET_LOCATION_CITY: {
            return {
                ...state,
                city: action.data.data
            }
        }
        case SET_LOCATION_POPULAR_CITY: {
            return {
                ...state,
                popular_city: action.data.cities
            }
        }case SET_LOCATIONS_LIST: {
            return {
                ...state,
                location: action.data.data
            }
        }
        case SET_COUNT_STAT: {
            return {
                ...state,
                count_stat: action.data.data
            }
        }


        default:
            return state
    }
}

//this is Action Creator
/*export const setContinent = (data) =>({type:SET_LOCATION_CONTINENT,data});*/
export const setCountry = (data) =>({type:SET_LOCATION_COUNTRY,data});
export const setRegion = (data) =>({type:SET_LOCATION_REGION,data});
export const setCity = (data) =>({type:SET_LOCATION_CITY,data});
export const setLocations = (data) =>({type:SET_LOCATIONS_LIST,data});
export const setPopular_city = (data) =>({type:SET_LOCATION_POPULAR_CITY,data});
export const setCount_stat = (data) =>({type:SET_COUNT_STAT,data});


/*This is Thunk*/

/*export const getContinent = () => async (dispatch) => {
    let response = await locationAPI.getContinents()
    dispatch(setContinent(response.data))
}*/
export const getCountry = (continent_id) => async (dispatch) => {
    let response = await locationAPI.getCountry(continent_id)
    dispatch(setCountry(response.data))
}
export const getRegion = (country_id) => async (dispatch) => {
    let response = await locationAPI.getRegions(country_id)
    dispatch(setRegion(response.data))
}
export const getCity = (region_id) => async (dispatch) => {
    let response = await locationAPI.getCities(region_id)
    dispatch(setCity(response.data))
}
export const getLocations = (region_id) => async (dispatch) => {
    let response = await locationAPI.getLocations(region_id)
    dispatch(setLocations(response.data))
}
export const getPopular_city = (category_id,region_id) => async (dispatch) => {
    let response = await locationAPI.getPopular_cities(category_id,region_id)
    dispatch(setPopular_city(response.data))
}
export const getCount_stat = () => async (dispatch) => {
    let response = await locationAPI.getLocationCountStat()
    dispatch(setCount_stat(response.data))
}





export default location_Reducer