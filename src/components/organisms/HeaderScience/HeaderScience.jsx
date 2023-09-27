import { Link } from "react-router-dom"
import "./HeaderScience.scss"
import MessageBar from "../MessageBar/MessageBar"

const HeaderScience = ({ optionsFieds }) => {

    return (
        <div style={{ display: 'flex', flexDirection: 'column' }}>
            <div className="headerHome">
                <div className="fields Container">
                    {optionsFieds.map((field, index) => {
                        return (
                            <Link key={index} to={field.url}>
                                {field.page}
                            </Link>
                        )
                    })}
                </div>
            </div>
        </div>
    )
}

export default HeaderScience