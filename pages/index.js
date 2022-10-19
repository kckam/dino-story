import Head from "next/head";
import styled from "styled-components";
import { useTranslation } from "next-i18next";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import Link from "next/link";
import Image from "next/future/image";
import { Title, Button } from "../components/style";
import breakpoints from "../config/breakpoint";

const { sm, md } = breakpoints;

const StyledIndex = styled.div`
    color: ${(props) => props.theme.color};

    .title {
        margin-bottom: 3rem;
        text-align: center;
        font-size: 2rem;

        @media only screen and (${md.down}) {
            margin-bottom: 1rem;
        }
    }

    .slick-dots {
        text-align: left;
        bottom: 0;
        padding-left: calc(2rem - 10px);

        > li {
            transform: scale(2);

            button:before {
                color: ${(props) => props.theme.color};
            }
        }
    }

    .slick-slide {
        position: relative;
    }

    .carousel {
        max-width: ${(props) => props.theme.properties.maxWidth};
        margin: auto;

        &__item {
            display: flex;
            flex-direction: row;
            align-items: center;

            .carousel-item-text {
                padding-left: 2rem;
                position: relative;
                z-index: 10;
                margin-top: -6rem;
                flex: 0 0 550px;

                @media only screen and (${md.down}) {
                    padding: 0 1rem;
                }

                .hero-title {
                    margin-bottom: 5rem;
                }

                .carousel__item-tag {
                    text-transform: uppercase;
                    margin-bottom: 1rem;

                    &::before {
                        content: "";
                        display: inline-block;
                        vertical-align: middle;
                        height: 2px;
                        background: #888;
                        width: 15px;
                        margin-right: 0.5rem;
                        margin-top: -1px;
                    }
                }
            }

            .carousel-item-image {
                position: relative;
                flex: 1;
                margin-left: -8rem;
                height: 80vh;
                max-height: 900px;
                border-radius: 14px;
                overflow: hidden;

                img {
                    /* width: 500px;
        height: auto; */

                    object-fit: cover;
                }
            }
        }
    }

    .events {
        margin: 8rem auto 0 auto;
        max-width: ${(props) => props.theme.properties.maxWidth};
        padding: 0 2rem;

        @media only screen and (${md.down}) {
            padding: 0 1rem;
            margin: 4rem auto 0 auto;
        }

        .event-headers {
            display: flex;
            justify-content: space-between;
            align-items: center;
            font-size: 1.5rem;
            text-transform: uppercase;
            font-weight: bold;
            text-align: center;
            width: 800px;
            max-width: 100%;
            margin: 0 auto 3rem auto;

            @media only screen and (${md.down}) {
                border: 1px dashed #000;
                padding: 1rem;
                flex-direction: column;
            }

            > li {
                &.dot {
                    width: 5px;
                    height: 5px;
                    border-radius: 50%;
                    display: block;
                    background: ${(props) => props.theme.color};
                }
            }

            @media only screen and (${md.down}) {
                font-size: 1.2rem;
                flex-direction: column;

                > li {
                    &.dot {
                        width: 5px;
                        height: 5px;
                    }
                    &:not(:first-child) {
                        margin-top: 1rem;
                    }
                }
            }
        }

        .grid {
            margin-top: 3rem;
            display: grid;
            grid-template:
                "first second second second"
                "first third third fourth";
            grid-gap: 1rem;

            > li {
                position: relative;
                padding-bottom: 50%;

                img {
                    object-fit: cover;
                }

                &.first {
                    grid-area: first;
                }

                &.second {
                    grid-area: second;
                }

                &.third {
                    grid-area: third;
                }

                &.fourth {
                    grid-area: fourth;
                }
            }

            @media only screen and (${md.down}) {
                min-height: 600px;
                grid-template:
                    "first second second"
                    "third third fourth";
            }
        }
    }

    .about-us {
        position: relative;
        margin: 8rem auto 0 auto;
        max-width: ${(props) => props.theme.properties.maxWidth};
        text-align: center;
        padding: 0 2rem 12rem 2rem;
        overflow: hidden;

        @media only screen and (${md.down}) {
            padding: 0 1rem;
            margin: 4rem auto 6rem auto;
        }

        /* h2 {
            font-size: 6rem;
            text-transform: uppercase;
            font-weight: bold;
        } */
    }

    .contact-us {
        position: relative;
        text-align: center;
        padding: 0 2rem 18rem 2rem;
        margin: 8rem auto 0 auto;
        max-width: ${(props) => props.theme.properties.maxWidth};

        @media only screen and (${md.down}) {
            padding: 0 1rem 12rem 1rem;
            margin: 4rem auto 0 auto;
        }
    }

    p {
        text-align: center;
        width: 80%;
        margin: 0 auto;
        line-height: 26px;
        font-size: 1.2rem;

        @media only screen and (${md.down}) {
            width: 100%;
            font-size: 1rem;
        }
    }

    .image-wrapper {
        position: absolute;
        height: 100%;
        width: 55%;
        top: 0;
        left: 0;

        @media only screen and (${md.down}) {
            width: 75%;
        }
    }

    @media only screen and (${md.down}) {
        .carousel {
            .carousel__item {
                &::after {
                    content: "";
                    position: absolute;
                    width: 100%;
                    height: 100%;
                    background: ${(props) => props.theme.background};
                    opacity: 0.5;
                    top: 0;
                    left: 0;
                }

                .carousel-item-text {
                    position: absolute;
                }

                .carousel-item-image {
                    margin-left: 8rem;
                }
            }
        }
    }
`;

