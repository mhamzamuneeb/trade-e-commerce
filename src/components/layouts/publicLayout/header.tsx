import { Menu, Drawer, Button, Input } from "antd";
import {
  SearchOutlined,
  HeartOutlined,
  ShoppingOutlined,
} from "@ant-design/icons";
import React, { useEffect, useState } from "react";
import { MenuOutlined } from "@ant-design/icons";
import { useRouter } from "next/router";

const HeaderComponent = () => {
  const [cartCount, setCartCount] = useState();
  useEffect(() => {
    fetch("https://fakestoreapi.com/carts")
      .then((res) => res.json())
      .then((json) => {
        console.log(json), setCartCount(json.length);
      });
  }, []);
  const [visible, setVisible] = useState(false);

  const showDrawer = () => {
    setVisible(true);
  };

  const onClose = () => {
    setVisible(false);
  };

  const menuStyle = {
    color: "black",
    selectedTextColor: "orange!important", // Set the text color to black
  };
  const navigate = useRouter();

  const goToCart = (event: any) => {
    event.preventDefault();

    navigate.push(`/cart`);
  };

  const menu = (
    <Menu mode="horizontal" defaultSelectedKeys={["1"]} style={menuStyle}>
      <Menu.Item className="text-black px-4 py-2 hover:text-black-300" key="1">
        Home
      </Menu.Item>
      <Menu.Item className="text-black px-4 py-2 hover:text-black-300" key="2">
        Contact
      </Menu.Item>
      <Menu.Item className="text-black px-4 py-2 hover:text-black-300" key="3">
        About
      </Menu.Item>
      <Menu.Item className="text-black px-4 py-2 hover:text-black-300" key="4">
        Sign Up
      </Menu.Item>
    </Menu>
  );

  return (
    // <header className="bg-white p-4 flex justify-between items-center border-b">
    //   <div className="flex items-center space-x-4">
    //     <Button className="md:hidden" onClick={showDrawer}>
    //       {/* Here you might want to add a hamburger icon */}
    //     </Button>
    //     <h5 className="font-bold">Exclusive</h5>
    //   </div>

    //   {menu}

    //   <div className="flex space-x-2">
    //     <Input
    //       className="hidden md:block"
    //       placeholder="What are you looking for?"
    //       prefix={<SearchOutlined />}
    //     />
    //     <Button icon={<HeartOutlined />} />
    //     <Button icon={<ShoppingOutlined />} />
    //   </div>

    //   <Drawer
    //     title="Basic Drawer"
    //     placement="right"
    //     onClose={onClose}
    //     visible={visible}
    //   >
    //     {menu}
    //   </Drawer>
    // </header>
    <header className="bg-white text-white p-4 md:grid lg:grid grid-cols-3 gap-4 max-w-screen-xl mx-auto border-b">
      <div className="flex items-center space-x-4   ">
        <div className="  sm:block lg:hidden md:hidden ">
          <Button className="  " onClick={showDrawer}>
            <MenuOutlined /> {/* Here you might want to add a hamburger icon */}
          </Button>
        </div>
        <h5 className="font-bold text-black">Exclusive</h5>
      </div>

      <div className="menu-container flex justify-center mx-2 hidden  md:block lg:block">
        {menu}
      </div>

      <div className="search-and-icons flex justify-self-end gap-3">
        <Input
          className="search-input my-4"
          placeholder="What are you looking for?"
          prefix={<SearchOutlined />}
        />
        <Button className=" my-4" icon={<HeartOutlined />} />
        <Button
          onClick={goToCart}
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
};

export default HeaderComponent;
