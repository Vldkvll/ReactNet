import "antd/dist/antd.css";
import React, { Suspense } from "react";
import "antd/dist/antd.css";
import "./App.css";
import { Route, withRouter, Switch, Link } from "react-router-dom";
import Settings from "./components/Settings/Settings";
import News from "./components/News/News";
import Music from "./components/Music/Music";
import Sidebar from "./components/Sidebar/Sidebar";
// import DialogsContainer from "./components/Dialogs/DialogsContainer";
import UsersContainer from "./components/Users/UsersContainer";
// import ProfileContainer from "./components/Profile/ProfileContainer";
import Header from "./components/Header/Header";
import LoginPage from "./Login/login";
import { connect } from "react-redux";
import { compose } from "redux";
import { initializeApp } from "./MyRedux/app-reducer";
import Preloader from "./components/Common/Preloader/Preloader";
import withSuspense from "./hoc/withSuspense";

import { Layout, Menu, Breadcrumb } from "antd";
import {
    UserOutlined,
    LaptopOutlined,
    NotificationOutlined,
} from "@ant-design/icons";

const { SubMenu } = Menu;
const { Content, Footer, Sider } = Layout;

const ProfileContainer = React.lazy(() =>
    import("./components/Profile/ProfileContainer")
);
const DialogsContainer = React.lazy(() =>
    import("./components/Dialogs/DialogsContainer")
);
const PageChat = React.lazy(() => import("./pages/Chat/PageChat"));

class App extends React.Component {
    componentDidMount() {
        this.props.initializeApp();
    }

    render() {
        if (!this.props.initializeFromState) {
            return <Preloader />;
        }
        return (
            <>
                <Layout>
                    <Header />
                    <Content style={{ padding: "0 50px" }}>
                        <Breadcrumb style={{ margin: "16px 0" }}>
                            <Breadcrumb.Item>Home</Breadcrumb.Item>
                            <Breadcrumb.Item>List</Breadcrumb.Item>
                            <Breadcrumb.Item>App</Breadcrumb.Item>
                        </Breadcrumb>
                        <Layout
                            className="site-layout-background"
                            style={{ padding: "24px 0" }}
                        >
                            <Sider
                                className="site-layout-background"
                                width={200}
                            >
                                <Menu
                                    mode="inline"
                                    defaultSelectedKeys={["2"]}
                                    defaultOpenKeys={["sub1"]}
                                    style={{ height: "100%" }}
                                >
                                    <SubMenu
                                        key="sub1"
                                        icon={<UserOutlined />}
                                        title="Profile"
                                    >
                                        <Menu.Item key="1">
                                            <div>
                                                <Link to="/Profile">
                                                    Profile
                                                </Link>
                                            </div>
                                        </Menu.Item>
                                        <Menu.Item key="2">
                                            <div>
                                                <Link to="/Chat">Chat</Link>
                                            </div>
                                        </Menu.Item>
                                        <Menu.Item key="3">
                                            <div>
                                                <Link to="/Dialogs">
                                                    Messages
                                                </Link>
                                            </div>
                                        </Menu.Item>
                                    </SubMenu>
                                    <SubMenu
                                        key="sub2"
                                        icon={<LaptopOutlined />}
                                        title="Developers"
                                    >
                                        <Menu.Item key="5">
                                            <div>
                                                <Link to="/Users">Users</Link>
                                            </div>
                                        </Menu.Item>
                                        {/* <Menu.Item key="6">option6</Menu.Item>
                                        <Menu.Item key="7">option7</Menu.Item>
                                        <Menu.Item key="8">option8</Menu.Item> */}
                                    </SubMenu>
                                    <SubMenu
                                        key="sub3"
                                        icon={<NotificationOutlined />}
                                        title="Contact"
                                    >
                                        <Menu.Item key="9">option9</Menu.Item>
                                        <Menu.Item key="10">option10</Menu.Item>
                                        <Menu.Item key="11">option11</Menu.Item>
                                        <Menu.Item key="12">option12</Menu.Item>
                                    </SubMenu>
                                </Menu>
                            </Sider>
                            <Content
                                style={{ padding: "0 24px", minHeight: 280 }}
                            >
                                <Switch>
                                    <Route
                                        path="/profile/:userId?"
                                        render={() => {
                                            return (
                                                <div>
                                                    <Suspense
                                                        fallback={
                                                            <div>
                                                                Loading...
                                                            </div>
                                                        }
                                                    >
                                                        <section>
                                                            <ProfileContainer />
                                                        </section>
                                                    </Suspense>
                                                </div>
                                            );
                                        }}
                                    />
                                    <Route
                                        path="/login"
                                        render={withSuspense(LoginPage)}
                                    />
                                    <Route
                                        path="/chat"
                                        render={withSuspense(PageChat)}
                                    />
                                    <Route
                                        path="/dialogs"
                                        render={withSuspense(DialogsContainer)}
                                    />
                                    <Route
                                        path="/users"
                                        render={() => <UsersContainer />}
                                    />
                                    <Route path="/settings" render={Settings} />
                                    <Route path="/news" component={News} />
                                    <Route path="/music" component={Music} />
                                    <Route
                                        path="/sidebar"
                                        component={Sidebar}
                                    />
                                </Switch>
                            </Content>
                        </Layout>
                    </Content>
                    <Footer style={{ textAlign: "center" }}>
                        Social Network ©2020 Created by Me
                    </Footer>
                </Layout>
            </>
        );
    }
}

const mapStateToProps = (state) => ({
    initializeFromState: state.app.initialized,
});

export default compose(
    withRouter(connect(mapStateToProps, { initializeApp })(App))
);
