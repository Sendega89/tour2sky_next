import s from "./SubscribeForm.module.css";
import {subscribe} from "../../pages/api/api";



const SubscribeForm = () => {

    const subscribeMe = (e) => {
        console.log(e)
        subscribe.subscribe(e.target[0].value)
        e.preventDefault()
        e.target[0].value = ''
    }


    return <div className={`${s.rectangleContainer} "row rectangle section"`}>

        <div className="container">
            <div className="row_title row_title_white">
                <h3>Subscribe to the newsletter</h3>
                <p>Subscribe to Tour2Sky&apos;s newsletter for exclusive deals on air activities, special discounts, and
                    updates on our latest offers. Elevate your travel game and stay in the loop! Subscribe now.</p>
            </div>

            <div className={`row header_search ${s.header_search}`}>
                <form  onSubmit={subscribeMe}>
                    <input type="text" className="input_search" placeholder="Enter your e-mail"/>
                    <button type="submit">Subscribe</button>
                </form>
            </div>
        </div>
    </div>

}
export default SubscribeForm