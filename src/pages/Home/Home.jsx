//styles
import "./Home.scss"

//assets
import pictureMain from "../../assets/pictureMain.png"
import sector_3 from "../../assets/sector_3.png"
import graph_3d from "../../assets/graph/3d.png"

//graph
import graph_0 from "../../assets/graph/scatter.png"
import graph_1 from "../../assets/graph/bio_diagram.png"
import graph_2 from "../../assets/graph/box_annotation.png"
import graph_3 from "../../assets/graph/colobar_log.png"
import graph_4 from "../../assets/graph/color_mappers.png"
import graph_5 from "../../assets/graph/elements.png"
import graph_6 from "../../assets/graph/genoma_circle.png"
import graph_7 from "../../assets/graph/genoma_plot.png"
import graph_8 from "../../assets/graph/intervals.png"
import graph_9 from "../../assets/graph/linear_cmap.png"
import graph_10 from "../../assets/graph/linear_cmap_colobar.png"
import graph_11 from "../../assets/graph/logplot.png"
import graph_12 from "../../assets/graph/lorenz.png"
import graph_13 from "../../assets/graph/slope.png"
import graph_15 from "../../assets/graph/anscombe.png"
import graph_16 from "../../assets/graph/span.png"
import graph_17 from "../../assets/graph/stacked_area.png"
import graph_18 from "../../assets/graph/stacked_split.png"
import graph_19 from "../../assets/graph/transform_jitter.png"
import graph_20 from "../../assets/graph/transform_markers.png"
import graph_21 from "../../assets/graph/whisker.png"

//react
import GeneralButton from "../../components/atoms/GeneralButton/GeneralButton"
import { Galleria } from 'primereact/galleria';
import { useRef, useState } from "react"
import HeaderScience from "../../components/organisms/HeaderScience/HeaderScience"
import { Link } from "react-router-dom"

