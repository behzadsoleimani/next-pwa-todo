import React from "react";
import { Delete, Edit } from "@mui/icons-material";
import { Grid, Paper } from "@mui/material";
import IconButton from "@mui/material/IconButton";
import { useAllList, useUpdateList } from "../hooks";
import { IListItem } from "../types";
import { makeStyles } from '@mui/styles';

const useStyles = makeStyles({
  Icon: {
      marginLeft: "auto",
      width: "10%"
  },
  Paper: {
      margin: "auto",
      padding: 10,
      display: "flex",
      alignItems: "center",
      marginTop: 10,
      width: "50%"
  },
  // Todo: {
  //   textAlign: "center"
  // },
  '@media screen and (max-width: 600px)': {
      Paper: {
          width: "90%",
      },
  }
});


interface ITodoProps {
  value: string,
  index: number
}


const Todo = ({
  value,
  index
}: ITodoProps) => {


  const { data } = useAllList();
  const { mutate } = useUpdateList();
  const classes = useStyles();


  const deleteTodo = (id: number) => () => {

    mutate(data.filter((item: IListItem) => item.id !== id));
  };


  const updateTodo = (id: number) => () => {
    const newList = [...data];
    const objIndex = newList.findIndex((obj: IListItem) => obj.id === id);
    newList[objIndex].status = "editing";
    mutate(newList);
  };



  return (
    <Grid
      xs={12}
      item
      key={index}
    >
      <Paper elevation={2} className={classes.Paper}>
        <div>
        <span 
        // className={classes.Todo}
        >{value}</span>
        </div>
        <IconButton
          color="primary"
          className={classes.Icon}
          onClick={updateTodo(index)}
        >
          <Edit fontSize="small" />
        </IconButton>
        <IconButton
          color="secondary"
          aria-label="Delete"
          onClick={deleteTodo(index)}
        >
          <Delete fontSize="small" />
        </IconButton>
      </Paper>
    </Grid>
  );
}

export default Todo;
