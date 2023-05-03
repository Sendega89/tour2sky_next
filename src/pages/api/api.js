import  axios from "axios";


//export const JWTToken = localStorage.getItem('jwt');


/*Дані для авторизації апі
client@gmail.com
partner@gmail.com
admin@gmail.com
пароль: 111111*/




export const instance = axios.create(
    {
        withCredentials: true,
        baseURL: 'https://t2sb.rcnwd.com/api/',
       // headers: {Authorization: JWTToken},
    }
);

   /*instance.interceptors.request.use((config) => {
        config.headers.Authorization = localStorage.getItem('jwt')
        return config
    }
)*/

export const locationAPI = {
    getCountry(continent_id) {
        let countryByContinent = continent_id ? `?continent_id=${continent_id}` : ``;
        return instance.get(`location/country${countryByContinent}`)
    },
    getRegions(country_id) {
        return instance.get(`location/country/${country_id}/region`)
    },
    getCities(region_id) {
        return instance.get(`location/region/${region_id}/city`)
    },
    getLocations(regionId,page = 1) {
        return instance.get(`location?sort%5Bname%5D=asc&page=${page}&region_id=${regionId}`)
    },
    getPopular_cities(category_id, region_id) {
        return instance.get(`location/popular-city?category_id=${+category_id}&region_id=${+region_id}`)
    },
    getLocationCountStat() {
        return instance.get(`location/count-stat`)
    },

};
export const pageAPI = {
    getActivityLocationsList() {
        return instance.get(`page/activity-location`)
    },
    getTopCitiesList(id) {
        return instance.get(`category/${id}/uniq-last-cities`)
    },
    getTopLocationsList(id) {
        return instance.get(`category/${id}/uniq-last-locations`)
    },
    getHomePage() {
        return instance.get(`page/home`)
    }
};

export const subscribe = {
    subscribe(userEmail) {
        let sendEmail = {"email": userEmail}
        return instance.post(`site/subscribe`, sendEmail)
    }
};
export const authAPI = {

    me() {
        return instance.get(`cabinet/profile/me`)
    },
    partnerMe() {
        return instance.get(`partner-cabinet/profile/me`)
    },
    register(registerData) {
        return (
            instance.post(`auth/register`, registerData)
        )
    },
    loginFromFacebook(socialToken, type) {
        return (
            instance.post(`auth/facebook`, {socialToken, type})
        )
    },
    loginFromGoogle(googleServerAuthCode, type) {
        return (
            instance.post(`auth/google`, {googleServerAuthCode, type})
        )
    },
    getType() {
        return (
            instance.get(`directory/user-type`)
        )
    }
};
export const myAccountAPI = {
    addServiceToFavorite(serviceId) {
        return (
            instance.post(`service/${serviceId}/favorite`, {})
        )
    },
    removeServiceFromFavorite(serviceId) {
        return (
            instance.delete(`service/${serviceId}/favorite`)
        )
    },
    getFavoriteService() {
        return (
            instance.get(`cabinet/service-favorite`)
        )
    },
    updateProfileInfo(updateOption) {
        return (
            instance.post(`cabinet/profile/update`, updateOption)
        )
    },
    getProfileOrders() {
        return instance.get(`cabinet/order`)
    },
    getCreateNewOrder(ordersInfo) {
        return instance.post(`order/create`, {
            "service_id": ordersInfo.service_id,
            "date": ordersInfo.date,
            "time": ordersInfo.time,
            "members_count": ordersInfo.members_count
        })
    },
    deleteClientProfile() {
        return instance.delete(`cabinet/profile/delete`)
    },
    deletePartnerProfile() {
        return instance.delete(`partner-cabinet/profile/delete`)
    }
};
export const productAPI = {
    getServiceList(page) {
        return instance.get(`service/list?page=${page}`)
    },
    getServiceItemView(serviceId) {
        return instance.get(`service/${serviceId}/view`)
    },
    getServiceItemViewLink(link) {
        return instance.get(`service/link/${link}`)
    },
    getFilteredCatalogAPI(filterOptions) {

        let cities = filterOptions?.cities?.map(c => `&popular_cities%5B%5D=${+c}`).join("")
        let rating = filterOptions?.rating?.map(r => `&rating%5B%5D=${+r}`).join("")
        return instance.get(`service/list?category_link=${filterOptions?.categoryLink ?? ""}
        &city_link=${filterOptions?.currentCity ?? ""}&page=${filterOptions.page || 1}
        &min_price=${filterOptions?.minPrice ?? ""}&max_price=${filterOptions.maxPrice ?? ""}
        &min_duration=${filterOptions.minTime ?? ""}&max_duration=${filterOptions.maxTime ?? ""}
        &city_id=${filterOptions.cityId ?? ""}&category_id=${filterOptions.categoryId ?? ""}
        &activity_location_link=${filterOptions.activityLocationLink ?? ""}
        &sort=${filterOptions.sort ?? ""}${cities || ""}${rating || ""}`)
    },

    getProductByCategories(categoryLink, cityLink) {
        return instance.get(`service/list?category_link=${categoryLink}&city_link=${cityLink}`)
    },
    getPopularServices(categoryId,regionId) {
        return instance.get(`service/popular?category_id=${categoryId}&region_id=${regionId}`)
    }
};
export const directory = {
    getOrderStatus() {
        return instance.get(`directory/order-status`)
    },
    getOrderPayStatus() {
        return instance.get(`directory/order-pay-status`)
    },
    getUserType() {
        return instance.get(`directory/user-type`)
    },
    getIndexStatus() {
        return instance.get(`directory/index-status`)
    },
    getServiceStatus() {
        return instance.get(`directory/service-status`)
    },
    getCategories() {
        return instance.get(`service/categories`)
    },

};
export const activityLocationAPI = {
    getActivityLocation(inMenu = "") {
        return instance.get(`page/activity-location?in_menu=${inMenu}`)
    },
    getActivityLocationsPage(categoryLink, currentCity) {
        let specialLink = `${categoryLink}-${currentCity}`;
        return instance.get(`page/activity-location/special-link/${specialLink}`)
    }
};
export const categoriesAPI = {
    getCategoriesView(categoryLink) {
        /*const data = res.json();*/
        return instance.get(`category/${categoryLink}`);
    }
}


