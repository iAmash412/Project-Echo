import { AppProps } from "next/app";
import { useState } from "react";
import Head from "next/head";
import {
  ColorSchemeProvider,
  MantineProvider,
  ColorScheme,
} from "@mantine/core";
import { RecoilRoot } from "recoil";

import { HeaderSearch } from "../components/HeaderSeach";

export default function App(props: AppProps) {
  const { Component, pageProps } = props;

  const [colorScheme, setColorScheme] = useState<ColorScheme>("light");
  const toggleColorScheme = (value?: ColorScheme) =>
    setColorScheme(value || (colorScheme === "dark" ? "light" : "dark"));

  const testLinks = [
    {
      link: "/browse",
      label: "Browse products",
    },
    {
      link: "/orders",
      label: "Orders",
    },
    {
      link: "/about",
      label: "About us",
    },
    {
      link: "/contact",
      label: "Contact us",
    },
  ];

  return (
    <RecoilRoot>
      <Head>
        <title>Page title</title>
        <meta
          name="viewport"
          content="minimum-scale=1, initial-scale=1, width=device-width"
        />
      </Head>

      <ColorSchemeProvider
        colorScheme={colorScheme}
        toggleColorScheme={toggleColorScheme}
      >
        <MantineProvider
          withGlobalStyles
          withNormalizeCSS
          theme={{ colorScheme }}
        >
          <HeaderSearch links={testLinks} />
          <Component {...pageProps} />
        </MantineProvider>
      </ColorSchemeProvider>
    </RecoilRoot>
  );
}
