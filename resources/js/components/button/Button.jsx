const Button = ({ type, className, children, onClick }) => {
    return (
        <button
            onClick={onClick}
            type={type}
            className={className}>{children}</button>
    );
}

export default Button;