import PublicLayout from "@/components/layouts/publicLayout";
import "@/styles/globals.css";
import "@/styles/common.scss";
import type { AppProps } from "next/app";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <PublicLayout>
      <Component {...pageProps} />
    </PublicLayout>
  );
}
