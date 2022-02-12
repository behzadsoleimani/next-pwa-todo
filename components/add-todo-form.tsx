import React, { useState } from "react";
import { AddCircleOutlineOutlined as Add } from '@mui/icons-material';
import { TextField, IconButton } from "@mui/material";
import { useUpdateList, useAllList } from "../hooks";
import { makeStyles } from '@mui/styles';


const useStyles = makeStyles({
    text: {
        width: "100%"
    },
    addIcon: {
        fontSize: "2rem"
    }
});
const AddTodoForm = () => {
    const [inputValue, setInputValue] = useState("");
    const [error, setError] = useState("");
    const { data } = useAllList();
    const { mutate } = useUpdateList();
    const classes = useStyles();

    const addToList = (todoValue: string) => {
        const newItem: any = {
            id: new Date().getTime(),
            value: todoValue,
            status: "active"
        }

        mutate(Array.isArray(data) ? [...data, newItem] : [newItem]);
    };

    const handleChange = ({ target }: any) => {
        setInputValue(target.value)
    };

    const handleAdd = () => {
        if (inputValue) {
            addToList(inputValue);
            setInputValue("");
            setError("");
        } else {
            setError("input value can't be empty")
        }
    };

    const handleKeyDown = (event: React.KeyboardEvent) => {
        if (event.key === "Enter") {
            handleAdd();
        } else {
            setError("");
        }
    }
    return (
        <div style={{ display: "flex" }}>
            <div className={classes.text}
            >
                <TextField
                    placeholder="Enter a Value"
                    onChange={handleChange}
                    onKeyDown={handleKeyDown}
                    value={inputValue}
                    error={!!error}
                    className={classes.text}
                    helperText={error}
                />
            </div>
            <div>
                <IconButton
                    disabled={!inputValue}
                    onClick={handleAdd}
                >
                    <Add 
                        className={classes.addIcon} />
                </IconButton>
            </div>
        </div>
    );
}


export default AddTodoForm;
