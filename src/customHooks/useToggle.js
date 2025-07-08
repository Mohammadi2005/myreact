import {useState} from "react";

export const useToggle = (isVisible = false) => {
    const [isValid, setIsValid] = useState(isVisible);

    const toggle = () => {
        setIsValid(!isValid);
    }
    return [isValid, toggle];
}

