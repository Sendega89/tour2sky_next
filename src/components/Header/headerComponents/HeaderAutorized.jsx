import React from "react";
import {useDispatch, useSelector} from "react-redux";
import {getOutClientProfile} from "@/redux/profile_Reducer";
import Link from "next/link";


const HeaderAutorized = () => {
    const dispatch = useDispatch();
    const getOut = useSelector(() => getOutClientProfile);

    return (
        <div className="header_login">
            <div className="login_drop">
                <span>
                <i>
                    <svg width="15" height="19" viewBox="0 0 15 19" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path fillRule="evenodd" clipRule="evenodd"
                        d="M11.3789 4.64615C11.3789 7.21213 9.61524 9.29225 7.43993 9.29225C5.2645 9.29225 3.50089 7.21213 3.50089 4.64615C3.50089 2.08012 4.08002 0 7.43993 0C10.7998 0 11.3789 2.08012 11.3789 4.64615ZM9.59674 9.64874C14.197 10.455 14.7981 11.7287 14.8711 16.1987C14.8757 16.4846 14.8782 16.5341 14.8794 16.5086C14.8792 16.5843 14.8791 16.6957 14.8791 16.8559C14.8791 16.8559 13.7838 19 7.43987 19C1.09582 19 0.000614907 16.8559 0.000614907 16.8559C0.000614907 16.6066 0.000279503 16.4636 0 16.3863C0.00122981 16.4276 0.00441615 16.4089 0.0112919 16.0535C0.0951429 11.701 0.732857 10.4462 5.28289 9.64874C5.28289 9.64874 5.93055 10.4501 7.43987 10.4501C8.94919 10.4501 9.59674 9.64874 9.59674 9.64874Z"
                        fill="#33CCCC"/>
                    </svg>
                </i>
                    <Link href="/my_account/personal_info">Personal account</Link>

        </span>
                <ul>
                        <li><Link href="/my_account/bookings">Bookings</Link></li>
                        <li><Link href="/my_account/wishlist">Wishlist</Link></li>
                    <li>
                        <Link href="/" onClick={() => {
                        dispatch(getOut())
                    }}>Sign Out</Link>
                    </li>
                </ul>
            </div>
        </div>
    )
}
export default HeaderAutorized