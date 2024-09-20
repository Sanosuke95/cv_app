import { useState } from "react";

const Checkbox = ({ checked, onChange, children }) => {
    const [isChecked, setIsChecked] = useState(false);

    return (
        <input
            type="checkbox"
            id="checkbox"
            className="form-check-input"
            checked={checked}
            onChange={onChange}
        />

    );
}

export default Checkbox;