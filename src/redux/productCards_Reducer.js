import {productAPI} from "@/pages/api/api";


const SET_UNAUTHORIZED_CATALOG = "tour2sky/catalog/SET_UNAUTHORIZED_CATALOG";
const SET_CLIENTS_CATALOG = "tour2sky/catalogSET_CLIENTS_CATALOG";
const SET_FILTERED_CATALOG = "tour2sky/catalogSET_FILTERED_CATALOG";
const SET_CURRENT_FILTER = "tour2sky/catalog/SET_CURRENT_FILTER";
const SET_CATEGORIES_PRODUCT = "tour2sky/catalog/SET_CATEGORIES_PRODUCT";
const SET_POPULAR_SERVICES = "tour2sky/catalog/SET_POPULAR_SERVICES";


const initialState = {
    data: [],
    meta: {},
    pagination: {},
    isFetching: true,
    filters: {
        price: {min: 10, max: 50},
        duration: {min: 10, max: 100},
        cities: [],
    },
    currentFilter: {
        city: null,
        activity: null,
        link: "",
        activity_name: "",
    },
    popularService:[]
};

const productCards_Reducer = (state = initialState, action) => {

    switch (action.type) {

        case SET_CLIENTS_CATALOG:
        case SET_UNAUTHORIZED_CATALOG:
        case SET_FILTERED_CATALOG: {

            return {
                ...state,
                data: action.data.data.filter(i=>i.status === 1),
                meta: action.data.meta,
                pagination: action.data.meta.pagination,
                isFetching: false,
                filters: action.data.meta.filters,
            }
        }
        case SET_CURRENT_FILTER: {
            return {
                ...state,
                currentFilter: {
                    activity: action.data.activity,
                    city: action.data.city,
                    link: action.data.link,
                    activity_name: action.data.name
                },
            }
        }
        case SET_CATEGORIES_PRODUCT: {
            return {
                ...state,
                currentFilter: {
                    activity: action.data.activity,
                    city: action.data.city,
                    link: action.data.link,
                    activity_name: action.data.name
                },
            }
        }
        case SET_POPULAR_SERVICES: {
            return {
                ...state,
                popularService:action.data.data.filter(i=>i.status === 1)
            }
        }
        default:
            return state
    }
}

export const setUnauthorizedCatalog = (data) => ({type: SET_UNAUTHORIZED_CATALOG, data});
//export const setClientCatalog = (data) => ({type: SET_CLIENTS_CATALOG, data});
export const setFilteredCatalog = (data) => ({type: SET_FILTERED_CATALOG, data});
export const setCurrentFilter = (data) => ({type: SET_CURRENT_FILTER, data});
export const setPopularServices = (data) => ({type: SET_POPULAR_SERVICES, data});

/*export const setCurrentCity = (data) =>({type:SET_CURRENT_CITY,data});
export const setCurrentActivity = (data) =>({type:SET_CURRENT_ACTIVITY,data});*/


/*This is Thunk*/
export const getProductCardData = (page) => async (dispatch) => {
    try {
        let response = await productAPI.getServiceList(page)
        dispatch(setUnauthorizedCatalog(response.data))
    } catch (e) {
        console.log(e)
    }
    // return setClientCatalog(response.data)

}
export const getPopularServices = (categoryId,regionId) => async (dispatch) => {
    try {
        let response = await productAPI.getPopularServices(categoryId,regionId)
        dispatch(setPopularServices(response.data))
    } catch (e) {

    }

}
export const getFilteredCatalog = (filterOptions) => async (dispatch) => {
    try {
        let response = await productAPI.getFilteredCatalogAPI(filterOptions);
        dispatch(setFilteredCatalog(response.data))
    } catch (e) {

    }
}
export const getProductsByCategoryAndCity = (categoryLink,cityLink) => async (dispatch) => {
    let response = await productAPI.getProductByCategories(categoryLink,cityLink);
    dispatch(setFilteredCatalog(response.data))
}

export default productCards_Reducer