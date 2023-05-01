/*import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";*/
import Link from "next/link";

const HeaderAuthorization = () => {
    return  <div className="header_login no_login">
        <div className="login_drop popup">
            <Link href="/authorization" className="authorization" data-effect="mfp-zoom-in">
              <span>
                  <i>{/*<FontAwesomeIcon icon="fa-solid fa-unlock-alt" aria-hidden="true" pull="left"/>*/}</i>
                Authorization
              </span>
            </Link >
        </div>
    </div>

}
export default HeaderAuthorization