import React from "react";
import { useSelector, useDispatch } from "react-redux";
import cs from "./Header.module.css";
import { NavLink } from "react-router-dom";
import { Layout, Menu, Avatar, Badge, Row, Col, Button } from "antd";
import { AntDesignOutlined } from "@ant-design/icons";
import { selectIsAuth, selectUserLogin } from "../../MyRedux/auth-selector";
import { logout } from "../../MyRedux/auth-reducer";

const Header = (props) => {
    const { Header } = Layout;
    const isAuth = useSelector(selectIsAuth);
    const login = useSelector(selectUserLogin);
    const dispatch = useDispatch();

    const logoutCallback = () => {
        // debugger
        dispatch(logout());
    };

    return (
        <Header className="header" style={{ backgroundColor: "#fff" }}>
            <div className="logo" />
            <Row>
                <Col span={17}>
                    <Menu
                        theme="light"
                        mode="horizontal"
                        defaultSelectedKeys={["1"]}
                    >
                        <Menu.Item key="1">Developers</Menu.Item>
                    </Menu>
                </Col>
                {isAuth ? (
                    <>
                        <Col span={3}>
                            <div>
                                {login}{" "}
                                <Button type="link" onClick={logoutCallback}>
                                    Log Out
                                </Button>
                            </div>
                        </Col>
                        <Col span={2}>
                            <Badge count={1}>
                                <Avatar
                                    style={{
                                        backgroundColor: "#1890ff",
                                    }}
                                    icon={<AntDesignOutlined />}
                                />
                                <span className="avatar-item"></span>
                            </Badge>
                        </Col>
                    </>
                ) : (
                    <Col span={4}>
                        <NavLink to="/Login" className={cs.navlink}>
                            <Button type="link">Login</Button>
                        </NavLink>
                    </Col>
                )}
            </Row>
        </Header>
    );
};

export default Header;
