import Image from "next/future/image";
import Link from "next/link";
import styled from "styled-components";
import breakpoints from "../config/breakpoint";

const { md } = breakpoints;

const StyledFooter = styled.footer`
    background: #eee;
    padding: 4rem 2rem;

    @media only screen and (${md.down}) {
        padding: 4rem 1rem;
    }

    .footer-nav {
        max-width: ${(props) => props.theme.properties.maxWidth};
        margin: auto;
        display: flex;
        justify-content: space-between;

        > li {
            flex: 1;
            line-height: 26px;

            h3 {
                text-transform: uppercase;
                font-weight: bold;
                white-space: nowrap;
                margin-bottom: 0.75rem;
            }

            .social-medias {
                display: flex;
                font-size: 2rem;

                > li {
                    &:not(:first-child) {
                        margin-left: 1rem;
                    }
                }
            }

            &:last-child {
                text-align: right;
                flex: 0;
            }

            &:not(:first-child) {
                margin-left: 1rem;
            }
        }

        @media only screen and (${md.down}) {
            flex-direction: column;

            > li {
                &:last-child {
                    text-align: left;
                    flex: 1;
                }

                &:not(:first-child) {
                    margin-left: 0rem;
                    margin-top: 2rem;
                }
            }
        }
    }
`;

function Footer() {
    return (
        <StyledFooter>
            <ul className="footer-nav">
                <li>
                    <h3>Address</h3>
                    <div>
                        59A, Jalan Sutera Tanjung 8/3,
                        <br />
                        Taman Sutera Utama,
                        <br />
                        81300 Skudai,
                        <br />
                        Johor,
                        <br />
                        Malaysia
                    </div>
                </li>

                <li>
                    <h3>Business hours</h3>
                    <div>
                        Mon: 11:00 AM – 6:00 PM
                        <br />
                        Tue: 11:00 AM – 6:00 PM
                        <br />
                        Wed: 11:00 AM – 6:00 PM
                        <br />
                        Thu: 11:00 AM – 6:00 PM
                        <br />
                        Fri: 11:00 AM – 6:00 PM
                        <br />
                        Sat: 11:00 AM – 6:00 PM
                        <br />
                        Sun: 11:00 AM – 6:00 PM
                    </div>
                </li>

                <li>
                    {/* <h3>Sitemap</h3>
                    <ul>
                        <li>Contact us</li>
                        <li>Contact us</li>
                        <li>Contact us</li>
                    </ul> */}
                </li>

                <li>
                    {/* <h3>Social media</h3>
                    <ul className="social-medias">
                        <li>
                            <i className="fa-brands fa-square-facebook"></i>
                        </li>
                        <li>
                            <i className="fa-brands fa-square-instagram"></i>
                        </li>
                    </ul> */}
                </li>
            </ul>
        </StyledFooter>
    );
}

export default Footer;
