import Logo from "./headerComponents/Logo";
import HeaderNavigation from "./headerComponents/HeaderNavigation";
import HeaderAuthorization from "./headerComponents/HeaderAuthorization";
import s from "./Header.module.css"
import HeaderAutorized from "./headerComponents/HeaderAutorized";
import {useDispatch, useSelector} from "react-redux";
import {getCategories} from "@/redux/directory_Reducer";
import {useEffect} from "react";





const Header = () => {
    const isAuth = useSelector((state)=> state.profilePage.isAuth);
    const getCategoryInMenu = useSelector(() => getCategories);
    const dispatch = useDispatch();


    useEffect(()=>{
        dispatch(getCategoryInMenu())
    },[isAuth])
    return <header className={s.header}>

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
                           <HeaderAuthorization />}
                   </div>

                </div>
    </header>

}
export default Header