import CustomButton from "@/components/CustomButton";
import ProductRating from "@/components/ProductRating";
import { HeartOutlined } from "@ant-design/icons";
import { Button, Input, Radio, RadioChangeEvent, Space } from "antd";
import Image from "next/image";
import { useRouter } from "next/router";
import React, { useEffect, useState } from "react";
import styles from "./styles.module.css";

export default function ProductDetail({}) {
  const router = useRouter();
  const [data, setData] = useState<any>(undefined);
  const slug = router.query?.slug;
  useEffect(() => {
    // Side effect code goes here
    slug &&
      fetch(`https://fakestoreapi.com/products/${slug}`)
        .then((res) => res?.json())
        .then((json) => {
          setData(json);
          console.log(json);
        });
  }, [slug]);
  const [value, setValue] = useState(1);

  const onChange = (e: RadioChangeEvent) => {
    console.log("radio checked", e.target.value);
    setValue(e.target.value);
  };
  const [activeSize, setActiveSize] = useState("XS");

  const handleSizeClick = (size: any) => {
    setActiveSize(size);
  };

  const customButtons = [
    { text: "XS", className: "w-0.5" },
    { text: "S", className: "w-0.5 mx-1.5" },
    { text: "M", className: "w-0.5" },
    { text: "L", className: "w-0.5 mx-1.5" },
    { text: "XL", className: "w-0.5" },
  ];

  return (
    <div className=" flex md:gap-x-12  my-4 max-md:gap-y-8  max-md:flex-col">
      <div className=" lg:w-4/6 md:w-3/6  max-md:w-full     flex space-x-4">
        <div className=" space-y-3 ">
          {Array.from({ length: 4 }, (_, index) => (
            <div className=" bg-gray-100 w-[120px] p-4" key={data?.id + index}>
              <Image
                key={`${data?.id}-${(index + 1).toString()}`}
                src={data?.image}
                className="h-auto m-auto w-full max-h-[80px] object-contain "
                alt=""
                width={100}
                height={100}
              />
            </div>
          ))}
        </div>
        <div className="bg-gray-100 w-full">
          <Image
            key={`${data?.id}-main`}
            src={data?.image}
            alt=""
            width={100}
            height={200}
            className="h-full w-auto object-scale-down !m-auto "
          />
        </div>
      </div>
      <div className=" lg:w-2/6  md:w-3/6 max-md:w-full  space-y-2">
        <h5>{data?.title}</h5>
        <ProductRating rating={data?.rating} />
        <div className=" font-semibold text-lg">${data?.price}</div>
        <p className=" text-base">{data?.description}</p>

        <div className="mt-6">
          Colors{" "}
          <Radio.Group
            onChange={onChange}
            value={value}
            className="primary ant-radio-button-wrapper-checked"
          >
            <Radio value={1}>A</Radio>
            <Radio value={2}>B</Radio>
          </Radio.Group>
        </div>

        <div className="my-4">
          Sizes{" "}
          {customButtons.map((button, index) => (
            <CustomButton
              key={index}
              btnType={activeSize === button.text ? "primary" : "defaults"}
              className={button.className}
              btnText={button.text}
              handleSubmit={() => handleSizeClick(button.text)}
            />
          ))}
          {/* <CustomButton
            btnType="primary"
            className="w-0.5"
            btnText="XS"
            handleSubmit={undefined}
          />
          <CustomButton
            btnType="primary"
            className="w-0.5 mx-1.5"
            btnText="S"
            handleSubmit={undefined}
          />
          <CustomButton
            btnType="primary"
            className="w-0.5"
            btnText="M"
            handleSubmit={undefined}
          />
          <CustomButton
            btnType="primary"
            className="w-0.5 mx-1.5"
            btnText="L"
            handleSubmit={undefined}
          />
          <CustomButton
            btnType="primary"
            className="w-0.5"
            btnText="Xl"
            handleSubmit={undefined}
          /> */}
        </div>

        <div>
          {" "}
          <Space.Compact>
            <CustomButton
              btnType="primary"
              btnText="+"
              handleSubmit={undefined}
              className="w-2"
            />
            <Input defaultValue="2" rootClassName="!w-16 text-center" />
            <CustomButton
              btnType="primary"
              btnText="-"
              handleSubmit={undefined}
              className="w-2 "
            />
          </Space.Compact>
          <CustomButton
            btnType="primary"
            btnText="Buy Now"
            handleSubmit={undefined}
            className="w-3 mx-4"
          />
          <Button className="" type="default" icon={<HeartOutlined />} />
        </div>
      </div>
    </div>
  );
}
