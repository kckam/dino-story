import Document, { Head, Html, Main, NextScript } from "next/document";
import { ServerStyleSheet } from "styled-components";
import i18nextConfig from "../next-i18next.config";

class MyDocument extends Document {
    render() {
        const currentLocale =
            this.props.__NEXT_DATA__.locale || i18nextConfig.i18n.defaultLocale;

        return (
            <Html lang={currentLocale}>
                <Head>
                    <link
                        rel="preconnect"
                        href="https://fonts.googleapis.com"
                    />
                    <link
                        rel="preconnect"
                        href="https://fonts.gstatic.com"
                        crossOrigin
                    />
                    <link
                        href="https://fonts.googleapis.com/css2?family=Montserrat:wght@100;400;700&family=Roboto:wght@100;400;700&family=Noto+Serif+SC:wght@400;700&display=swap"
                        rel="stylesheet"
                    />
                    <script
                        src="https://kit.fontawesome.com/73339972e7.js"
                        crossOrigin
                        async
                    ></script>

                    <title>Dino Story</title>
                </Head>
                <body>
                    <Main />
                    <NextScript />
                </body>
            </Html>
        );
    }

    static async getInitialProps(ctx) {
        const sheet = new ServerStyleSheet();
        const originalRenderPage = ctx.renderPage;

        try {
            console.log("ssr styled");

            ctx.renderPage = () =>
                originalRenderPage({
                    enhanceApp: (App) => (props) =>
                        sheet.collectStyles(<App {...props} />),
                });

            const initialProps = await Document.getInitialProps(ctx);
            return {
                ...initialProps,
                styles: (
                    <>
                        {initialProps.styles}
                        {sheet.getStyleElement()}
                    </>
                ),
            };
        } finally {
            sheet.seal();
        }
    }
}

export default MyDocument;
