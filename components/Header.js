import { useState } from "react";
import Image from "next/future/image";
import Link from "next/link";
import styled, { useTheme } from "styled-components";
import { useTranslation } from "next-i18next";
import { THEME, LANGS } from "../pages/_app";
import breakpoints from "../config/breakpoint";
import AnchorLink from "react-anchor-link-smooth-scroll";

const { md, lg } = breakpoints;

const StyledHeader = styled.header`
    /* position: sticky; */
    top: 0;
    height: 130px;
    padding: 0 2rem;
    color: ${(props) => props.theme.color};
    /* background: ${(props) => props.theme.background}; */
    z-index: 999;

    @media only screen and (${md.down}) {
        height: 80px;
    }

    @media only screen and (${lg.down}) {
        padding: 0 1rem;
    }

    .desktop-menu-wrapper {
        height: 100%;
        nav {
            display: flex;
            justify-content: space-between;
            align-items: center;
            height: 100%;
            max-width: ${(props) => props.theme.properties.maxWidth};
            margin: auto;

            > a {
                height: 100%;

                .logo {
                    width: auto;
                    height: 100%;
                }
            }

            .menu {
                display: flex;
                align-items: center;
                text-transform: uppercase;
                .menu__item {
                    cursor: pointer;

                    &:not(:first-child) {
                        margin-left: 3rem;
                    }

                    &.langs {
                        position: relative;

                        i {
                            margin-left: 0.5rem;
                        }

                        .lang-list {
                            position: absolute;
                            box-shadow: 0 0 8px 1px #333;
                            padding: 1rem;
                            background: ${(props) => props.theme.background};
                            color: ${(props) => props.theme.color};
                            z-index: 100;
                            margin-top: 1rem;
                            opacity: 0;
                            visibility: hidden;
                            transition: opacity 0.1s ease-in,
                                visibility 0.1s ease-in;

                            &.active {
                                opacity: 1;
                                visibility: visible;
                            }

                            > li {
                                &.active {
                                    color: ${(props) =>
                                        props.theme.properties.specialColor};
                                    font-weight: bold;
                                }
                                &:not(:first-child) {
                                    margin-top: 1rem;
                                }
                            }
                        }
                    }

                    &.hamburger {
                        font-size: 1.5rem;
                        display: none;
                    }

                    &.dark-mode-toggler {
                        border: 1px solid #000;
                        display: flex;
                        justify-content: center;
                        align-items: center;
                        width: 2rem;
                        height: 2rem;
                        border-radius: 50%;

                        &.active {
                            color: yellow;
                            border-color: #fff;
                        }
                    }
                }

                @media only screen and (${lg.down}) {
                    .menu__item {
                        &:not(.dark-mode-toggler) {
                            display: none;
                        }

                        &.hamburger {
                            display: block;
                        }

                        &:not(:first-child) {
                            margin-left: 1rem;
                        }
                    }
                }
            }
        }
    }

    .mobile-menu-outer-wrapper {
        position: fixed;
        width: 100%;
        height: 100%;
        top: 0;
        left: 0;
        background: rgba(0, 0, 0, 0.9);
        z-index: 80;
        opacity: 0;
        visibility: hidden;

        .close-btn {
            color: #fff;
            text-transform: uppercase;
            text-decoration: underline;
            position: absolute;
            right: 2rem;
            top: 2rem;
            font-size: 1.2rem;
        }

        .mobile-menu-wrapper {
            position: fixed;
            top: 0;
            right: 0;
            width: 600px;
            max-width: 80%;
            height: 100%;
            background: #151313;
            box-shadow: 0 0 9px 5px #000;
            z-index: 100;
            padding: 2rem;
            text-align: center;
            display: flex;
            justify-content: center;
            overflow: auto;
            transform: translateX(100%);
            transition: transform 0.2s ease-in;
            will-change: transform;
            color: #fff;

            nav {
                position: relative;
                z-index: 100;
                margin: auto 0;
                display: flex;
                flex-direction: column;

                .logo {
                    display: none;
                    width: 200px;
                    height: auto;
                }

                .menu {
                    font-size: 3rem;

                    .menu__item {
                        &:not(:first-child) {
                            margin-top: 2rem;
                        }

                        &.langs {
                            .lang-list {
                                display: none;
                            }

                            i {
                                position: absolute;
                                margin-left: 1rem;
                            }
                        }
                    }
                }
            }
        }

        &.active {
            opacity: 1;
            visibility: visible;

            .mobile-menu-wrapper {
                transform: translateX(0);
            }
        }
    }
`;

