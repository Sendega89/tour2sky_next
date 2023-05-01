import React from "react";
//import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {useDispatch, useSelector} from "react-redux";
import {getOutClientProfile} from "@/redux/profile_Reducer";
import Link from "next/link";







const HeaderAutorized = () => {
    const dispatch = useDispatch();
    const getOut = useSelector(()=> getOutClientProfile);
    const role = useSelector((state)=> state.profilePage.role);
    return <div className="header_login">
        <div className="login_drop">
            <span><i>{/*<FontAwesomeIcon icon="fa-solid fa-user"/>*/}</i>
                {(role==="admin")?
                    <Link href="/admin_cabinet">Admin account</Link>:
                    <Link href="/myAccount/personal_info">My account</Link>}
        </span>
            <ul>
                {role==="client" || role==="partner"?<>
                <li><Link href="/myAccount/bookings">Bookings</Link></li>
                <li><Link href="/myAccount/wishlist">Wishlist</Link></li>
                    </> :""}
                <li><Link href="/" onClick={()=>{

                    dispatch(getOut())
                }}>Sign Out</Link></li>
            </ul>
        </div>
    </div>
}
export default HeaderAutorized