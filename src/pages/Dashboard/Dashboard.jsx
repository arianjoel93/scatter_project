import DashBoardCard from "../../components/organisms/DashBoardCard/DashBoardCard"
import "./Dashboard.scss"

//Actions of Redux
import { createNewRequestAction } from "../../actions/userActions" 

const Dashboard = () => {

    const infoGraphOnly = {
        language: "Python 3.10 (numpy, pandas, scipy and bokeh)",
        title: "Graph only",
        description: "Get graphic only. If it is not in our catalog, you can request it from us.",
        typeRequest:"Request graph"
    }
    const infoCalculationOnly = {
        language: "Python 3.10 (numpy & scipy)",
        title: "Calculation only",
        description: "Get the calculations you need and if it is not in our catalog, tell us your case, we are here to help you.",
        typeRequest:"Request calculation"
    }
    const infoGraph_Calculation = {
        language: "Python 3.10 (numpy, pandas, request, scipy and bokeh)",
        title: "Graph & calculations",
        description: "With this package you can request a complete work of your results from us. We offer you solutions for calculations, graphics, code and all its scientific explanation.",
        typeRequest:"Request"
    }



    return (
        <div className='Dashboard Container'>
            <h1>Choose one of our options</h1>
            <div className="optionsRequest">
                <DashBoardCard color={"💚"} info={infoCalculationOnly}></DashBoardCard>
                <DashBoardCard color={"💙"} className="wrapper1" info={infoGraphOnly}></DashBoardCard>
                <DashBoardCard color={"💜"} className="wrapper2" info={infoGraph_Calculation}></DashBoardCard>
            </div>
        </div>
    )
}

export default Dashboard