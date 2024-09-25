const CardForm = ({ title, children }) => {
    return (
        <div className="card w-75">
            <div className="card-header">
                <h4>{title}</h4>
            </div>
            <div className="card-body">
                {children}
            </div>
        </div>
    );
}

export default CardForm;