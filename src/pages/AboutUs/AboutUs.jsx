//styles
import "./AboutUs.scss"

//assets
import imgMain from "../../assets/python.png"

//react
import { init } from '../../helpers/helpers'
import { useEffect } from "react"

const AboutUs = () => {

    useEffect(() => {
        init()
    }, [])


    return (
        <div className='AboutUs Container'>
            <h1 className="title">We make your research more complete</h1>
            <section className="section_1">
                <div className="cardAbout">
                    <p>At <strong style={{ color: '#006800' }}>Scatter</strong>, we are a team of Python language programmers
                        with extensive experience in the field. We have participated in several projects
                        in different fields of science.</p>
                </div>
                <div className="imageMain">
                    <img src={imgMain} />
                </div>
            </section>
            <fieldset>
                <legend className="title">Our mission</legend>
            </fieldset>
            <section className="section">
                <div className="cardAbout">
                    Our mission is to provide a comprehensive solution for scientists who want to incorporate
                    accurate scientific calculations and graphics using Python, even if they lack programming
                    experience. We focus on making the process as simple as possible, allowing scientists to
                    focus on their research instead of wasting time learning to code. Whether you need
                    striking visuals for presentations or detailed numerical analysis for publications,
                    we're here to make integrating computing tools into your scientific work accessible
                    and efficient.
                </div>
            </section>
            <fieldset>
                <legend className="title">Our vision</legend>
            </fieldset>
            <section className="section">
                <div className="cardAbout">
                    Our vision transcends current boundaries by aspiring to forge a state-of-the-art 
                    platform in which content generation is fully automated. We aspire to a future where 
                    each user, through their personalized accounts, can not only access a diverse range of 
                    scientific tools, but also manipulate and refine their profile data according to their 
                    specific needs. We are committed to fusing scientific precision with technological 
                    convenience, thereby unlocking the potential of research and analysis for all.
                </div>
            </section>
        </div>
    )
}

export default AboutUs