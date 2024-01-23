import React from "react";
import { Input, Button } from "antd";
import { MailOutlined, QrcodeOutlined } from "@ant-design/icons";
import {
  FacebookIcon,
  InstaIcon,
  LinkdinIcon,
  TwitterIcon,
} from "@/assets/icons/icons";
import Image from "next/image";
import Link from "next/link";
// import { MessageTextIcon } from "@/assets/icons/icons";

export default function Footer() {
  return (
    <footer
      className="bg-black text-white px-10 pt-5
     pb-10"
    >
      <div className="flex flex-wrap justify-between">
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
          <Link href="mailto:exclusive@gmail.com" className="mb-2">
            exclusive@gmail.com
          </Link>
          <Link href="tel:+8801588889999" className="mb-2">
            +88015-8888-9999
          </Link>
        </div>
        <div className="flex flex-col mt-0">
          <span className="font-bold text-lg mb-2 mt-0">Account</span>
          <ul>
            <li className="mb-2">
              <Link href="/">Home</Link>
            </li>
            <li className="mb-2">
              <Link href="/my-account"> My Account</Link>
            </li>
            <li className="mb-2">
              <Link href="/cart">Cart</Link>
            </li>
            <li className="mb-2">
              <Link href="/wishlist">Wishlist</Link>
            </li>
            <li className="mb-2">
              <Link href="/shop">Shop</Link>
            </li>
          </ul>
          {/* <a href="/my-account" className="mb-2">
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
          </a> */}
        </div>

        <div className="flex flex-col mt-0">
          <span className="font-bold text-lg mb-2 mt-0">Quick Link</span>
          <ul>
            <li className="mb-2">
              <Link href="/privacy-policy">Privacy Policy</Link>
            </li>
            <li className="mb-2">
              <Link href="/terms-of-use">Terms Of Use</Link>
            </li>
            <li className="mb-2">
              <Link href="/faq">FAQ</Link>
            </li>
            <li className="mb-2">
              <Link href="/contact">Contact</Link>
            </li>
          </ul>
          {/* <a href="/privacy-policy" className="mb-2">
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
          </a> */}
        </div>

        <div className="flex flex-col mt-0">
          <span className="font-bold text-lg mb-2 mt-0">Download App</span>
          <span className="mb-2">Save $3 with App New User Only</span>
          {/* <Button icon={<QrcodeOutlined />} className="mb-2" /> */}
          <div className="items-center flex justify-between gap-2 mt-2">
            <Image
              className="aspect-square object-contain object-center !w-28 justify-center items-center overflow-hidden shrink-0 max-w-full my-auto"
              src={
                "https://cdn.builder.io/api/v1/image/assets/TEMP/eea58754d717cfcc9af195e6cb2ee0d2841c30fecd62d9cef8132dc530d1448d?apiKey=db92e6ea93ef4ab0aac0dabfe1ea0ff5&"
              }
              alt=""
              width={250}
              height={250}
              priority
              layout="responsive"
            />
            <div className="items-center self-stretch flex grow basis-[0%] flex-col">
              <Image
                className="aspect-[2.75] object-contain object-center w-[110px] overflow-hidden"
                src={
                  "https://cdn.builder.io/api/v1/image/assets/TEMP/f5a0011e5a16669b37837b7d57675eb91b8099c37f37be9c4d12e698e193d49d?apiKey=db92e6ea93ef4ab0aac0dabfe1ea0ff5&"
                }
                alt=""
                width={250}
                height={250}
                priority
                layout="responsive"
              />
              <Image
                className="aspect-[2.75] object-contain object-center w-[110px] justify-center items-center overflow-hidden mt-1"
                src={
                  "https://cdn.builder.io/api/v1/image/assets/TEMP/e815fcb4af82376341f7e3002c89152cb3b9e6d29e4d0efcb4e01999aa39bcc1?apiKey=db92e6ea93ef4ab0aac0dabfe1ea0ff5&"
                }
                alt=""
                width={250}
                height={250}
                priority
                layout="responsive"
              />
            </div>
          </div>
          <div className="flex justify-between mt-2">
            <FacebookIcon />
            <TwitterIcon />
            <InstaIcon />
            <LinkdinIcon />
          </div>
        </div>
      </div>
      <div className="text-center border-t border-gray-800 mt-4 pt-4">
        © Copyright Rimel 2022. All rights reserved.
      </div>
    </footer>
    // <div className="justify-end items-center bg-black flex flex-col pt-12 pb-6">
    //   <div className="justify-between items-start flex w-full max-w-[1170px] gap-5 mt-8 px-5 max-md:max-w-full max-md:flex-wrap">
    //     <div className="items-stretch flex grow basis-[0%] flex-col py-0.5 self-start">
    //       <div className="text-neutral-50 text-2xl font-bold leading-6 tracking-wider max-md:mr-1.5">
    //         Exclusive
    //       </div>
    //       <div className="text-neutral-50 text-xl font-medium leading-7 mt-7 max-md:mr-1.5">
    //         Subscribe
    //       </div>
    //       <div className="text-neutral-50 text-base leading-6 whitespace-nowrap mt-6">
    //         Get 10% off your first order
    //       </div>
    //       <div className="items-stretch rounded border-[color:var(--Text,#FAFAFA)] flex justify-between gap-5 mt-4 px-4 py-3 border-[1.5px] border-solid">
    //         <div className="text-neutral-50 text-base leading-6">
    //           Enter your email
    //         </div>
    //         <img
    //           loading="lazy"
    //           src="https://cdn.builder.io/api/v1/image/assets/TEMP/6bac8a3a4556d00df359345f40c4304fa01a92d9d278e1cc8be218cdcd6e20d8?apiKey=db92e6ea93ef4ab0aac0dabfe1ea0ff5&"
    //           className="aspect-square object-contain object-center w-6 overflow-hidden shrink-0 max-w-full"
    //         />
    //       </div>
    //     </div>
    //     <div className="items-stretch flex grow basis-[0%] flex-col self-start">
    //       <div className="text-neutral-50 text-xl font-medium leading-7">
    //         Support
    //       </div>
    //       <div className="text-neutral-50 text-base leading-6 mt-6">
    //         111 Bijoy sarani, Dhaka, DH 1515, Bangladesh.
    //       </div>
    //       <div className="text-neutral-50 text-base leading-6 whitespace-nowrap mt-4">
    //         exclusive@gmail.com
    //       </div>
    //       <div className="text-neutral-50 text-base leading-6 whitespace-nowrap mt-4">
    //         +88015-88888-9999
    //       </div>
    //     </div>
    //     <div className="items-stretch self-stretch flex grow basis-[0%] flex-col">
    //       <div className="text-neutral-50 text-xl font-medium leading-7">
    //         Account
    //       </div>
    //       <div className="text-neutral-50 text-base leading-6 whitespace-nowrap mt-6">
    //         My Account
    //       </div>
    //       <div className="text-neutral-50 text-base leading-6 whitespace-nowrap mt-4">
    //         Login / Register
    //       </div>
    //       <div className="text-neutral-50 text-base leading-6 mt-4">Cart</div>
    //       <div className="text-neutral-50 text-base leading-6 mt-4">
    //         Wishlist
    //       </div>
    //       <div className="text-neutral-50 text-base leading-6 mt-4">Shop</div>
    //     </div>
    //     <div className="items-stretch flex basis-[0%] flex-col self-start">
    //       <div className="text-neutral-50 text-xl font-medium leading-7 whitespace-nowrap">
    //         Quick Link
    //       </div>
    //       <div className="text-neutral-50 text-base leading-6 whitespace-nowrap mt-6">
    //         Privacy Policy
    //       </div>
    //       <div className="text-neutral-50 text-base leading-6 whitespace-nowrap mt-4">
    //         Terms Of Use
    //       </div>
    //       <div className="text-neutral-50 text-base leading-6 mt-4">FAQ</div>
    //       <div className="text-neutral-50 text-base leading-6 mt-4">
    //         Contact
    //       </div>
    //     </div>
    //     <div className="items-stretch flex grow basis-[0%] flex-col self-start">
    //       <div className="text-neutral-50 text-xl font-medium leading-7">
    //         Download App
    //       </div>
    //       <div className="text-neutral-50 text-xs font-medium leading-5 whitespace-nowrap mt-6">
    //         Save $3 with App New User Only
    //       </div>
    //       <div className="items-center flex justify-between gap-2 mt-2">
    //         <img
    //           loading="lazy"
    //           srcSet="https://cdn.builder.io/api/v1/image/assets/TEMP/eea58754d717cfcc9af195e6cb2ee0d2841c30fecd62d9cef8132dc530d1448d?apiKey=db92e6ea93ef4ab0aac0dabfe1ea0ff5&width=100 100w, https://cdn.builder.io/api/v1/image/assets/TEMP/eea58754d717cfcc9af195e6cb2ee0d2841c30fecd62d9cef8132dc530d1448d?apiKey=db92e6ea93ef4ab0aac0dabfe1ea0ff5&width=200 200w, https://cdn.builder.io/api/v1/image/assets/TEMP/eea58754d717cfcc9af195e6cb2ee0d2841c30fecd62d9cef8132dc530d1448d?apiKey=db92e6ea93ef4ab0aac0dabfe1ea0ff5&width=400 400w, https://cdn.builder.io/api/v1/image/assets/TEMP/eea58754d717cfcc9af195e6cb2ee0d2841c30fecd62d9cef8132dc530d1448d?apiKey=db92e6ea93ef4ab0aac0dabfe1ea0ff5&width=800 800w, https://cdn.builder.io/api/v1/image/assets/TEMP/eea58754d717cfcc9af195e6cb2ee0d2841c30fecd62d9cef8132dc530d1448d?apiKey=db92e6ea93ef4ab0aac0dabfe1ea0ff5&width=1200 1200w, https://cdn.builder.io/api/v1/image/assets/TEMP/eea58754d717cfcc9af195e6cb2ee0d2841c30fecd62d9cef8132dc530d1448d?apiKey=db92e6ea93ef4ab0aac0dabfe1ea0ff5&width=1600 1600w, https://cdn.builder.io/api/v1/image/assets/TEMP/eea58754d717cfcc9af195e6cb2ee0d2841c30fecd62d9cef8132dc530d1448d?apiKey=db92e6ea93ef4ab0aac0dabfe1ea0ff5&width=2000 2000w, https://cdn.builder.io/api/v1/image/assets/TEMP/eea58754d717cfcc9af195e6cb2ee0d2841c30fecd62d9cef8132dc530d1448d?apiKey=db92e6ea93ef4ab0aac0dabfe1ea0ff5&"
    //           className="aspect-square object-contain object-center w-20 justify-center items-center overflow-hidden shrink-0 max-w-full my-auto"
    //         />
    //         <div className="items-center self-stretch flex grow basis-[0%] flex-col">
    //           <img
    //             loading="lazy"
    //             srcSet="https://cdn.builder.io/api/v1/image/assets/TEMP/f5a0011e5a16669b37837b7d57675eb91b8099c37f37be9c4d12e698e193d49d?apiKey=db92e6ea93ef4ab0aac0dabfe1ea0ff5&width=100 100w, https://cdn.builder.io/api/v1/image/assets/TEMP/f5a0011e5a16669b37837b7d57675eb91b8099c37f37be9c4d12e698e193d49d?apiKey=db92e6ea93ef4ab0aac0dabfe1ea0ff5&width=200 200w, https://cdn.builder.io/api/v1/image/assets/TEMP/f5a0011e5a16669b37837b7d57675eb91b8099c37f37be9c4d12e698e193d49d?apiKey=db92e6ea93ef4ab0aac0dabfe1ea0ff5&width=400 400w, https://cdn.builder.io/api/v1/image/assets/TEMP/f5a0011e5a16669b37837b7d57675eb91b8099c37f37be9c4d12e698e193d49d?apiKey=db92e6ea93ef4ab0aac0dabfe1ea0ff5&width=800 800w, https://cdn.builder.io/api/v1/image/assets/TEMP/f5a0011e5a16669b37837b7d57675eb91b8099c37f37be9c4d12e698e193d49d?apiKey=db92e6ea93ef4ab0aac0dabfe1ea0ff5&width=1200 1200w, https://cdn.builder.io/api/v1/image/assets/TEMP/f5a0011e5a16669b37837b7d57675eb91b8099c37f37be9c4d12e698e193d49d?apiKey=db92e6ea93ef4ab0aac0dabfe1ea0ff5&width=1600 1600w, https://cdn.builder.io/api/v1/image/assets/TEMP/f5a0011e5a16669b37837b7d57675eb91b8099c37f37be9c4d12e698e193d49d?apiKey=db92e6ea93ef4ab0aac0dabfe1ea0ff5&width=2000 2000w, https://cdn.builder.io/api/v1/image/assets/TEMP/f5a0011e5a16669b37837b7d57675eb91b8099c37f37be9c4d12e698e193d49d?apiKey=db92e6ea93ef4ab0aac0dabfe1ea0ff5&"
    //             className="aspect-[2.75] object-contain object-center w-[110px] overflow-hidden"
    //           />
    //           <img
    //             loading="lazy"
    //             srcSet="https://cdn.builder.io/api/v1/image/assets/TEMP/e815fcb4af82376341f7e3002c89152cb3b9e6d29e4d0efcb4e01999aa39bcc1?apiKey=db92e6ea93ef4ab0aac0dabfe1ea0ff5&width=100 100w, https://cdn.builder.io/api/v1/image/assets/TEMP/e815fcb4af82376341f7e3002c89152cb3b9e6d29e4d0efcb4e01999aa39bcc1?apiKey=db92e6ea93ef4ab0aac0dabfe1ea0ff5&width=200 200w, https://cdn.builder.io/api/v1/image/assets/TEMP/e815fcb4af82376341f7e3002c89152cb3b9e6d29e4d0efcb4e01999aa39bcc1?apiKey=db92e6ea93ef4ab0aac0dabfe1ea0ff5&width=400 400w, https://cdn.builder.io/api/v1/image/assets/TEMP/e815fcb4af82376341f7e3002c89152cb3b9e6d29e4d0efcb4e01999aa39bcc1?apiKey=db92e6ea93ef4ab0aac0dabfe1ea0ff5&width=800 800w, https://cdn.builder.io/api/v1/image/assets/TEMP/e815fcb4af82376341f7e3002c89152cb3b9e6d29e4d0efcb4e01999aa39bcc1?apiKey=db92e6ea93ef4ab0aac0dabfe1ea0ff5&width=1200 1200w, https://cdn.builder.io/api/v1/image/assets/TEMP/e815fcb4af82376341f7e3002c89152cb3b9e6d29e4d0efcb4e01999aa39bcc1?apiKey=db92e6ea93ef4ab0aac0dabfe1ea0ff5&width=1600 1600w, https://cdn.builder.io/api/v1/image/assets/TEMP/e815fcb4af82376341f7e3002c89152cb3b9e6d29e4d0efcb4e01999aa39bcc1?apiKey=db92e6ea93ef4ab0aac0dabfe1ea0ff5&width=2000 2000w, https://cdn.builder.io/api/v1/image/assets/TEMP/e815fcb4af82376341f7e3002c89152cb3b9e6d29e4d0efcb4e01999aa39bcc1?apiKey=db92e6ea93ef4ab0aac0dabfe1ea0ff5&"
    //             className="aspect-[2.75] object-contain object-center w-[110px] justify-center items-center overflow-hidden mt-1"
    //           />
    //         </div>
    //       </div>
    //       <div className="items-stretch flex justify-between gap-5 mt-6 pr-8 max-md:pr-5">
    //         <img
    //           loading="lazy"
    //           src="https://cdn.builder.io/api/v1/image/assets/TEMP/30ef1881c8ba382ad841b10dec22c4728e1ac56594cd8fd1b8fc54e4c0c91052?apiKey=db92e6ea93ef4ab0aac0dabfe1ea0ff5&"
    //           className="aspect-square object-contain object-center w-6 overflow-hidden shrink-0 max-w-full"
    //         />
    //         <img
    //           loading="lazy"
    //           src="https://cdn.builder.io/api/v1/image/assets/TEMP/668be31ac1700206d635187ddf4d6bdf0e80f5f6f01cc651e4a74521f74c77ad?apiKey=db92e6ea93ef4ab0aac0dabfe1ea0ff5&"
    //           className="aspect-square object-contain object-center w-6 items-center overflow-hidden shrink-0 max-w-full"
    //         />
    //         <img
    //           loading="lazy"
    //           src="https://cdn.builder.io/api/v1/image/assets/TEMP/d0b67f52bb53b8c3b436cfc50867157e647c1cc5fa6f7cc373ba309b35f3d286?apiKey=db92e6ea93ef4ab0aac0dabfe1ea0ff5&"
    //           className="aspect-square object-contain object-center w-6 justify-center items-center overflow-hidden shrink-0 max-w-full"
    //         />
    //         <img
    //           loading="lazy"
    //           src="https://cdn.builder.io/api/v1/image/assets/TEMP/017f03fd6271e23e94e189db8506f53ec67e53623ecac07e20b0cc0e64aa481c?apiKey=db92e6ea93ef4ab0aac0dabfe1ea0ff5&"
    //           className="aspect-square object-contain object-center w-6 overflow-hidden shrink-0 max-w-full"
    //         />
    //       </div>
    //     </div>
    //   </div>
    //   <div className="items-center self-stretch flex w-full flex-col mt-16 pt-4 px-16 max-md:max-w-full max-md:mt-10 max-md:px-5">
    //     <div className="items-center flex gap-1.5">
    //       <img
    //         loading="lazy"
    //         src="https://cdn.builder.io/api/v1/image/assets/TEMP/207c5d33f1e035178e0be8d020049bff7b4add721531f45a07670b638424cd03?apiKey=db92e6ea93ef4ab0aac0dabfe1ea0ff5&"
    //         className="aspect-square object-contain object-center w-5 justify-center items-center overflow-hidden shrink-0 max-w-full my-auto"
    //       />
    //       <div className="text-white text-base leading-6 self-stretch grow whitespace-nowrap">
    //         Copyright Rimel 2022. All right reserved
    //       </div>
    //     </div>
    //   </div>
    // </div>
  );
}
