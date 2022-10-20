import { serverSideTranslations } from "next-i18next/serverSideTranslations";

function Collections() {
    return <div>123</div>;
}

export default Collections;

export async function getStaticProps({ locale }) {
    console.log(locale);
    return {
        props: {
            ...(await serverSideTranslations(locale, ["common"])),
            // Will be passed to the page component as props
        },
    };
}
