import { useState } from 'react';

const validate = (type, value, setError) => {
    const validationRules = {
        text: {
            pattern: /^[a-zA-Z\s]+$(2)/,
            errorMessage: 'Required',
        },
        email: {
            pattern: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
            errorMessage: 'Required',
        },
        password: {
            pattern: /^(?=.*[0-9])(?=.*[!@#$%^&])[A-Za-z\d!@#$%^&]{8,}$/,
        },
        invitationCode: {
            pattern: /^[A-Za-z0-9]+$(5)/,
            errorMessage: 'Required',
        },
    };

    if (validationRules[type]) {
        const { pattern, errorMessage } = validationRules[type];
        if (!pattern.test(value)) {
            setError(errorMessage);
            return false;
        }
    }
    setError('');
    return true;
};

const handleChange = (e, validate, setError, onChange) => {
    const { value } = e.target;
    validate(e.target.type, value, setError);
    onChange(value);
};

const useTextField = (type, value) => {
    const [error, setError] = useState('');
    const [inputType, setInputType] = useState(type);
    const [focused, setFocused] = useState(false);
    const errorColor = `text-${value.trim() === '' ? 'red' : 'blue'}-500`;
    const borderColor =
        focused || value.trim() !== ''
            ? ''
            : error
                ? 'border-red-500'
                : 'border-gray';
    return { error, setError, inputType, setInputType, focused, setFocused, errorColor, borderColor };
};

const togglePasswordVisibility = (inputType, setInputType) => {
    setInputType(inputType === 'password' ? 'text' : 'password');
};

export {
    togglePasswordVisibility, 
    useTextField, 
    handleChange,
    validate
}