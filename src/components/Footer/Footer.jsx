import footerLogo from "../../../images/footer_logo.png";
import Link from "next/link";
import Image from "next/image";
import s from "./Footer.module.css"

const Footer = () => {

    return <footer className={s.footer}>
        <div className="container">
    <div className={"row mainFooter"}>
                <div className={s.footer_l}>
                    {/* Start footer_logo*/}
                    <Image  src={footerLogo} alt="Tour2Sky" className={s.footer_logo} />
                    {/*<Link to="/">

                    </Link>*/}
                    {/* End footer_logo*/}
                </div>
                <div className={s.soc}>
        <span>Socials:</span>
        <div className="row">
            <Link href="/" >
                <svg xmlns="http://www.w3.org/2000/svg" width="40px" height="40px" viewBox="0 0 40 40">
                    <g fill="none" fillRule="evenodd">
                        <rect width="40" height="40" fill="#295DB9" rx="8"/>
                        <path fill="#FFF"
                              fillRule="nonzero"
                              d="M24.586 9.004L21.947 9c-2.964 0-4.88 2.028-4.88 5.168v2.383h-2.652a.422.422 0 0 0-.415.428v3.453c0 .236.186.428.415.428h2.653v8.712c0 .236.185.428.415.428h3.46c.23 0 .416-.192.416-.428V20.86h3.101c.23 0 .415-.192.415-.428l.001-3.453a.436.436 0 0 0-.121-.302.408.408 0 0 0-.294-.126H21.36v-2.02c0-.97.224-1.464 1.449-1.464h1.777a.422.422 0 0 0 .415-.429V9.433a.422.422 0 0 0-.414-.429z"/>
                    </g>
                </svg>
            </Link>
            <Link href="/" target="_blank" rel="noopener">
                <svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" viewBox="0 0 40 40">
                    <g fill="none" fillRule="evenodd">
                        <rect width="40" height="40" fill="#C82424" rx="8"/>
                        <path fill="#FFF" fillRule="nonzero" d="M33.83 11.717C32.749 10.497 30.749 10 26.93 10H13.07c-3.906 0-5.94.53-7.018 1.828C5 13.094 5 14.958 5 17.54v4.92c0 5 1.248 7.54 8.07 7.54h13.86c3.311 0 5.146-.439 6.333-1.515C34.481 27.38 35 25.58 35 22.46v-4.92c0-2.722-.081-4.598-1.17-5.823zm-9.57 8.962l-6.294 3.116a1.01 1.01 0 0 1-.95-.028.908.908 0 0 1-.466-.784V16.77c0-.32.176-.617.465-.784.29-.166.649-.177.949-.03l6.294 3.096c.32.158.521.47.522.813 0 .341-.2.655-.52.813z"/>
                    </g>
                </svg>
            </Link>
            <Link href="/" target="_blank" rel="noopener">
                <svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" viewBox="0 0 40 40">
                    <g fill="none" fillRule="evenodd">
                        <rect width="40" height="40" fill="#F57749" rx="8"/>
                        <path fill="#FFF" fillRule="nonzero" d="M28 10H12c-1.1 0-2 .9-2 2v16c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V12c0-1.1-.9-2-2-2zm-8 6c2.2 0 4 1.8 4 4s-1.8 4-4 4-4-1.8-4-4 1.8-4 4-4zm-7.5 12c-.3 0-.5-.2-.5-.5V19h2.1c-.1.3-.1.7-.1 1 0 3.3 2.7 6 6 6s6-2.7 6-6c0-.3 0-.7-.1-1H28v8.5c0 .3-.2.5-.5.5h-15zM28 14.5c0 .3-.2.5-.5.5h-2c-.3 0-.5-.2-.5-.5v-2c0-.3.2-.5.5-.5h2c.3 0 .5.2.5.5v2z"/>
                    </g>
                </svg>
            </Link>
            <Link href="/" target="_blank"  rel="noopener">
                <svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" viewBox="0 0 40 40">
                    <g fill="none" fillRule="evenodd">
                        <rect width="40" height="40" fill="#33A2CC" rx="8"/>
                        <path fill="#FFF" fillRule="nonzero" d="M31.916 12.366a9.64 9.64 0 0 1-2.827.796 5.051 5.051 0 0 0 2.164-2.793 9.775 9.775 0 0 1-3.129 1.227A4.853 4.853 0 0 0 24.531 10c-2.719 0-4.924 2.262-4.924 5.05 0 .395.044.781.128 1.15-4.091-.21-7.72-2.221-10.147-5.277a5.112 5.112 0 0 0-.666 2.539c0 1.752.87 3.299 2.19 4.203a4.83 4.83 0 0 1-2.23-.634v.063c0 2.447 1.697 4.488 3.948 4.953a4.869 4.869 0 0 1-1.297.177 4.61 4.61 0 0 1-.927-.094c.627 2.008 2.445 3.468 4.598 3.508a9.72 9.72 0 0 1-6.114 2.159c-.397 0-.789-.025-1.174-.07A13.663 13.663 0 0 0 15.462 30c9.057 0 14.008-7.696 14.008-14.37l-.017-.654a9.975 9.975 0 0 0 2.463-2.61z"/>
                    </g>
                </svg>
            </Link>
        </div>
    </div>
                <div className={s.footer_c}>
                    <div className={s.f_mail}>Email us: <a href="mailto:info@tour2sky.com">info@tour2sky.com</a></div>
                    <div className={"row"}>
                        <div className={s.f_pay}>
                            <Link href="/" target="_blank"  rel="noopener">
                                <svg xmlns="http://www.w3.org/2000/svg" width="56" height="34" viewBox="0 0 56 34">
                                    <g fill="none" fillRule="evenodd">
                                        <rect width="56" height="34" fill="#2F3337" rx="6"/>
                                        <path fill="#2394BC" fillRule="nonzero" d="M23.478 11L21.65 22.976h2.92L26.397 11h-2.92zm8.808 4.878c-1.02-.53-1.646-.889-1.646-1.432.012-.493.529-1 1.682-1a4.861 4.861 0 0 1 2.175.444l.265.125.397-2.506a7.042 7.042 0 0 0-2.62-.493c-2.884 0-4.915 1.579-4.927 3.838-.024 1.667 1.453 2.592 2.56 3.147 1.129.569 1.513.938 1.513 1.444-.012.776-.913 1.134-1.754 1.134-1.165 0-1.79-.184-2.74-.617l-.385-.184-.408 2.604c.686.32 1.947.604 3.257.618 3.064 0 5.058-1.555 5.084-3.963.01-1.32-.77-2.332-2.453-3.159zm10.36-4.84h-2.26c-.696 0-1.225.21-1.526.963l-4.338 10.975h3.065l.844-2.376h3.428l.438 2.386H45l-2.355-11.949zm-3.365 7.164c.059.006 1.176-3.88 1.176-3.88l.89 3.88H39.28zM19.21 11l-2.861 8.137-.312-1.605c-.529-1.851-2.187-3.863-4.038-4.863l2.62 10.295h3.09l4.59-11.963h-3.09V11z"/>
                                        <path fill="#EFC75E" fillRule="nonzero" d="M15.075 12.63c-.21-.965-.876-1.616-1.782-1.63h-4.25L9 11.234c3.315.97 6.097 3.957 7 6.766l-.925-5.37z"/>
                                    </g>
                                </svg>
                            </Link>
                            <Link href="/" target="_blank"  rel="noopener">
                                <svg xmlns="http://www.w3.org/2000/svg" width="94" height="34" viewBox="0 0 94 34">
                                    <g fill="none" fillRule="evenodd">
                                        <rect width="94" height="34" fill="#2F3337" rx="6"/>
                                        <g fillRule="nonzero">
                                            <path fill="#139AD6" d="M66.098 12.153h-3.721c-.22 0-.438.23-.548.46l-1.532 10.143c0 .23.11.346.328.346h1.97c.22 0 .329-.116.329-.346l.438-2.881c0-.23.218-.461.547-.461h1.204c2.517 0 3.94-1.268 4.268-3.804.22-1.037 0-1.96-.437-2.535-.657-.577-1.642-.922-2.846-.922m.438 3.803c-.22 1.383-1.204 1.383-2.19 1.383h-.656l.438-2.65c0-.116.11-.231.328-.231h.219c.657 0 1.313 0 1.642.46.219.116.219.462.219 1.038"/>
                                            <g fill="#FFF">
                                                <path d="M38.742 11.86h-3.803c-.224 0-.447.234-.56.468l-1.565 10.305c0 .234.112.352.336.352h1.789c.224 0 .447-.235.56-.469l.447-2.81c0-.235.223-.469.559-.469h1.23c2.573 0 4.027-1.288 4.362-3.864.224-1.054 0-1.99-.447-2.576-.671-.586-1.566-.937-2.908-.937m.447 3.864c-.224 1.405-1.23 1.405-2.237 1.405h-.559l.447-2.693c0-.117.112-.234.336-.234h.224c.67 0 1.342 0 1.677.468.112.117.224.469.112 1.054M50.262 15.607h-1.79c-.112 0-.335.117-.335.234l-.112.586-.112-.234c-.447-.586-1.23-.82-2.125-.82-2.013 0-3.803 1.64-4.138 3.864-.224 1.171.112 2.225.67 2.928.56.702 1.343.937 2.35.937 1.677 0 2.572-1.054 2.572-1.054l-.112.585c0 .234.112.352.336.352h1.677c.224 0 .448-.235.56-.469l1.006-6.558c-.112-.117-.335-.35-.447-.35m-2.573 3.746c-.223 1.054-1.006 1.874-2.125 1.874-.559 0-1.006-.234-1.23-.468-.224-.352-.336-.82-.336-1.406.112-1.054 1.007-1.873 2.014-1.873.559 0 .894.234 1.23.468.335.351.447.937.447 1.405"/>
                                            </g>
                                            <path fill="#139AD6" d="M77.577 15.607h-1.798c-.112 0-.337.117-.337.234l-.112.586-.112-.234c-.45-.586-1.236-.82-2.135-.82-2.022 0-3.82 1.64-4.157 3.864-.224 1.171.113 2.225.674 2.928.562.702 1.348.937 2.36.937 1.685 0 2.584-1.054 2.584-1.054l-.113.585c0 .234.113.352.337.352h1.685c.225 0 .45-.235.562-.469l1.011-6.558c-.112-.117-.224-.35-.45-.35m-2.583 3.746c-.225 1.054-1.011 1.874-2.135 1.874-.561 0-1.01-.234-1.235-.468-.225-.352-.337-.82-.337-1.406.112-1.054 1.01-1.873 2.022-1.873.561 0 .898.234 1.236.468.449.351.561.937.449 1.405"/>
                                            <path fill="#FFF" d="M60.015 15.695H58.12c-.223 0-.334.118-.446.237l-2.452 4.027-1.115-3.79c-.111-.237-.223-.356-.557-.356h-1.783c-.223 0-.335.237-.335.474l2.007 6.278-1.895 2.843c-.112.237 0 .592.223.592h1.783c.223 0 .334-.118.446-.237l6.13-9.357c.335-.356.112-.711-.111-.711"/>
                                            <path fill="#139AD6" d="M79.572 12.435L78.026 23.07c0 .237.11.355.331.355h1.546c.22 0 .441-.237.552-.473L82 12.553c0-.236-.11-.354-.331-.354h-1.766c-.11-.118-.221 0-.331.236"/>
                                            <path fill="#FFF" d="M24.836 8.415C24.054 7.472 22.603 7 20.594 7h-5.58c-.335 0-.67.354-.782.708L12 23.156c0 .354.223.59.446.59h3.46l.893-5.779v.236c.112-.354.447-.707.782-.707h1.674c3.237 0 5.692-1.416 6.474-5.307v-.354c-.112 0-.112 0 0 0 .111-1.533-.112-2.476-.893-3.42"/>
                                            <path fill="#139AD6" d="M25.654 11.83v.35c-.777 3.956-3.218 5.236-6.435 5.236h-1.665c-.333 0-.665.35-.776.698l-1.11 7.099c0 .232.111.465.444.465h2.885c.333 0 .665-.233.665-.582v-.116l.555-3.608v-.232c0-.35.333-.582.666-.582h.444c2.773 0 4.993-1.164 5.547-4.655.222-1.396.111-2.676-.554-3.49a1.153 1.153 0 0 0-.666-.582"/>
                                            <path fill="#3CC" d="M24.77 11.54c-.109 0-.218-.117-.328-.117-.11 0-.219 0-.328-.118-.438-.119-.876-.119-1.423-.119h-4.268c-.11 0-.219 0-.328.119a.658.658 0 0 0-.329.59l-.875 6.14v.236c.11-.354.438-.708.766-.708h1.642c3.173 0 5.58-1.417 6.347-5.314 0-.118 0-.236.11-.354-.22-.118-.329-.236-.548-.236-.328-.118-.328-.118-.438-.118"/>
                                        </g>
                                    </g>
                                </svg>
                            </Link>
                        </div>
                        <div className={s.f_link}>
                            <Link href="/">Terms & Conditions</Link>
                        </div>
                    </div>
                </div>
                <div className={s.footer_r}>
                    <ul>
                        <li><Link href="/">Link to information</Link></li>
                        <li><Link href="/">Become a partner</Link></li>
                        <li><Link href="/">Link to information</Link></li>
                        <li><Link href="/">Usefull short link</Link></li>
                    </ul>
                    <ul>
                        <li><Link href="/">Link to information</Link></li>
                        <li><Link href="/">Usefull short link</Link></li>
                        <li><Link href="/">Link to information</Link></li>
                        <li><Link href="/">Usefull short link</Link></li>
                    </ul>
                </div>
            </div>
        </div>
</footer>
}
export default Footer