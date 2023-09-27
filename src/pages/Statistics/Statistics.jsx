import { Link } from "react-router-dom"
import "./Statistics.scss"

//methods
import imgMain from "../../assets/graph/histogram.png"
import HeaderScience from "../../components/organisms/HeaderScience/HeaderScience"
import FieldsModel from "../../components/organisms/FieldsModel/FieldsModel"


const Statistics = () => {
    const optionsFieds = [
        { page: "Numerical Methods", url: "/mathematics" },
        { page: "Statistics", url: "/statistics", active: true },
        { page: "Life sciences", url: "/life-sciences" },
    ]

    const methods = [
        {
            id: 0, name: "Descriptive Statistics", explain: [
                "Half",
                "Median",
                "Fashion",
                "Range",
                "Standard deviation",
                "Quartiles",
                "Percentiles",
                "Maximum and minimum values",
                "Skewness and Kurtosis"
            ]
        },
        {
            id: 1, name: "Distributions", explain: [
                "Histograms",
                "Density charts",
                "Q-Q plots"
            ]
        },
        {
            id: 2, name: "Relationships between Variables", explain: [
                "Scatter plots",
                "Correlation coefficient",
                "Correlation matrix",
                "Regression plots"
            ]
        },
        {
            id: 3, name: "Hypothesis Tests", explain: [
                "Student's t-test",
                "ANOVA (Analysis of Variance)",
                "Nonparametric tests",
            ]
        },
        {
            id: 4, name: "Variability Analysis", explain: [
                "Box and whisker plots (boxplots)",
                "Chi-square tests"
            ]
        },
        {
            id: 5, name: "Others", explain: [
                "Line charts",
                "Linear/multiple regression",
                "Nonlinear regression models",
                "Heat graphics",
                "Color-coded scatterplots",
                "Heatmaps"

            ]
        },
    ]

    const info = {
        title: "Statistical calculations available",
        description: "We have a wide variety of statistical analyzes and purely scientific graphs that will complement your study:"
    }


    return (
        <div className="Statistics">
            <HeaderScience optionsFieds={optionsFieds} />
            <FieldsModel imgMain={imgMain} description={info.description} title={info.title} methods={methods} />
        </div>
    )
}

export default Statistics