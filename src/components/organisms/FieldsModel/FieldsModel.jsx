import { Link } from "react-router-dom"
import GeneralButton from "../../atoms/GeneralButton/GeneralButton"
import "./FieldsModel.scss"

const FieldsModel = ({ methods, imgMain, title, description }) => {
    return (
        <div className="Container ">
            <section className="containerMethods">
                <div className="startText">
                    <h1>{title}</h1>
                </div>
                <p>{description}</p>
                <div className="methods_Img">
                    <div className="listMethods">
                        {methods.map((method, index) => {
                            return (
                                <div style={{ display: 'flex', flexDirection: 'column' }}>
                                    <div key={index} className="method">
                                        <div className="icon">
                                            <svg xmlns="http://www.w3.org/2000/svg" className="icon icon-tabler icon-tabler-check" width="24" height="24" viewBox="0 0 24 24" strokeWidth="2.0" stroke="#a905b6" fill="none" strokeLinecap="round" strokeLinejoin="round">
                                                <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                                                <path d="M5 12l5 5l10 -10" />
                                            </svg>
                                        </div>
                                        <p>{method.name}</p>
                                    </div>
                                    {method?.explain && (
                                        <ul className="subClass">
                                            {method.explain.map((option, index) => {
                                                return (
                                                    <li key={index}>{option}</li>
                                                )
                                            })}
                                        </ul>
                                    )}
                                </div>
                            )
                        })}
                    </div>
                    <img src={imgMain} />
                </div>
                <div className="buttons">
                    <Link to='https://wa.me/+5213344703129' target="_bank">
                        <GeneralButton className={"request"} text={"Make your request"} />
                    </Link>
                </div>
            </section>
        </div>
    )
}

export default FieldsModel