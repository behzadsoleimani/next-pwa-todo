import React from "react";
import AddTodoForm from "../components/add-todo-form";
import List from "../components/list";
import { Paper, Grid, AppBar, Typography } from "@mui/material";
import { ReactQueryDevtools } from "react-query/devtools";
import styles from '../styles/Home.module.css';


const Layout = ({ children }: any) => (
  <Paper
    elevation={0}
    className={styles.layout}
  >
    <AppBar color="primary" position="static" style={{ height: 64 }}>
      <Typography color="inherit" className={styles.para}>TODO APP</Typography>
    </AppBar>
    {children}
  </Paper>
);

export default function Home(){

  return (
    <Layout>
      <Grid container className={styles.parent}>
        <Grid item xs={12}>
          <Paper
            className={styles.paper}
          >
            <AddTodoForm
            />
          </Paper>
        </Grid>
        <Grid item xs={12}
          className={styles.paper}
        >
          <List
          />
        </Grid>
      </Grid>
      {/* <ReactQueryDevtools initialIsOpen={false} /> */}
    </Layout>
  );
};

