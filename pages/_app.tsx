
import "../styles/globals.scss";
import "nprogress/nprogress.css";
import type { AppProps } from 'next/app'
import Head from "next/head";
import Router from "next/router";
import NProgress from "nprogress";
import { createTheme, ThemeProvider } from "@material-ui/core";
import { StylesProvider } from "@material-ui/core/styles";

Router.events.on("routeChangeStart", () => NProgress.start());
Router.events.on("routeChangeComplete", () => NProgress.done());
Router.events.on("routeChangeError", () => NProgress.done());

const theme = createTheme({
  palette: {
    text: {
      primary: "#FFFFFF",
    },
    primary: {
      main: "#ff3f3f",
      light: "#e94d3d",
      contrastText: "#fff",
    },
    secondary: {
      main: "#3f69ff",
      contrastText: "#fff",
    },
  },
  typography: {
    fontFamily: "Open Sans",
  },
});

export default function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <Head>
        <title>Corona</title>
        <meta
          name="viewport"
          content="width=device-width, initial-scale=1, user-scalable=no, user-scalable=0"
        />
      </Head>
      <StylesProvider injectFirst>
        <ThemeProvider theme={theme}>
          <Component {...pageProps} />
        </ThemeProvider>
      </StylesProvider>
    </>
  );
}