export default function Home() {
    const { t } = useTranslation();
    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        arrows: false,
        autoplay: false,
    };

    //// 解压系列

    const carousel = [
        { category: t("collections"), title: t("fluid-bear_header") },
        { category: t("collections"), title: t("hand-model_header") },
    ];

    return (
        <StyledIndex>
            <section className="carousel">
                <Slider {...settings}>
                    {carousel.map((el, i) => (
                        <div
                            className="carousel__item-wrapper"
                            key={`carousel-${i}`}
                        >
                            <div className="carousel__item">
                                <div className="carousel-item-text">
                                    <div className="carousel__item-tag">
                                        {el.category}
                                    </div>
                                    <Title className="hero-title">
                                        {el.title}
                                    </Title>
                                    <Link href="" passHref>
                                        <Button>{t("common.explore")} </Button>
                                    </Link>
                                </div>

                                <div className="carousel-item-image">
                                    <Image
                                        src="/assets/hero2.jpg"
                                        fill
                                        alt={el.title}
                                    />
                                </div>
                            </div>
                        </div>
                    ))}
                </Slider>
            </section>

            <section className="events">
                <ul className="event-headers">
                    <li>{t("t1")}</li>
                    <li className="dot"></li>
                    <li>{t("t2")}</li>
                    <li className="dot"></li>
                    <li>{t("t3")}</li>
                </ul>

                <p>{t("desc")}</p>

                <ul className="grid">
                    <li className="first">
                        <Image src="/assets/hero2.jpg" fill alt="ok" />
                    </li>
                    <li className="second">
                        <Image src="/assets/hero2.jpg" fill alt="ok" />
                    </li>
                    <li className="third">
                        <Image src="/assets/hero2.jpg" fill alt="ok" />
                    </li>
                    <li className="fourth">
                        <Image src="/assets/hero2.jpg" fill alt="ok" />
                    </li>
                </ul>
            </section>

            <section className="about-us" id="about-us">
                <Title className="title">About Us</Title>
                <p>We are dino story</p>

                <Image
                    src="/logo/little-no.svg"
                    fill
                    size={"100vw"}
                    alt="ok"
                    style={{
                        opacity: 0.07,
                        pointerEvents: "none",
                        // transform:"scale(2)",
                        top: "-4rem",
                    }}
                />
                <br />
                <br />
                <br />
                <br />
                <Link href="" passHref>
                    <Button>Explore</Button>
                </Link>
            </section>

            <section className="contact-us" id="contact-us">
                <Title className="title">Contact Us</Title>
                <p>Please do not hesitate to contact us.</p>

                <div className="image-wrapper">
                    <Image
                        src="/assets/hero3.jpg"
                        fill
                        // width="0"
                        // height="0"
                        sizes={"100vw"}
                        alt="ok"
                        style={{
                            opacity: 0.3,
                            zIndex: -1,
                            objectFit: "cover",
                            // width: "100%",
                            // height: "auto",
                            // transform:"scale(2)",
                            top: "-4rem",
                        }}
                    />
                </div>

                <br />
                <br />
                <br />
                <br />
                <Link href="" passHref>
                    <Button>Explore</Button>
                </Link>
            </section>

            {/* <section className="contact-us">
                <Title className="title">Contact Us</Title>
                <p>
                    In the past few years, the cleanest website designs have
                    attracted the most attention. Minimalism has gained
                    popularity thanks to its simple, professional design and the
                    benefits that come with it, like faster site loading speeds.
                    If you’re a huge fan of minimalist designs, check out these
                </p>

                <div
                    className="image-wrapper"
                    style={{ right: 0, left: "initial" }}
                >
                    <Image
                        src="/assets/hero4.jpg"
                        fill
                        // width="0"
                        // height="0"
                        sizes={"100vw"}
                        alt="ok"
                        style={{
                            opacity: 0.3,
                            zIndex: -1,
                            objectFit: "cover",
                            // width: "100%",
                            // height: "auto",
                            // transform:"scale(2)",
                            top: "-4rem",
                        }}
                    />
                </div>

                <br />
                <br />
                <br />
                <br />
                <Link href="" passHref>
                    <Button>Explore</Button>
                </Link>
            </section> */}
        </StyledIndex>
    );
}

export async function getStaticProps({ locale }) {
    console.log(locale);
    return {
        props: {
            ...(await serverSideTranslations(locale, ["common"])),
            // Will be passed to the page component as props
        },
    };
}
