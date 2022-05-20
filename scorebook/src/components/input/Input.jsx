import React from "react";

const Input = (props) => {

    const { 
        type, 
        value, 
        onChange, 
        onBlur, 
        index, 
        autoFocus, 
        placeholder,
        classes } = props;

    return (
        <input
                type={type}
                value={value}
                onChange={onChange}
                onBlur={onBlur}
                data-position={index}
                autoFocus={autoFocus}
                placeholder={placeholder}
                className={classes}
            />
    )
}

export default Input;