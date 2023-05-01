import {directory} from "@/pages/api/api";


const SET_DIRECTORY_ORDER_STATUS = "tour2sky-project/directory/SET_DIRECTORY_ORDER_STATUS";
const SET_DIRECTORY_ORDER_PAY_STATUS = "tour2sky-project/directory/SET_DIRECTORY_ORDER_PAY_STATUS";
const SET_DIRECTORY_USER_TYPE = "tour2sky-project/directory/SET_DIRECTORY_USER_TYPE";
const SET_DIRECTORY_INDEX_STATUS = "tour2sky-project/directory/SET_DIRECTORY_INDEX_STATUS";
const SET_DIRECTORY_SERVICE_STATUS = "tour2sky-project/directory/SET_DIRECTORY_SERVICE_STATUS";
const SET_CATEGORIES = "tour2sky-project/directory/SET_CATEGORIES";
const SET_CATEGORIES_INFO_PAGE = "tour2sky-project/directory/SET_CATEGORIES_INFO_PAGE";
const SET_CATEGORIES_VIEW = "tour2sky-project/directory/SET_CATEGORIES_VIEW";





let initialState = {
    orderStatus:[],
    orderPayStatus:[],
    usertype:[],
    indexStatus:[],
    serviceStatus:[],
    categoriesInMenu: [],
    otherCategories:[{ }],
    categoriesPage:{},
    categoriesView:{category: {},cities:{data:[]}},
}
const directory_Reducer = (state=initialState,action)=>{

    switch (action.type) {

        case SET_CATEGORIES:{

            return {
                ...state,
                categoriesInMenu:action.data.categoriesInMenu.data,
                otherCategories:action.data.otherCategories.data,
            }
        }
        case SET_DIRECTORY_ORDER_STATUS:{
            return {
                ...state,
                orderStatus:action.data.data
            }
        }
        case SET_DIRECTORY_ORDER_PAY_STATUS:{
            return {
                ...state,
                orderPayStatus:action.data.data
            }
        }
        case SET_DIRECTORY_USER_TYPE:{

            return {
                ...state,
                userType:action.data.data
            }
        }
        case SET_DIRECTORY_INDEX_STATUS:{
            return {
                ...state,
                indexStatus:action.data.data
            }
        }
        case SET_DIRECTORY_SERVICE_STATUS:{
            return {
                ...state,
                serviceStatus:action.data.data
            }
        }

        case SET_CATEGORIES_INFO_PAGE:{

            return {
                ...state,
                categoriesPage:state.action.data.data
            }
        }
        case SET_CATEGORIES_VIEW:{
            return {
                ...state,
                categoriesView:action.data
            }
        }
        default:
            return state
    }
}

export const setOrderStatus = (data) =>({type:SET_DIRECTORY_ORDER_STATUS,data});//this is Action Creator
export const setOrderPayStatus = (data) =>({type:SET_DIRECTORY_ORDER_PAY_STATUS,data});//this is Action Creator
export const setUserType = (data) =>({type:SET_DIRECTORY_USER_TYPE,data});//this is Action Creator
export const setIndexStatus = (data) =>({type:SET_DIRECTORY_INDEX_STATUS,data});//this is Action Creator
export const setServiceStatus = (data) =>({type:SET_DIRECTORY_SERVICE_STATUS,data});//this is Action Creator
export const setCategories = (data) =>({type:SET_CATEGORIES,data});
export const setCategoriesInfoPage = (data) =>({type:SET_CATEGORIES_INFO_PAGE,data});
export const setCategoriesView = (data) =>({type:SET_CATEGORIES_VIEW,data});


/*This is Thunk*/

export const getOrderStatus = () => async (dispatch) => {
    let response = await directory.getOrderStatus()
    dispatch(setOrderStatus(response.data))
}
export const getOrderPayStatus = () => async (dispatch) => {
    let response = await directory.getOrderPayStatus()
    dispatch(setOrderPayStatus(response.data))
}
export const getUsersType = () => async (dispatch) => {
    let response = await directory.getUserType()
        dispatch(setUserType(response.data))
}
export const getIndexStatus = () => async (dispatch) => {
    let response = await directory.getIndexStatus()
        dispatch(setIndexStatus(response.data))
}
export const getServiceStatus = () => async (dispatch) => {
    try {
        let response = await directory.getServiceStatus()
        dispatch(setServiceStatus(response.data))
    } catch (e) {

    }
}
export const getCategories = () => async (dispatch) => {

    try {
        let response = await directory.getCategories()
        dispatch(setCategories(response.data))
    } catch (e) {
    }
}
export const getCategoriesView = (categoryLink) => async (dispatch) => {
    try {
        let response = await categoriesAPI.getCategoriesView(categoryLink)
        dispatch(setCategoriesView(response.data))
    } catch (e) {
    }
}
/*export const createAccount = (registerData,setStatus) => async (dispatch) => {
     try {
       let response = await authAPI.register(registerData);
        if (response.data) {
            dispatch(setCreatedSuccess());
            dispatch(setUserData(response.data));
            setStatus({})}


    }
        catch(error) {
        let errors = error.response;
        if(errors.status===422){
        setStatus({error: errors.data.errors})}
    }
}*/




export default directory_Reducer