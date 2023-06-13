
import {useSelector} from "react-redux";
import Link from "next/link";
import s from "../Header.module.css"



const HeaderNavigation = () => {
const categoriesInMenu = useSelector((state)=> state.directory.categoriesInMenu);
const otherCategories = useSelector((state)=> state.directory.otherCategories);


    return  <div className={s.menu}>
        <nav>
            <ul>
                {categoriesInMenu.map(menuCat=>
                    <li key={menuCat.id} value={menuCat.id}>
                        <Link href={`/${menuCat?.link || ""}`}>{menuCat.name}</Link>
                    </li>
                )}
                <li className="drop-item" >
                    <Link href="#">Other</Link>
                    <ul className="drop-menu">
                        {otherCategories?.map(cat=>
                        <li className="drop-menu__item" key={cat.id+1} value={cat.id}>
                            <Link href={`/${cat?.link || ""}`}
                            >{cat.name}</Link></li>)}
                    </ul>
                </li>
            </ul>
        </nav>
    </div>


}
export default HeaderNavigation
