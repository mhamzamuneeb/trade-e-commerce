import { Menu, Drawer, Button, Input } from "antd";
import {
  SearchOutlined,
  HeartOutlined,
  ShoppingOutlined,
  UserOutlined,
} from "@ant-design/icons";
import React, { useEffect, useState } from "react";
import { MenuOutlined } from "@ant-design/icons";
import Link from "next/link";
import signupScreen from "@/pages/signup";
import { IconProfile } from "@/assets/icons/icons";
import {
  getToken,
  removeToken,
  setToken,
} from "@/pages/api/auth/[...nextauth]";
import { useAuth } from "@/pages/api/contextApi/authContext";
import { DropdownLoggedOut } from "@/components/dropDown/logoutDropdown";
import { toast } from "react-toastify";
import { useRouter } from "next/router";

const HeaderComponent = () => {
  const token = useAuth().getToken();
  const [dropDown, setdropDown] = useState(false);
  console.log({ token });

  const { setToken } = useAuth();

  const [cartCount, setCartCount] = useState();
  useEffect(() => {
    // const storedToken = getToken();
    // setToken(storedToken);
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
  const handleLogout = () => {
    console.log({ dropDown });
    setdropDown(!dropDown);
  };
  const menuStyle = {
    color: "black",
    selectedTextColor: "orange!important", // Set the text color to black
  };
  const router = useRouter();
  const navigate = useRouter();

  const goToCart = (event: any) => {
    event.preventDefault();

    navigate.push(`/cart`);
  };

  const menu = (
    <Menu mode="horizontal" defaultSelectedKeys={["1"]} style={menuStyle}>
      <Menu.Item
        className="text-black px-4 py-2 hover:text-black-300"
        key="1"
        onClick={() => {
          router.push("/"); // Navigate to the home page when "Home" is clicked
        }}
      >
        Home
      </Menu.Item>
      <Menu.Item
        onClick={() => {
          toast.success("Safdas");
        }}
        className="text-black px-4 py-2 hover:text-black-300"
        key="2
      "
      >
        Contact
      </Menu.Item>
      <Menu.Item className="text-black px-4 py-2 hover:text-black-300" key="3">
        About
      </Menu.Item>
      <Menu.Item className="text-black px-4 py-2 hover:text-black-300" key="4">
        Sign Up
        <Link href="/signup"></Link>
      </Menu.Item>
    </Menu>
  );

  return (
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

      <div className="search-and-icons flex justify-self-end gap-3 ">
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
        {token ? (
          <div className="flex justify-self-end relative">
            <Button
              onClick={handleLogout}
              className="my-4"
              icon={<UserOutlined />}
            />
            <span className="mt-4 absolute ml-0">
              {dropDown &&
                (token ? (
                  <DropdownLoggedOut setDropdown={setdropDown} />
                ) : (
                  <></>
                ))}
            </span>
          </div>
        ) : (
          <></>
        )}
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
