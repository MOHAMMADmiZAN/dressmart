
import { TextField } from "@mui/material";
import React, {InputHTMLAttributes, memo} from "react";
import {
    Controller
} from "react-hook-form";




type InputFieldProps = InputHTMLAttributes<HTMLInputElement> & {
    item: {
        name: string;
        type: string;
        fullWidth?: boolean;
        value?: string;
        style?: object;
    },
    other: any;
};


const Input: React.FC<InputFieldProps> = ({ item, other }) => {

    const { name, type, fullWidth, value, style } = item;

    let label = name.charAt(0).toUpperCase() + name.slice(1);
    return (

        <Controller
            name={name}
            control={other}
            defaultValue={value ? value : ''}
            render={({
                field: { onChange, onBlur, name, ref },
                fieldState: { error },
                formState: { isValid },
            }) => (

                <TextField
                    sx={{ ...style, margin: '5px' }}
                    type={type}
                    fullWidth={fullWidth}
                    onBlur={onBlur} // notify when input is touched
                    onChange={onChange} // send value to hook form
                    inputRef={ref}
                    name={name}
                    label={label}
                    size={'small'}
                    variant="outlined"
                    error={!!error?.message}
                    helperText={isValid ? '' : error?.message}
                />
            )
            }
        />


    );
};

export default memo(Input);