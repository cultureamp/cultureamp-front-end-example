// @flow
import * as React from "react";
import ReactDOM from "react-dom";
import AppLayout from "./AppLayout";
import styles from "./main.scss";

ReactDOM.render(
  <AppLayout>
    <h1 className={styles.header}>Hello</h1>
  </AppLayout>,
  document.getElementById("app-container")
);
