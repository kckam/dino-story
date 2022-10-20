import { useState } from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";
import { ThemeProvider } from "styled-components";
import { appWithTranslation } from "next-i18next";
import GlobalStyle from "../styles/globalStyles";

const properties = {
    maxWidth: "1400px",
    specialColor: "#ff8181",
};

export const LANGS = {
    en: "English",
    cn: "华语",
};

export const THEME = {
    light: {
        darkmode: false,
        background: "#F7F7F7",
        color: "#000000",
        properties,
    },
    dark: {
        darkmode: true,
        background: "#000000",
        color: "#F7F7F7",
        properties,
    },
};

function MyApp({ Component, pageProps }) {
    const [theme, setTheme] = useState(THEME.light);

    return (
        <ThemeProvider theme={theme}>
            <GlobalStyle />
            <Header theme={theme} setTheme={setTheme} />
            <Component {...pageProps} />
            <Footer />
        </ThemeProvider>
    );
}

export default appWithTranslation(MyApp);
