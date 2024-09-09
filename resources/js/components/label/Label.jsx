
const Label = ({ children }) => {
    return (
        <label htmlFor="inputLabel" className="form-label">{children}</label>
    );
}

export default Label;