import "./GeneralButton.scss"

const GeneralButton = ({ text, className, onClick, type }) => {
    return (
        <button type={type && type} className={className ? `GeneralButton ${className}` : 'GeneralButton'} onClick={onClick}>{text}</button>
    )
}

export default GeneralButton