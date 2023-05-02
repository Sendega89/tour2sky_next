import s from "./HeaderTitle.module.css"






const HeaderTitle = () => {


    return (

            <div className="contentHome">
        <div className="header_title">
            <div className="container">
                <div className="row">
                    <h1>Find Air Activities<br/>Anywhere</h1>
                    <div className="row header_search">
                        <div id="tabs">
                            <form>
                                <div>
                                    <div className="header_search_flex">
                                        <div>
                                            <label>Air tours
                                            <input type="text" placeholder="Enter city, region or country"/></label>
                                        </div>
                                        <div>
                                            <label>Our activities
                                            <select>
                                                <option value="">All</option>
                                            </select></label>
                                        </div>
                                        <button type="submit">Search</button>
                                    </div>
                                </div>
                            </form>
                        </div>
                        <div id="tabs">
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>

    )
}
export default HeaderTitle