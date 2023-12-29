import PublicLayout from "@/components/layouts/publicLayout";
import "@/styles/globals.css";
import "@/styles/common.scss";
import type { AppProps } from "next/app";
import { ConfigProvider } from "antd";
import React from "react";
import { createContext } from "react";

import theme from "@/theme/themeconfig";

export default function App({ Component, pageProps }: AppProps) {
  return (
    // <ConfigProvider theme={theme}>
    <PublicLayout>
      <Component {...pageProps} />
    </PublicLayout>
    // </ConfigProvider>
  );
}
