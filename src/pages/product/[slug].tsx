import CustomButton from "@/components/CustomButton";
import ProductRating from "@/components/ProductRating";
import { Button, Input, Radio, RadioChangeEvent, Space } from "antd";
import Image from "next/image";
import { useRouter } from "next/router";
import React, { useEffect, useState } from "react";

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
  return (
    <div className=" flex md:gap-x-12  my-4 max-md:gap-y-8  max-md:flex-col">
      <div className=" lg:w-4/6 md:w-3/6  max-md:w-full     flex space-x-4">
        <div className=" space-y-3 ">
          {Array.from({ length: 4 }, (_, index) => (
            <div className=" bg-gray-100 w-[120px] p-4">
              <Image
                key={(index + 1).toString()}
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
          <Radio.Group onChange={onChange} value={value}>
            <Radio value={1}>A</Radio>
            <Radio value={2}>B</Radio>
          </Radio.Group>
        </div>

        <div className="my-4">
          Sizes <CustomButton btnText="XS" handleSubmit={undefined} />
          <Button>S</Button>
          <Button>M</Button>
          <Button>L</Button> <Button>XL</Button>
        </div>

        <div>
          {" "}
          <Space.Compact>
            <Button type="primary">+</Button>
            <Input defaultValue="2" rootClassName="!w-16 text-center" />
            <Button type="primary">-</Button>
          </Space.Compact>
          <Button type="primary">Buy Now</Button>
          <Button type="primary">-</Button>
        </div>
      </div>
    </div>
  );
}
