
const Form = ({ children, handleSubmit }) => {
    return (
        <form onSubmit={handleSubmit}>
            <div className="container">{children}</div>
        </form>
    );

}

export default Form;