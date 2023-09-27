//styles
import "./ScrollButton.scss"

//react
import { useState } from "react";
import { init } from "../../../helpers/helpers"

const ScrollButton = ({ id }) => {

    const [scroll, setScroll] = useState(0)

    //These functions are for scrolling to the top of the page.--------------------------------
    window.addEventListener('scroll', () => {
        setScroll(window.scrollY)
    });

    const handleClick = () => {
        init()
    }

    //------------------------------------------------------------------------------------------


    return (
        <div className={scroll >= 600 ? "axisY activeScroll" : "axisY"}>
            <button onClick={handleClick}>
                <svg xmlns="http://www.w3.org/2000/svg" className="icon icon-tabler icon-tabler-chevron-down" width="35" height="35" viewBox="0 0 24 24" strokeWidth="2.5" stroke="#120f1d" fill="none">
                    <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                    <polyline points="6 9 12 15 18 9" />
                </svg>
            </button>
        </div>
    )
}

export default ScrollButton