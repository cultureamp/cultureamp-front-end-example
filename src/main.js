// @flow
import * as React from "react";
import ReactDOM from "react-dom";
import AppLayout from "components/AppLayout";
import Layout from "components/Layout";
import styles from "./main.scss";

function whenReady(cb) {
  if (document.readyState === "complete") {
    cb();
  } else {
    document.addEventListener("DOMContentLoaded", function(event) {
      cb();
    });
  }
}

whenReady(() => {
  ReactDOM.render(
    <AppLayout>
      <h1 className={styles.header}>Hello</h1>
      <p className={styles.paragraph}>
        This is your repo. You can add React stuff in here, maybe even Elm
        stuff!
      </p>
      <Layout.Sidebar>We can even do a sidebar.</Layout.Sidebar>
    </AppLayout>,
    document.getElementById("app-container")
  );
});
