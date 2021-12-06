import React from "react";
import { Menu } from "antd";
//import appg from

function LeftMenu(props) {
  return (
    <Menu mode={props.mode}>
      <Menu.Item key="favorite">
        <a href="/favorite">FAVORITES</a>
      </Menu.Item>
      <Menu.Item key="DASHBOARD">
        <a href="/Appg">DASHBOARD</a>
      </Menu.Item>
    </Menu>
  );
}

export default LeftMenu;
