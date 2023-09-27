//styles
import "./Services.scss"

//assets
import imgMain from "../../assets/graph/bessel.png"
import graph from "../../assets/graph/sen.png"
import { Link } from "react-router-dom"
import GeneralButton from "../../components/atoms/GeneralButton/GeneralButton"
import { useEffect } from "react"
import { init } from "../../helpers/helpers"

const Services = () => {

    useEffect(() => {
        init()
    }, [])

    return (
        <div className="Services Container">
            <h1 className="title">Specialized services</h1>
            <section className="section_1">
                <div className="info">
                    <p>
                        We offer a wide variety of high-level graphics,
                        calculations and detailed explanations of its development,
                        to complement scientific studies without the need to implement
                        any line of code.
                    </p>
                    <p>
                        We also give you the opportunity to tell us about your needs,
                        if we do not have the graph or calculations you need in our
                        description, you can contact us and discuss your ideas in detail.
                    </p>
                    <p>
                        In the same way, we combine graphs to make comparisons of results
                        and we provide you with Python executables so that you can check
                        your results independently.
                    </p>
                    <div className="btn">
                        <Link to='https://wa.me/+5213344703129' target="_bank">
                            <GeneralButton className="assistant" text={"Request an assistant"} />
                        </Link>
                    </div>
                </div>
                <img src={imgMain} />
            </section>
            <fieldset>
                <legend className="subtitle">We offer a new modality of graphics</legend>
            </fieldset>
            <section className="section_2">
                <div className="info">
                    <p>
                        Interactive or html-format charts are a type of user-customizable
                        charts, so you can get parts of the chart, zoom in or out.
                        You can also add it to a website for your customers or followers
                        to exchange with their data.
                    </p>
                    <div className="btn">
                        <Link target="_bank" to="https://demo.bokeh.org/sliders">
                            <GeneralButton className="assistant" text={"View example"} />
                        </Link>
                    </div>
                </div>
                <Link target="_bank" to="https://demo.bokeh.org/sliders">
                    <img src={graph} />
                </Link>
            </section>
        </div>
    )
}

export default Services