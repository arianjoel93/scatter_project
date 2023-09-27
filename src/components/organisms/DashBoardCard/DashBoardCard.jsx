import { useState, useEffect, useRef } from "react"
import "./DashBoardCard.scss"
import { Sidebar } from 'primereact/sidebar';
import { Dropdown } from 'primereact/dropdown';
import { Toast } from 'primereact/toast';
import { FileUpload } from 'primereact/fileupload';

const DashBoardCard = ({ className, color, info }) => {
    const toast = useRef(null);
    const [data, setData] = useState('')
    const [visible, setVisible] = useState(false)
    const [selectedField, setSelectedField] = useState(null);
    const [options, setOptions] = useState([])
    const field = [
        { name: 'Numerical Methods', code: 'NM' },
        { name: 'Statistics', code: 'S' },
        { name: 'Life Sciences', code: 'LS' },
    ];

    const handleClick = () => {
        setData(info.title)
        setVisible(true)

    }
    const outSidebar = () => {
        setVisible(false)
        setData('')
    }

    const optionRequests = {
        nm: [
            { id: 0, title: "Bisection Method", },
            { id: 1, title: "Newton-Raphson Method", },
            { id: 2, title: "Secant Method", },
            { id: 3, title: "Jacobi Method", },
            { id: 4, title: "Polynomial Interpolation", },
            { id: 5, title: "Least Squares", },
            { id: 6, title: "Euler Methods", },
            { id: 7, title: "Runge-Kutta 4th Order", },
            { id: 8, title: "Adams-Bashforth Method", },
            { id: 9, title: "Monte Carlo Method", },
            { id: 10, title: "Optimization Methods" },
        ],
        s: [
            { id: 0, title: "Descriptive Statistics", },
            { id: 1, title: "Distributions", },
            { id: 2, title: "Relationships between Variables", },
            { id: 3, title: "Hypothesis Tests", },
            { id: 4, title: "Variability Analysis", },
        ],
        ls: [
            { id: 0, title: "Nucleotide Base Composition Plot", },
            { id: 1, title: "GC Content Plot", },
            { id: 2, title: "Sequence Alignment Plot", },
            { id: 3, title: "Protein Motifs and Domains Plot", },
            { id: 4, title: "Amino Acid Frequency Plot", },
            { id: 5, title: "Phylogeny Plot", },
            { id: 6, title: "Protein Structure Visualization", },
            { id: 7, title: "Gene Expression Heatmap Plot", },
            { id: 8, title: "Genetic Variants Plot", },
        ]


    }


    useEffect(() => {
        if (selectedField?.code == 'S') {
            setOptions(optionRequests.s)
        }
        if (selectedField?.code == 'NM') {
            setOptions(optionRequests.nm)
        }
        if (selectedField?.code == 'LS') {
            setOptions(optionRequests.ls)
        }
    }, [selectedField])

    const onUpload = () => {
        toast.current.show({ severity: 'info', summary: 'Success', detail: 'File Uploaded' });
    };

    return (
        <>
            <Sidebar className="SidebarOption" visible={visible} onHide={outSidebar} position="right">
                <h1>Information about your request</h1>
                <div className="fields">
                    <Dropdown value={selectedField} onChange={(e) => setSelectedField(e.value)} options={field} optionLabel="name"
                        placeholder="Select the field of your request " />
                </div>
                <div className="options">
                    <h2>Choose the items you want to order</h2>
                    {options && options?.map((option, index) => {
                        return (
                            <div className="option">
                                <input key={index} type="radio" />
                                <label>{option?.title}</label>
                            </div>
                        )
                    })}
                </div>
                <div className="card flex justify-content-center">
            <Toast ref={toast}></Toast>
            <FileUpload mode="basic" name="demo[]" url="/api/upload" accept="csv/*" maxFileSize={1000000} onUpload={onUpload} />
        </div>  

            </Sidebar>
            <div className='DashboardCard'>
                <div className="example-2 card">
                    <div className={className ? `${className}` : "wrapper"}>
                        <div className="header">
                            <div className="date">
                                <span className="day">
                                    <svg xmlns="http://www.w3.org/2000/svg" className="icon icon-tabler icon-tabler-eye" width="24" height="24" viewBox="0 0 24 24" strokeWidth="1.5" stroke="#ffffff" fill="none" strokeLinecap="round" strokeLinejoin="round">
                                        <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                                        <path d="M10 12a2 2 0 1 0 4 0a2 2 0 0 0 -4 0" />
                                        <path d="M21 12c-2.4 4 -5.4 6 -9 6c-3.6 0 -6.6 -2 -9 -6c2.4 -4 5.4 -6 9 -6c3.6 0 6.6 2 9 6" />
                                    </svg>
                                    0
                                </span>
                            </div>
                            <ul className="menu-content">
                                <li>
                                    <a href="#" className="fa fa-bookmark-o">{color ? color : "❤️"}</a>
                                </li>
                                {/* <li><a href="#" class="fa fa-heart-o"><span></span></a></li> */}
                            </ul>
                        </div>
                        <div className="data">
                            <div className="content">
                                <span className="author">{info?.language}</span>
                                <h1 className="title"><a href="#">{info?.title}</a></h1>
                                <p className="text">{info?.description}</p>
                                <a onClick={handleClick} className="button">{info?.typeRequest}</a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default DashBoardCard