
const Input = ({ type, onChange }) => {
    return (
        <input
            type={type}
            onChange={onChange}
            className="form-control" />
    );
}
export default Input;