import React from "react";
import Todo from "./todo-item";
import EditTodo from "../components/edit-todo";
import { CircularProgress, Grid } from "@mui/material";
import { useAllList } from "../hooks";
import { IListItem } from "../types";
import { makeStyles } from '@mui/styles';


const useStyles = makeStyles({
    parentList: {
        justifyContent: "center"
    }
});


const renderTodo = (item: IListItem) => {
    return (
        item.status === "active" ?
            <Todo
                key={item.id}
                index={item.id}
                value={item.value}
            />
            :
            <EditTodo
                key={item.id}
                index={item.id}
                value={item.value}
            />
    );
}
const List = () => {

    const { isLoading, data } = useAllList();

    const classes = useStyles();



    return (
        <Grid container className={classes.parentList}>
            {isLoading ? <CircularProgress  /> :
                (data || []).map((item: IListItem) => renderTodo(item))}
        </Grid>
    );
}

export default List;
