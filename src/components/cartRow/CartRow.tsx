import React from "react";
import Image from "next/image";
import { InputNumber } from "antd";

export const CartRow = ({ data, changeQty }: any) => {
  return (
    <div key={data?.id}>
      <div className="cart-header-row flex items-center	">
        <span className="cart-product-title flex items-center	">
          <Image
            className="!w-10"
            src={data?.image}
            alt=""
            width={250}
            height={250}
            priority
          />
          <span>{data?.title}</span>
        </span>
        <span className="cart-product-price">${data?.price}</span>
        <span className="cart-product-quantity">
          <InputNumber
            min={1}
            max={20}
            defaultValue={data?.quantity}
            onChange={(val) => changeQty(data?.id, val)}
          />
        </span>
        <span className="cart-product-total">
          ${data?.price * data?.quantity}
        </span>
      </div>
    </div>
  );
};
