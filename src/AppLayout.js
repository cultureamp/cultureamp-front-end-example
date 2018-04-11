// @flow
import * as React from "react";
import NavigationBar from "cultureamp-style-guide/components/NavigationBar";

type AppLayoutProps = {
  children: React.Node
};

class AppLayout extends React.Component<> {
  render() {
    return (
      <div>
        <NavigationBar />
        <div>{children}</div>
      </div>
    );
  }
}

export default AppLayout;
