import { PlusOutlined } from "@ant-design/icons";
import { Button } from "antd";
import { BaseButtonProps } from "antd/es/button/button";
import React from "react";
import styles from "./styles.module.scss";

interface Props {
  handleSubmit: any;
  btnText?: string;
  disabled?: boolean;
  className?: string;
  buttonColor?: string;
  icon?: "Print" | "Share" | "Plus" | "Export";
  btnSize?: BaseButtonProps["size"];
  btnType?: "primary" | "secondary" | "defaults";
}

const CustomButton = ({
  btnText = `Save`,
  handleSubmit,
  disabled = false,
  className = "w-32",
  btnType = "secondary",
  icon = undefined,
  btnSize = "middle",
}: Props) => {
  //   const btnIcon = {
  //     Print: <PrintReceiptIconSvg />,
  //     Share: <ShareReceiptIconSvg />,
  //     Plus: <PlusOutlined className="text-[small]" />,
  //     Export: <ExportSvg />,
  //   };
  //   const authPages = [
  //     LOGIN_ROUTE,
  //     FORGOT_PASSWORD_ROUTE,
  //     RESET_PASSWORD_ROUTE,
  //   ].includes(window.location.pathname);
  //   const defaultClass = authPages ? `w-3/4 h-10` : `h-[2.3rem] min-w-fit w-32`;

  const backgroundColor = btnType === "primary" ? "bg-primary" : "bg-defaults";
  const textColor = btnType === "primary" ? "text-white" : "text-black";

  return (
    <Button
      type={"primary"}
      className={`  h-[2.3rem] min-w-fit ${className} ${
        disabled ? `!text-[darkGray]` : styles[`custom-${btnType}`]
      }   `}
      onClick={handleSubmit}
      icon={undefined}
      disabled={disabled}
      size={btnSize}
    >
      {btnText}
    </Button>
  );
};

export default React.memo(CustomButton);
