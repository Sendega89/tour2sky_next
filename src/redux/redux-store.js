import {applyMiddleware, combineReducers, compose, createStore} from "redux";
import thunkMeddleWare from "redux-thunk";
import page_Reducer from "./page_Reducer";
import profile_Reducer from "@/redux/profile_Reducer";
import directory_Reducer from "@/redux/directory_Reducer";
import location_Reducer from "@/redux/location_Reducer";

export const StateType = {

}


let reducers = combineReducers({
    page:page_Reducer,
    profilePage: profile_Reducer,
    directory:directory_Reducer,
    location:location_Reducer,
});


const composeEnhancers = process.browser && window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__
    ? window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__
    : compose;
const store = createStore(reducers, composeEnhancers(applyMiddleware(thunkMeddleWare)
));



export default store;