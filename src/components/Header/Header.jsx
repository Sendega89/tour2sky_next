import Logo from "./headerComponents/Logo";
import HeaderNavigation from "./headerComponents/HeaderNavigation";
import HeaderAuthorization from "./headerComponents/HeaderAuthorization";
import s from "./Header.module.css"
import HeaderAutorized from "./headerComponents/HeaderAutorized";
import {useSelector} from "react-redux";





const Header = () => {
const isAuth = useSelector((state)=> state.profilePage.isAuth);

    return <header className={s.header}>

                <div className={`${s.myHeader} container`}>
                   <div className={s.logo}>
                        <Logo />
                    </div>
                   <div className={s.navigation}>
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