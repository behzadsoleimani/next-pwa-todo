import React, { useState } from "react";
import { Save } from "@mui/icons-material";
import { Grid, Paper, TextField } from "@mui/material";
import IconButton from "@mui/material/IconButton";

const styles: any = {
    Icon: {
        marginLeft: "auto",
        width: "10%"
    },
    Paper: {
        margin: "auto",
        padding: 10,
        alignItems: "center",
        marginTop: 10,
        width: 500
    }
};

const EditTodo = (props: any) => {

    const [editValue, setEditValue] = useState(props.todo);

    const handleChange = ({ target }: any) => {
        setEditValue(target.value);
    }

    const saveToDoItem = (index: number) => {
        props.saveTodo(
            index,
            editValue
        );
    }

    return (
        <Grid xs={12} item key={props.index}>
            <Paper elevation={2} style={styles.Paper}>
                <div

                    style={{ display: "flex" }}
                >
                    <TextField
                        style={{ width: "90%" }}
                        variant="standard"
                        onChange={handleChange}
                        value={editValue}
                    //   inputRef={inputRef}
                    />
                    <IconButton
                        type="submit"
                        color="primary"
                        aria-label="Add"
                        style={styles.Icon}
                        disabled={!editValue}
                        onClick={() => saveToDoItem(props.index)}
                    >
                        <Save fontSize="small" />
                    </IconButton>
                </div>
            </Paper>
        </Grid>
    );
}

export default EditTodo;
