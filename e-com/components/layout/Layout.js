import React, { useContext } from "react";
import Head from "next/head";
import NextLink from "next/link";
import {
  AppBar,
  Toolbar,
  Container,
  Typography,
  Link,
  createTheme,
  ThemeProvider,
  CssBaseline,
  Switch,
} from "@material-ui/core";
import useStyles from "../../utils/styles";
import { Store } from "../../utils/Store";
import Cookies from 'js-cookie';

export default function Layout({ title, description, children }) {
  const { state, dispatch } = useContext(Store);
  const { darkMode } = state;
  const theme = createTheme({
    Typography: {
      h1: {
        fontSize: "1.6rem",
        fontWeight: 400,
        margin: "1rem 0",
      },
      h2: {
        fontSize: "1.4rem",
        fontWeight: 400,
        margin: "1rem 0",
      },
      body1: {
        fontWeight: "normal",
      },
    },
    palette: {
      type: darkMode ? "dark" : "light",
      primary: {
        main: "#f0c000",
      },
    },
  });
  const styles = useStyles();
  const darkModeChangeHandler = () => {
    dispatch({ type: darkMode ? "DARK_MODE_OFF" : "DARK_MODE_ON" });
    const newDarkMode = !darkMode;
    Cookies.set("darkMode", newDarkMode ? "ON" : "OFF");
  };
  return (
    <div>
      <Head>
        <title>{title ? `${title} - Next COMA` : "Next COMA"}</title>
        {description && <meta name="description" content={description}></meta>}
      </Head>
      <ThemeProvider theme={theme}>
        <CssBaseline>
          <AppBar position="static" className={styles.navbar}>
            <Toolbar>
              <NextLink href="/" passHref>
                <Link>
                  <Typography className={styles.brand}>
                    <b>E-COMA</b>
                  </Typography>
                </Link>
              </NextLink>
              <div className={styles.grow}></div>
              <div>
                <Switch
                  checked={darkMode}
                  onChange={darkModeChangeHandler}
                ></Switch>
                <NextLink href="/cart" passHref>
                  <Link>Cart</Link>
                </NextLink>
                <NextLink href="/login" passHref>
                  <Link>Login</Link>
                </NextLink>
              </div>
            </Toolbar>
          </AppBar>
          <Container className={styles.main}>{children}</Container>
          <footer className={styles.footer}>
            <Typography>
              <b>All rights reserved,Next-ECOMA</b>
            </Typography>
          </footer>
        </CssBaseline>
      </ThemeProvider>
    </div>
  );
}
