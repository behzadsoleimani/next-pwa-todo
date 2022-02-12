import React from "react";
import { Delete, Edit } from "@mui/icons-material";
import { Grid, Paper } from "@mui/material";
import IconButton from "@mui/material/IconButton";

const styles : any = {
  Icon: {
    marginLeft: "auto"
  },
  Paper: {
    margin: "auto",
    padding: 10,
    display: "flex",
    alignItems: "center",
    marginTop: 10,
    width: 500
  }
};

const Todo = (props: any) => {


  const deleteTodo = (index: number) => {

    props.deleteTodo(index);
  };


    return (
      <Grid
        xs={12}
        item
        key={props.index}
      >
        <Paper elevation={2} style={styles.Paper}>
          <span style={styles.Todo}>{props.todo}</span>
          <IconButton
            color="primary"
            style={styles.Icon}
            onClick={() => props.updateTodo(props.index)}
          >
            <Edit fontSize="small" />
          </IconButton>
          <IconButton
            color="secondary"
            aria-label="Delete"
            onClick={() => deleteTodo(props.index)}
          >
            <Delete fontSize="small" />
          </IconButton>
        </Paper>
      </Grid>
    );
  }

export default Todo;
