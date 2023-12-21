import React from "react";
import { Input, Button } from "antd";
import {
  FacebookOutlined,
  TwitterOutlined,
  InstagramOutlined,
  LinkedinOutlined,
} from "@ant-design/icons";
import { MailOutlined, QrcodeOutlined } from "@ant-design/icons";

export default function Footer() {
  return (
    <footer
      className="bg-black text-white px-10 pt-5
     pb-10"
    >
      <div className="flex flex-wrap justify-between items-center">
        <div className="flex flex-col mt-0">
          <span className="font-bold text-lg mb-2 mt-0">Exclusive</span>
          <span className="mb-2">Subscribe</span>
          <span className="mb-2">Get 10% off your first order</span>
          <Input
            size="large"
            placeholder="Enter your email"
            prefix={<MailOutlined />}
            className="mb-2"
          />
        </div>

        <div className="flex flex-col mt-0">
          <span className="font-bold text-lg mb-2 mt-0">Support</span>
          <address className="not-italic mb-2">
            111 Bijoy Sarani, Dhaka, DH 1515, Bangladesh.
          </address>
          <a href="mailto:exclusive@gmail.com" className="mb-2">
            exclusive@gmail.com
          </a>
          <a href="tel:+8801588889999" className="mb-2">
            +88015-8888-9999
          </a>
        </div>

        <div className="flex flex-col mt-0">
          <span className="font-bold text-lg mb-2 mt-0">Account</span>
          <a href="/my-account" className="mb-2">
            My Account
          </a>
          <a href="/login" className="mb-2">
            Login / Register
          </a>
          <a href="/cart" className="mb-2">
            Cart
          </a>
          <a href="/wishlist" className="mb-2">
            Wishlist
          </a>
          <a href="/shop" className="mb-2">
            Shop
          </a>
        </div>

        <div className="flex flex-col mt-0">
          <span className="font-bold text-lg mb-2 mt-0">Quick Link</span>
          <a href="/privacy-policy" className="mb-2">
            Privacy Policy
          </a>
          <a href="/terms-of-use" className="mb-2">
            Terms Of Use
          </a>
          <a href="/faq" className="mb-2">
            FAQ
          </a>
          <a href="/contact" className="mb-2">
            Contact
          </a>
        </div>

        <div className="flex flex-col mt-0">
          <span className="font-bold text-lg mb-2 mt-0">Download App</span>
          <span className="mb-2">Save $3 with App New User Only</span>
          <Button icon={<QrcodeOutlined />} className="mb-2" />
          <div className="flex justify-between">
            <FacebookOutlined className="text-2xl" />
            <TwitterOutlined className="text-2xl" />
            <InstagramOutlined className="text-2xl" />
            <LinkedinOutlined className="text-2xl" />
          </div>
        </div>
      </div>
      <div className="text-center border-t border-gray-800 mt-4 pt-4">
        © Copyright Rimel 2022. All rights reserved.
      </div>
    </footer>
  );
}
