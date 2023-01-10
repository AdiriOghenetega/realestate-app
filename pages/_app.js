import "../styles/globals.css";
import { ChakraProvider } from "@chakra-ui/react";
import NextNProgress from "nextjs-progressbar";
import Header from "../components/header";
import Footer from "../components/footer";
import Head from "next/head";

export default function App({ Component, pageProps }) {
  if (Component.getLayout) {
    return Component.getLayout(<Component {...pageProps} />);
  }

  return (
    <ChakraProvider>
      <NextNProgress />
      <Head>
        <title>PHrealty</title>
        <meta name="description" conntent="a realty website" />
        <link rel="icon" href="/favicon.ico" type="image/x-icon" />
      </Head>
      <Header />
      <Component {...pageProps} />
      <Footer />
    </ChakraProvider>
  );
}
