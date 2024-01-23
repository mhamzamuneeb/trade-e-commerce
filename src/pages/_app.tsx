import PublicLayout from "@/components/layouts/publicLayout";
import "@/styles/globals.css";
import "@/styles/common.scss";
import type { AppProps } from "next/app";
import { ConfigProvider } from "antd";
import React from "react";
import { createContext } from "react";
import { SessionProvider } from "next-auth/react";
import { AuthProvider } from "./api/contextApi/authContext";
import theme from "@/theme/themeconfig";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
export default function App({ Component, pageProps }: AppProps) {
  return (
    <SessionProvider session={pageProps.session}>
      {/* <ConfigProvider theme={theme}> */}
      <ToastContainer />
      <AuthProvider>
        <PublicLayout>
          <Component {...pageProps} />
        </PublicLayout>

        {/* </ConfigProvider> */}
      </AuthProvider>
    </SessionProvider>
  );
}
