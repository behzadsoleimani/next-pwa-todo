import React, { useState } from "react";
import { AddCircleOutlineOutlined as Add } from '@mui/icons-material';
import { TextField, IconButton } from "@mui/material";

const AddTodoForm = ({
    addToList
}: any) => {
    const [inputValue, setInputValue] = useState("");
    const [error, setError] = useState("");

    const styles: any = {
        text: {
            width: "100%"
        },
        addIcon: {
            fontSize: "2rem"
        }
    }

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
            <div style={styles.text}
            >
                <TextField
                    placeholder="Enter a Value"
                    onChange={handleChange}
                    onKeyDown={handleKeyDown}
                    value={inputValue}
                    error={!!error}
                    style={styles.text}
                    helperText={error}
                />
            </div>
            <div>
                <IconButton
                    disabled={!inputValue}

                >
                    <Add onClick={handleAdd}
                        style={styles.addIcon} />
                </IconButton>
            </div>
        </div>
    );
}


export default AddTodoForm;