function Header({ theme, setTheme }) {
    const themeChosen = useTheme();
    const [openLang, setOpenLang] = useState(false);
    const { t, i18n } = useTranslation();
    const [openMobileMenu, setOpenMobileMenu] = useState(false);

    const NAV = [
        // {
        //     label: "Collection",
        //     link: "/collections",
        // },
        {
            label: "About",
            link: "/about",
            slug: "about-us",
        },
        {
            label: "Contact",
            link: "/contact",
            slug: "contact-us",
        },
    ];

    return (
        <StyledHeader>
            <div className="desktop-menu-wrapper">
                <nav>
                    <Link href="/">
                        <a>
                            {themeChosen.darkmode ? (
                                <Image
                                    src="/logo/dino-dark.svg"
                                    className="logo"
                                    width="0"
                                    height="0"
                                    alt="dino story logo"
                                />
                            ) : (
                                <Image
                                    src="/logo/dino.svg"
                                    className="logo"
                                    width="0"
                                    height="0"
                                    alt="dino story logo"
                                />
                            )}
                        </a>
                    </Link>

                    <ul className="menu">
                        {NAV.map((el, i) => (
                            <li className="menu__item" key={`nav-${i}`}>
                                <AnchorLink
                                    offset={() => 100}
                                    href={`#${el.slug}`}
                                >
                                    {el.label}
                                </AnchorLink>
                            </li>
                        ))}

                        <li className="menu__item langs">
                            <div
                                onClick={() => {
                                    setOpenLang(!openLang);
                                }}
                            >
                                {LANGS[i18n.language]}{" "}
                                <i className="fa-solid fa-chevron-down"></i>
                            </div>
                            <ul
                                className={`lang-list ${
                                    openLang ? "active" : ""
                                }`}
                            >
                                {Object.keys(LANGS).map((key) => (
                                    <li
                                        key={`lang-${key}`}
                                        className={`${
                                            key === i18n.language
                                                ? "active"
                                                : ""
                                        }`}
                                    >
                                        <Link href="/" locale={key}>
                                            <a>{LANGS[key]}</a>
                                        </Link>
                                    </li>
                                ))}
                            </ul>
                        </li>

                        <li
                            className={`menu__item dark-mode-toggler ${
                                theme.darkmode ? "active" : ""
                            }`}
                            onClick={() => {
                                setTheme((_) =>
                                    theme.darkmode ? THEME.light : THEME.dark
                                );
                            }}
                        >
                            <i className="fa-solid fa-moon"></i>
                        </li>

                        <li
                            className="menu__item hamburger"
                            onClick={() => {
                                setOpenMobileMenu(true);
                            }}
                        >
                            <i class="fa-solid fa-bars"></i>
                        </li>
                    </ul>
                </nav>
            </div>

            <div
                className={`mobile-menu-outer-wrapper ${
                    openMobileMenu ? "active" : ""
                }`}
            >
                <div className="mobile-menu-wrapper">
                    <div
                        className="close-btn"
                        onClick={() => {
                            setOpenMobileMenu(false);
                        }}
                    >
                        close
                    </div>
                    <nav>
                        <Link href="/">
                            <a>
                                {themeChosen.darkmode ? (
                                    <Image
                                        src="/logo/dino-dark.svg"
                                        className="logo"
                                        width="0"
                                        height="0"
                                        alt="dino story logo"
                                    />
                                ) : (
                                    <Image
                                        src="/logo/dino.svg"
                                        className="logo"
                                        width="0"
                                        height="0"
                                        alt="dino story logo"
                                    />
                                )}
                            </a>
                        </Link>

                        <ul className="menu">
                            {NAV.map((el, i) => (
                                <li
                                    className="menu__item"
                                    key={`nav-${i}`}
                                    onClick={() => setOpenMobileMenu(false)}
                                >
                                    <AnchorLink
                                        offset={() => 100}
                                        href={`#${el.slug}`}
                                    >
                                        {el.label}
                                    </AnchorLink>
                                </li>
                            ))}

                            <li className="menu__item langs">
                                <div
                                    onClick={() => {
                                        setOpenLang(!openLang);
                                    }}
                                >
                                    {LANGS[i18n.language]}{" "}
                                    <i className="fa-solid fa-chevron-down"></i>
                                </div>
                                <ul
                                    className={`lang-list ${
                                        openLang ? "active" : ""
                                    }`}
                                >
                                    {Object.keys(LANGS).map((key) => (
                                        <li
                                            key={`lang-${key}`}
                                            className={`${
                                                key === i18n.language
                                                    ? "active"
                                                    : ""
                                            }`}
                                        >
                                            <Link href="/" locale={key}>
                                                <a>{LANGS[key]}</a>
                                            </Link>
                                        </li>
                                    ))}
                                </ul>
                            </li>
                        </ul>
                    </nav>
                </div>
            </div>
        </StyledHeader>
    );
}

export default Header;