const Home = () => {
  const galleria = useRef(null);
  const [activeIndex, setActiveIndex] = useState(0);
  const graphs = [
    { image: graph_0, name: "scatter" },
    { image: graph_1, name: "bio_diagram" },
    { image: graph_2, name: "box_annotation" },
    { image: graph_3, name: "colobar_log" },
    { image: graph_4, name: "color_mappers" },
    { image: graph_5, name: "elements" },
    { image: graph_6, name: "genoma_circle" },
    { image: graph_7, name: "genoma_plot" },
    { image: graph_8, name: "intervals" },
    { image: graph_9, name: "linear_cmap" },
    { image: graph_10, name: "linear_cmap_colobar" },
    { image: graph_11, name: "logplot" },
    { image: graph_12, name: "lorenz" },
    { image: graph_13, name: "slope" },
    { image: graph_15, name: "anscombe" },
    { image: graph_16, name: "span" },
    { image: graph_17, name: "stacked_area" },
    { image: graph_18, name: "stacked_split" },
    { image: graph_19, name: "transform_jitter" },
    { image: graph_20, name: "transform_markers" },
    { image: graph_21, name: "whisker" },
  ]

  const itemTemplate = (item) => {
    return <img src={item.image} alt={item} style={{ width: '100%', display: 'block' }} />;
  }

  const thumbnailTemplate = (item) => {
    return <img src={item} alt={item} style={{ display: 'block' }} />;
  }

  const planFree = [
    "Calculations recorded by each field of science",
    "Graphics in different resolutions",
    "Interactive charts in html format",
    "Request custom graphics",
    "Request custom calculations",
  ]

  const optionsFieds = [
    { page: "Numerical Methods", url: "/mathematics", active: true },
    { page: "Statistics", url: "/statistics" },
    { page: "Life sciences", url: "/life-sciences" },
  ]

  const pythonOptions = [
    { title: "Great community and libraries: ", info: "Python has an active community and a wide variety of libraries specifically for calculations and graphs. The most notable libraries are NumPy and SciPy for scientific calculations, and Matplotlib and Bokeh for graphics and visualization. These libraries allow you to perform complex tasks with relative ease." },
    { title: "Efficiency and performance: ", info: "Although Python is an interpreted language, the libraries mentioned above are optimized for performance, which means they can handle large amounts of data efficiently. In addition, it is possible to use C extensions and other techniques to further improve performance if necessary." },
    { title: "Interoperability: ", info: "Python is compatible with many other technologies and languages, making it easy to integrate with other parts of a project. You can use Python in conjunction with libraries like TensorFlow or PyTorch for machine learning applications, or with databases and web systems for real-time data analysis." },
  ]

  const plans = [
    {
      type: "FREE",
      use: "Ideal for subject studies, practical work and seminars. Always free. It never expires. Update at any time.",
      options: [
        "50 calculations",
        "10 low resolution graphics",
        "200MB storage",
        "Retention of calculations for 15 days",
        "1 active user",
      ],
      button: "Create free account"
    },
    {
      type: "PRO",
      use: "Best suited for college subject papers, undergraduate theses, and postgraduate research.",
      options: [
        "Unlimited calculations",
        "Unlimited high-resolution graphics",
        "2GB storage",
        "Retention of calculations for 30 days",
        "3 active user",
        "Specialty Graphics Request",
      ],
      button: "Start 14-day trial"
    },
    {
      type: "ADVANCED",
      use: "Best suited for postgraduate theses, research projects, and publications in journals and books.",
      options: [
        "Unlimited calculations",
        "Unlimited high-resolution graphics",
        "5GB storage",
        "Retention of calculations for 1 year",
        "3 active user",
        "Specialty Graphics Request",
        "Request for scientific discussion of graphs or calculations with bibliography included",
        "Get 365x24x7 customer support"
      ],
      button: "Contact us"
    },
  ]

  window.addEventListener('scroll', function () {
    const element = document.querySelector('.imgSection_3');
    const positionFromTop = element.getBoundingClientRect().top;

    if (positionFromTop - window.innerHeight <= 0) {
      element.classList.add('active');
    }
  });

  window.addEventListener('scroll', function () {
    const element = document.querySelector('.section_5');
    const positionFromTop = element.getBoundingClientRect().top;

    if (positionFromTop - window.innerHeight <= 0) {
      element.classList.add('active');
    }
  });

  return (
    <div className="Home">
      <HeaderScience optionsFieds={optionsFieds} />
      <div className="Container">
        <div className="startText">
          <h1>Your platform for scientific calculations and graphics, managed as a service.</h1>
        </div>
        <section className="title">
          <div className="left">
            <p>Enable scientific calculations and graph generation without the need to create or run
              programming code. Scatter is the platform that facilitates your results.
              You send us the application and we prepare your results.</p>
            <h3>KNOW WHAT YOU CAN DO ON OUR PAGE</h3>
            <div className="freePlan">
              {planFree.map((element, index) => {
                return (
                  <div className="element" key={index}>
                    <div className="icon">
                      <svg xmlns="http://www.w3.org/2000/svg" className="icon icon-tabler icon-tabler-check" width="28" height="28" viewBox="0 0 24 24" strokeWidth="2.0" stroke="#a905b6" fill="none" strokeLinecap="round" strokeLinejoin="round">
                        <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                        <path d="M5 12l5 5l10 -10" />
                      </svg>
                    </div>
                    {element}
                  </div>
                )
              })}
            </div>
            <div className="btns">
              <Link to='https://wa.me/+5213344703129' target="_bank">
                <GeneralButton className={"createAccount"} text={"Request custom calculations"} />
              </Link>
              <Link target="_bank" to='https://demo.bokeh.org/selection_histogram'>
                <GeneralButton className={"createAccount magenta"} text={"View interactive graph"} />
              </Link>
            </div>
          </div>
          <div className="pictureMain">
            <img src={pictureMain} />
          </div>
        </section>
        <section className="section_2">
          <div className="content">
            <div className="icons" style={{ background: '#86009159' }}>
              <svg xmlns="http://www.w3.org/2000/svg" className="icon icon-tabler icon-tabler-math-symbols" width="32" height="32" viewBox="0 0 24 24" strokeWidth="1.5" stroke="#a905b6" fill="none" strokeLinecap="round" strokeLinejoin="round">
                <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                <path d="M3 12l18 0" />
                <path d="M12 3l0 18" />
                <path d="M16.5 4.5l3 3" />
                <path d="M19.5 4.5l-3 3" />
                <path d="M6 4l0 4" />
                <path d="M4 6l4 0" />
                <path d="M18 16l.01 0" />
                <path d="M18 20l.01 0" />
                <path d="M4 18l4 0" />
              </svg>
            </div>
            <h2>Our calculations go beyond the ordinary.</h2>
            <p>
              We work to complement your research, without the need to execute a line of code from
              any programming language. To understand our results we offer a detailed explanation
              of each step we used in the calculations.
            </p>
          </div>
          <div className="content">
            <div className="icons" style={{ background: '#04009133' }}>
              <svg xmlns="http://www.w3.org/2000/svg" className="icon icon-tabler icon-tabler-chart-histogram" width="32" height="32" viewBox="0 0 24 24" strokeWidth="1.5" stroke="#040091" fill="none" strokeLinecap="round" strokeLinejoin="round">
                <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                <path d="M3 3v18h18" />
                <path d="M20 18v3" />
                <path d="M16 16v5" />
                <path d="M12 13v8" />
                <path d="M8 16v5" />
                <path d="M3 11c6 0 5 -5 9 -5s3 5 9 5" />
              </svg>
            </div>
            <h2>You have the power to choose your graphic or send us a request.</h2>
            <p>
              We plot countless high-quality scientific charts in various branches of science.
              Our charts are results of numerous scripts done in Python. In addition to the amount of
              content that we offer, we can plot the graph that your research needs by contacting us.
            </p>
          </div>
          <div className="content">
            <div className="icons" style={{ background: '#005a0836' }}>
              <svg xmlns="http://www.w3.org/2000/svg" className="icon icon-tabler icon-tabler-file-analytics" width="32" height="32" viewBox="0 0 24 24" strokeWidth="1.5" stroke="#005a08" fill="none" strokeLinecap="round" strokeLinejoin="round">
                <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                <path d="M14 3v4a1 1 0 0 0 1 1h4" />
                <path d="M17 21h-10a2 2 0 0 1 -2 -2v-14a2 2 0 0 1 2 -2h7l5 5v11a2 2 0 0 1 -2 2z" />
                <path d="M9 17l0 -5" />
                <path d="M12 17l0 -1" />
                <path d="M15 17l0 -3" />
              </svg>
            </div>
            <h2>The result could be complemented with an excellent scientific explanation.</h2>
            <p>
              We offer an excellent writing of the results obtained so that the user understands every
              detail of the procedure carried out either in the calculations or in the output graphs.
              We also have support that could help resolve doubts that still prevail.
            </p>
          </div>
        </section>
        <h1 className="subtitle">Why do we calculate and plot graphs in Python?</h1>
        <div className="startText">
          <h1>Python is a machine for turning data into science</h1>
        </div>
        <section className="section_3">
          <div className="left_s3">
            <p>Python is an excellent choice for calculations and graphics due to its friendly syntax,
              abundance of specialized libraries, and active community. It is a versatile language that
              can be adapted to a wide range of needs in the fields of science, engineering, and data
              analysis.</p>
            {
              pythonOptions.map((characteristic, index) => {
                return (
                  <div className="pythonOptions" key={index}>
                    <div className="icon">
                      <svg xmlns="http://www.w3.org/2000/svg" className="icon icon-tabler icon-tabler-check" width="28" height="28" viewBox="0 0 24 24" strokeWidth="2.0" stroke="#a905b6" fill="none" strokeLinecap="round" strokeLinejoin="round">
                        <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                        <path d="M5 12l5 5l10 -10" />
                      </svg>
                    </div>
                    <div>
                      <p>
                        <strong>{characteristic.title}
                        </strong>
                        {characteristic.info}</p>
                    </div>
                  </div>
                )
              })
            }
          </div>
          <div className="imgSection_3" style={{ display: 'grid', placeItems: 'center', width: '100%' }}>
            <img src={sector_3} />
          </div>
        </section>
        <h1 className="subtitle">What are the types of graphics we offer?</h1>
        <p style={{ textAlign: 'center', margin: '-50px 0 100px 0' }}>We offer a wide range of graphics. Here we show you the most popular</p>
        <section className="section_5">
          <Galleria ref={galleria} value={graphs} numVisible={7} style={{ maxWidth: '850px' }}
            activeIndex={activeIndex} onItemChange={(e) => setActiveIndex(e.index)}
            circular fullScreen showItemNavigators showThumbnails={false} item={itemTemplate} thumbnail={thumbnailTemplate} />
          <div className="graphs">
            {graphs.map((graph, index) => {
              return (
                <div key={index} className="graph" onClick={
                  () => { setActiveIndex(index); galleria.current.show() }}>
                  <img src={graph.image} />
                  <p>{graph.name}</p>
                </div>
              )
            })}
          </div>
        </section>
        <h1 className="subtitle">Let's go to a higher level and complement it with a 3D graphic</h1>
        <div className="startText">
          <h1>What's New on <strong style={{color: '#006800'}}>Scatter</strong></h1>
        </div>
        <section className="section_6">
          <div className="info">
            <p>The latest charts included in our platform are 3-dimensional charts.
              These can simulate the bathymetry of a certain area, the altitude, a
              body or three-dimensional object with the input of a CSV file 
              extension</p>
            <div className="buttons">
              <Link to={"https://visjs.github.io/vis-graph3d/examples/graph3d/13_disable_zoom.html"} target="_bank">
                <GeneralButton className={"interactive"} text={"View interactive graph"} />
              </Link>
            </div>
          </div>
          <img src={graph_3d} />
        </section>
      </div>
    </div>
  )
}

export default Home