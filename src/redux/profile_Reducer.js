import { set, get, clear } from 'local-storage';
import {authAPI, instance} from "@/pages/api/api";


const SET_CLIENT_PROFILE = "tour2sky/profile/SET_CLIENT_PROFILE";
const SET_AUTH_PROFILE = "tour2sky/profile/SET_AUTH_PROFILE";
const UPDATE_CLIENT_PROFILE = "tour2sky/profile/UPDATE_CLIENT_PROFILE";
const SET_PROFILE_INFO = "tour2sky/profile/SET_PROFILE_INFO";
const SET_ORDERS_INFO = "tour2sky/profile/SET_ORDERS_INFO";
const SET_CREATE_ORDER = "tour2sky/profile/SET_CREATE_ORDERS";
const OUT_CLIENT_PROFILE = "tour2sky/profile/OUT_CLIENT_PROFILE";


const initialState = {
    profileInfo:[],
    isAuth: get('jwt') && true,
    myOrders: [
        {
            id: 1,
            user_id: 123,
            service_id: 123,
            members_count: 2,
            service_date: "2021-12-25",
            service_time: "09:00:00",
            price: 30,
            status: 1,
            comment: "It's my comment",
            created_at: "2021-12-25 09:30:25",
            updated_at: "2021-12-25 09:30:25",
            currency: {
                id: 1,
                name: "US Dollar",
                code: "USD",
                rate: 28.1,
                status: 1
            },
            service: {
                id: 1,
                name: "Concerts",
                link: "concerts",
                created_at: "2021-12-25 09:30:25",
                price: 30,
                duration: 120,
                description: "Some service description",
                rating: 4.5,
                currency: {
                    id: 1,
                    name: "US Dollar",
                    code: "USD",
                    rate: 28.1,
                    status: 1
                },
                images: {
                    data: [
                        {
                            id: 1,
                            name: "concert-1.jpeg",
                            mime_type: "image/jpeg",
                            link: "",
                            thumb: ""
                        }
                    ]
                }
            },
            statusObject: {
                id: 1,
                name: "New"
            }
        }
    ],
    myOrdersMeta: {
        pagination: {
            total: 30,
            count: 2,
            per_page: 15,
            current_page: 1,
            total_pages: 2,
            links: {}
        },
        filters: {
            status: {
                data: [
                    {
                        id: 1,
                        name: "New"
                    }
                ]
            }
        }
    },
    myCreateOrders:{},
    role:get('role')
}

const profile_Reducer = (state = initialState, action) => {

    switch (action.type) {
        case SET_CLIENT_PROFILE: {
            return {
                ...state,
                ...action.data,
            }
        }
        case SET_AUTH_PROFILE: {
            return {
                ...state,
                isAuth: true
            }
        }
        case UPDATE_CLIENT_PROFILE: {
            return {
                ...state,
                ...action.data
            }
        }
        case SET_PROFILE_INFO: {
            return {
                ...state,
                ...action.data,
                profileInfo: action.data?.social_profiles
            }
        }
        case SET_ORDERS_INFO: {
            return {
                ...state,
                myOrders:action.data.data,
                myOrdersMeta:action.data.meta,
            }
        }
        case SET_CREATE_ORDER: {
            return {
                ...state,
                myCreateOrders:action.data
            }
        }case OUT_CLIENT_PROFILE: {
            return {
                ...state,
                isAuth:false
            }
        }

        default:
            return state
    }
}
export const setClientProfile = (data) => ({type: SET_CLIENT_PROFILE, data});
export const setAuthProfile = (data) => ({type: SET_AUTH_PROFILE, data});
export const setProfileInfo = (data) => ({type: SET_PROFILE_INFO, data});
export const setUpdateProfile = (data) => ({type: UPDATE_CLIENT_PROFILE, data});
/*export const setOrders = (data) => ({type: SET_ORDERS_INFO, data});*/
export const outClientProfile = () => ({type:OUT_CLIENT_PROFILE});






export const login = (email, password,setStatus) =>async (dispatch) => {
    try {
        const response = await instance.post(`auth/login`,{email,password});
        dispatch(setClientProfile(response.data));
        set('jwt', response.data.meta.token);
        set('role', response.data.role);
        set('user_id', response.data.id);
        dispatch(setAuthProfile())
        setStatus({})
    } catch (error) {
        let errors = error.response;
        setStatus({error: errors?.data?.error})
    }
};

export const getProfileInfo = () => async (dispatch) => {
    try {
        let response = await authAPI.me();
        dispatch(setProfileInfo(response.data))
    } catch (e) {

    }
}
export const getUpdateProfile = (updateOption,setStatus) => async (dispatch) => {
    try {
        let response = await myAccountAPI.updateProfileInfo(updateOption)
        dispatch(setUpdateProfile(response.data));
        setStatus(null)
    } catch (e) {
        let errors = e.response;
        if(errors.status===422){
            setStatus({error: errors.data.errors})}
    }
}
export const getOutClientProfile = (dispatch) => () => {
    clear()
    dispatch(outClientProfile())
}
export const getEnterToProfile = () => (dispatch) => {
    dispatch(setAuthProfile())
}
/*export const getOrders = (token,page,service_name,status) => async (dispatch) => {
    let response = await myAccountAPI.getProfileOrders(token, page, service_name, status)
        dispatch(setOrders(response.data));
}
export const getCreateNewOrder = (ordersInfo) => async () => {
     await myAccountAPI.getCreateNewOrder(ordersInfo)

}
export const getDeleteClientProfile = () => async (dispatch) => {
    await myAccountAPI.deleteClientProfile();
    dispatch(outClientProfile())
}
export const getDeletePartnerProfile = () => async (dispatch) => {
     await myAccountAPI.deletePartnerProfile();
    dispatch(outClientProfile())
}
export const getUpdatePartnerInfo = (updateOption,setStatus) => async (dispatch) => {
    try {
        let response = await partnerProfile.getUpdatePartnerInfo(updateOption)
        dispatch(setClientProfile(response.data))
        setStatus({})
    } catch (e) {
        let errors = e.response;
        if(errors.status===422){
            setStatus({error: errors.data.errors})}
    }
}*/
/*export const getPartnerProfile = () => async (dispatch) => {
    try {
        let response = await authAPI.partnerMe();
        dispatch(setProfileInfo(response.data))
    } catch (e) {

    }
}*/

export default profile_Reducer