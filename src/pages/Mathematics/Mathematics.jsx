import { Link } from "react-router-dom"
import "./Mathematics.scss"

//methods
import imgMain from "../../assets/graph/euler_method.png"
import { useEffect, useState } from "react"
import GeneralButton from "../../components/atoms/GeneralButton/GeneralButton"
import HeaderScience from "../../components/organisms/HeaderScience/HeaderScience"
import FieldsModel from "../../components/organisms/FieldsModel/FieldsModel"


const Mathematics = () => {
    const optionsFieds = [
        { page: "Numerical Methods", url: "/mathematics" },
        { page: "Statistics", url: "/statistics", active: true },
        { page: "Life sciences", url: "/life-sciences" },
    ]

    const methods = [
        { id: 0, name: "Bisection Method", explain: "" },
        { id: 1, name: "Newton-Raphson Method", explain: "" },
        { id: 2, name: "Secant Method", explain: "" },
        { id: 3, name: "Jacobi Method", explain: "" },
        { id: 4, name: "Polynomial Interpolation", explain: "" },
        { id: 5, name: "Least Squares", explain: "" },
        { id: 6, name: "Euler Methods", explain: "" },
        { id: 7, name: "Runge-Kutta 4th Order", explain: "" },
        { id: 8, name: "Adams-Bashforth Method", explain: "" },
        { id: 9, name: "Monte Carlo Method", explain: "" },
        { id: 10, name: "Optimization Methods", explain: "" },
    ]

    const info = {
        title: "Numerical methods available",
        description: "We have a variety of numerical methods to solve different types of problems, ranging from finding a root in a function to solving differential equations numerically and finding approximations through interpolation:"
    }


    return (
        <div className="Mathematics">
            <HeaderScience optionsFieds={optionsFieds} />
            <FieldsModel imgMain={imgMain} description={info.description} title={info.title} methods={methods} />
        </div>
    )
}

export default Mathematics