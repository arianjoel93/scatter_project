import { Link } from "react-router-dom"
import "./LifeSciences.scss"

//methods
import imgMain from "../../assets/graph/bio_diagram.png"
import HeaderScience from "../../components/organisms/HeaderScience/HeaderScience"
import FieldsModel from "../../components/organisms/FieldsModel/FieldsModel"


const LifeSciences = () => {
    const optionsFieds = [
        { page: "Numerical Methods", url: "/mathematics" },
        { page: "Statistics", url: "/statistics" },
        { page: "Life sciences", url: "/life-sciences", active: true },
    ]

    const methods = [
        {
            id: 0, name: "Nucleotide Base Composition Plot",
        },
        {
            id: 1, name: "GC Content Plot",
        },
        {
            id: 2, name: "Sequence Alignment Plot",
        },
        {
            id: 3, name: "Protein Motifs and Domains Plot",
        },
        {
            id: 4, name: "Amino Acid Frequency Plot",
        },
        {
            id: 5, name: "Phylogeny Plot",
        },
        {
            id: 6, name: "Protein Structure Visualization",
        },
        {
            id: 7, name: "Gene Expression Heatmap Plot",
        },
        {
            id: 8, name: "Genetic Variants Plot",
        },

    ]

    const info = {
        title: "Life sciences charts available",
        description: "We have a wide variety of purely scientific graphics that will complement your study:"
    }


    return (
        <div className="LifeSciences">
            <HeaderScience optionsFieds={optionsFieds} />
            <FieldsModel imgMain={imgMain} description={info.description} title={info.title} methods={methods} />
        </div>
    )
}

export default LifeSciences