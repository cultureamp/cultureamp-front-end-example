// @flow
import * as React from "react";
import Layout from "./Layout";
import NavigationBar from "cultureamp-style-guide/components/NavigationBar";
import Icon from "cultureamp-style-guide/components/Icon";
import homeIcon from "cultureamp-style-guide/icons/home.svg";
import caIcon from "cultureamp-style-guide/icons/ca-monogram.svg";
import styles from "./AppLayout.scss";

type AppLayoutProps = {
  children: React.Node
};

class AppLayout extends React.Component<AppLayoutProps> {
  renderNav() {
    return (
      <NavigationBar>
        <NavigationBar.Link
          icon={homeIcon}
          href="/"
          tooltip="Home"
          active={true}
        />
        <NavigationBar.Menu
          tooltip="Culture Amp"
          header={null}
          items={[
            {
              label: "About Culture Amp",
              link: "https://www.cultureamp.com/"
            }
          ]}
        >
          <div className={styles.cultureAmpMenu}>
            <Icon
              icon={caIcon}
              role="img"
              title="Culture Amp Logo"
              inheritSize={true}
            />
          </div>
        </NavigationBar.Menu>
      </NavigationBar>
    );
  }

  renderFooter() {
    return <div className={styles.footer}>&copy; Culture Amp 2018.</div>;
  }

  render() {
    return (
      <Layout>
        <Layout.NavigationBar>{this.renderNav()}</Layout.NavigationBar>
        <Layout.Footer>{this.renderFooter()}</Layout.Footer>
        {this.props.children}
      </Layout>
    );
  }
}

export default AppLayout;
