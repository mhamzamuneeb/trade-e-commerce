import { Layout, Menu, Input, Button, Drawer } from "antd";
import {
  SearchOutlined,
  HeartOutlined,
  ShoppingOutlined,
  MenuOutlined,
} from "@ant-design/icons";
import { useState } from "react";
export default function Header({}) {
  const [visible, setVisible] = useState(false);

  const showDrawer = () => {
    setVisible(true);
  };

  const onClose = () => {
    setVisible(false);
  };

  const menuStyle = {
    color: "black",
    text: "black",
    // Set the text color to black
  };

  const menu = (
    <Menu mode="horizontal" defaultSelectedKeys={["1"]} style={menuStyle}>
      <Menu.Item
        className="text-black color-black px-4 py-2 hover:text-black-300"
        key="1"
      >
        Home
      </Menu.Item>
      <Menu.Item className="text-black px-4 py-2 hover:text-black-300" key="2">
        Contact
      </Menu.Item>
      <Menu.Item className="text-black px-4 py-2 hover:text-black-100" key="3">
        About
      </Menu.Item>
      <Menu.Item className="text-black px-4 py-2 hover:text-black-300" key="4">
        Sign Up
      </Menu.Item>
    </Menu>
  );

  return (
    <header className="bg-blue text-white p-4 grid grid-cols-3 gap-4 max-w-screen-xl mx-auto">
      <div className="logo text-black font-bold flex justify-self-start">
        <h5 className="search-input my-4">Exclusive</h5>
      </div>

      <div className="menu-container flex justify-center mx-2">{menu}</div>

      <div className="search-and-icons flex justify-self-end gap-3">
        <Input
          className="search-input my-4"
          placeholder="What are you looking for?"
          prefix={<SearchOutlined />}
        />
        <Button className=" my-4" icon={<HeartOutlined />} />
        <Button
          className="fa fa-shopping-cart  my-4"
          icon={<ShoppingOutlined />}
        />
      </div>

      <Drawer
        title="Basic Drawer"
        placement="right"
        onClick={onClose}
        onClose={onClose}
        visible={visible}
      >
        {menu}
      </Drawer>
    </header>
  );
}
