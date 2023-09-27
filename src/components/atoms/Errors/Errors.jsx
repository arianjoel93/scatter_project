import "./Errors.scss"

const Errors = ({ error }) => {
    return (
        <div className={error.error ? 'Errors red' : 'Errors blue'}>{error.msg}</div>
    )
}

export default Errors