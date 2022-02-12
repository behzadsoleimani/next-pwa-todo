import React from "react";
import Todo from "./todo-item";
import EditTodo from "../components/edit-todo";
import { Grid } from "@mui/material";

const List = (props: any) => {

const renderTodo = (item: any) => {
      return (
          item.status === "active" ? 
        <Todo
          key={item.id}
          index={item.id}
          todo={item.value}
          deleteTodo={props.deleteTodo}
          updateTodo={props.updateTodo}
        /> 
        : 
        <EditTodo
          key={item.id}
          index={item.id}
          todo={item.value}
          saveTodo={props.saveTodo}
        /> 
      );
    }
    return (
      <Grid container>
        {props.list.map((item: any) => renderTodo(item))}
      </Grid>
    );
}

export default List;
