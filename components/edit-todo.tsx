import React, { useState } from "react";
import { Save } from "@mui/icons-material";
import { Grid, Paper, TextField } from "@mui/material";
import IconButton from "@mui/material/IconButton";
import { useAllList, useUpdateList } from "../hooks";
import { makeStyles } from '@mui/styles';

const useStyles = makeStyles({
    Icon: {
        marginLeft: "auto",
        width: "10%"
    },
    Paper: {
        margin: "auto",
        padding: 10,
        alignItems: "center",
        marginTop: 10,
        width: "50%"
    },
    '@media screen and (max-width: 600px)': {
        Paper: {
            width: "90%",
        },
    }
});

interface IEditProps {
    value: string,
    index: number
}

const EditTodo = ({
    value,
    index
}: IEditProps) => {
    const { data } = useAllList();
    const { mutate } = useUpdateList();
    const [editValue, setEditValue] = useState(value);
    const classes = useStyles();

    const handleChange = ({ target }: any) => {
        setEditValue(target.value);
    }

    const saveToDoItem = (index: number) => () => {
        const newList = [...data];
        const objIndex = newList.findIndex((obj: any) => obj.id === index);
        newList[objIndex] = { ...newList[objIndex], status: "active", value: editValue };

        mutate(newList);
    }

    return (
        <Grid xs={12} item key={index}>
            <Paper elevation={2} className={classes.Paper}>
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
                        className={classes.Icon}
                        disabled={!editValue}
                        onClick={saveToDoItem(index)}
                    >
                        <Save fontSize="small" />
                    </IconButton>
                </div>
            </Paper>
        </Grid>
    );
}

export default EditTodo;
