
const Form = ({ children, handleSubmit }) => {
    return (
        <form onSubmit={handleSubmit}>
            <h3>Premier form</h3>
            <div className="container">{children}</div>
        </form>
    );

}

export default Form;