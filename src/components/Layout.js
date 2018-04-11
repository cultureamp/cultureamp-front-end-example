// @flow
import * as React from "react";
import classNames from "classnames";
import styles from "./Layout.module.scss";

type LayoutProps = {
  children: React.Node
};

class Layout extends React.Component<LayoutProps> {
  render() {
    let content = [];
    let navbar = null;
    let header = null;
    let sidebar = null;
    let footer = null;

    React.Children.toArray(this.props.children).forEach(child => {
      if (!child) return;
      if (child.type.name == NavigationBar.name) {
        navbar = child;
      } else if (child.type.name == Header.name) {
        header = child;
      } else if (child.type.name == Sidebar.name) {
        sidebar = child;
      } else if (child.type.name == Footer.name) {
        footer = child;
      } else {
        content.push(child);
      }
    });

    return (
      <div className={styles.root}>
        {navbar}
        <div className={styles.page}>
          {header}
          <div className={styles.body}>
            {sidebar}
            <div className={styles.content}>{content}</div>
          </div>
          {footer}
        </div>
      </div>
    );
  }

  static NavigationBar = NavigationBar;
  static Sidebar = Sidebar;
  static Header = Header;
  static Footer = Footer;
}

function NavigationBar(props: { children: React.Node }) {
  return <div className={styles.navigationBar}>{props.children}</div>;
}

function Sidebar(props: { children: React.Node }) {
  return <div className={styles.sidebar}>{props.children}</div>;
}

function Header(props: { children: React.Node }) {
  return <div className={styles.header}>{props.children}</div>;
}

function Footer(props: { children: React.Node }) {
  return <div className={styles.footer}>{props.children}</div>;
}

export default Layout;
