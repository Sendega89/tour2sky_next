import logo from "../../../../images/logoOld.png";
import Link from "next/link";
import Image from "next/image";
import s from "../Header.module.css"

const Logo = () => {
    return <div className={s.headerLogo}>
        <Link href="/">
            <Image className={"logoSeoSet"} src={logo} alt="Tour2Sky"/>
        </Link>
</div>
}
export default Logo