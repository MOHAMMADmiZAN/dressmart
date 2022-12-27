import { TextField } from "@mui/material";
import React, { } from "react";
import {
    Controller
} from "react-hook-form";




type InputFieldProps = {
    item: {
        name: string;
        type: string;
    },
    other: any;
};


const Input = ({ item, other }: InputFieldProps) => {

    const { name, type } = item;

    // Make the first latter of the name UpperCase for UI label
    let label = name.charAt(0).toUpperCase() + name.slice(1);


    return (
        <Controller
            name={name}
            control={other}
            render={({
                field: { onChange, onBlur, name, ref },
                fieldState: { error },
                formState: { isValid },
            }) => (

                <TextField
                    type={type}
                    fullWidth
                    margin="normal"
                    onBlur={onBlur} // notify when input is touched
                    onChange={onChange} // send value to hook form
                    inputRef={ref}
                    name={name}
                    label={label}
                    variant="outlined"
                    error={!!error?.message}
                    helperText={isValid ? '' : error?.message}
                />
            )}
        />


    );
};

export default Input