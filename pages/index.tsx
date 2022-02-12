import React, { Fragment, useState } from "react";
import AddTodoForm from "../components/add-todo-form";
import List from "../components/list";
import { Paper, Grid } from "@mui/material";

const styles: any = {
  Paper: {
    padding: 20,
    margin: "auto",
    textAlign: "center",
    width: 500
  }
};

export default () => {
  const [list, setList] = useState<any>([]);


  const addToList = (todoValue: any) => {
    const newItem: any = {
      id: new Date().getTime(),
      value: todoValue,
      status: "active"
    }

    setList([...list, newItem]);
  };
  const deleteTodo = (id: number) => {

    setList(list.filter((item: any) => item.id !== id));
  };
  const updateTodo = (id: number) => {
    const newList = [...list];
    const objIndex = newList.findIndex((obj: any) => obj.id === id);
    newList[objIndex].status = "editing";
    console.log(newList)
    setList(newList);
  };
  const saveTodo = (id: any, value: any) => {
    const newList = [...list];
    const objIndex = newList.findIndex((obj: any) => obj.id === id);
    newList[objIndex] = { ...newList[objIndex], status: "active", value };

    setList(newList);
  };
  return (
    <Fragment>
      <Grid container spacing={0}>
        <Grid item xs={12}>
          <Paper
            style={styles.Paper}
          >
            <AddTodoForm addToList={addToList} />
          </Paper>
        </Grid>
        <Grid item xs={12}
          style={styles.Paper}
        >
          <List
            deleteTodo={deleteTodo}
            list={list}
            updateTodo={updateTodo}
            saveTodo={saveTodo}
          />
        </Grid>
      </Grid>
    </Fragment>
  );
};