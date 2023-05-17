import Logo from "./headerComponents/Logo";
import HeaderNavigation from "./headerComponents/HeaderNavigation";
import HeaderAuthorization from "./headerComponents/HeaderAuthorization";
import s from "./Header.module.css"
import HeaderAutorized from "./headerComponents/HeaderAutorized";
import {useDispatch, useSelector} from "react-redux";
import {getCategories} from "@/redux/directory_Reducer";
import React, {useEffect, useState} from "react";
import {get} from "local-storage";







const Header = () => {
    const [isAuth ,setIsAuth] = useState(false)
    const getCategoryInMenu = useSelector(() => getCategories);
    const dispatch:any = useDispatch();



    useEffect(()=>{
        const auth = get('jwt') && true;
        if(auth){
            setIsAuth(true)
        }
        dispatch(getCategoryInMenu())
    },[])

    return (
        <>
    <header className={s.header}>
                <div className={`${s.myHeader} container`}>
                   <div>
                        <Logo />
                    </div>
                   <div>
                       <HeaderNavigation />
                   </div>
                   <div className={s.auth}>
                       {isAuth ?
                            <HeaderAutorized />
                           :
                            <HeaderAuthorization />
                       }
                   </div>

                </div>
    </header>
        </>
)
}
export default Header

