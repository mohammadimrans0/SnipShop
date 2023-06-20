import { BsFacebook, BsTwitter, BsInstagram } from 'react-icons/bs';

const Footer = () => {
    return (
        <>
            <footer className="w-full text-white mt-20">
                {/*    <!-- Main footer --> */}
                <div className="pt-16 pb-12 text-sm bg-[#023F75]">
                    <div className="container px-6 mx-auto">
                        <div className="grid grid-cols-4 gap-6 md:grid-cols-8 lg:grid-cols-12">
                            <nav
                                className="col-span-2 md:col-span-4 lg:col-span-3"
                                aria-labelledby="footer-header"
                            >
                                <h3
                                    className="mb-6 text-base font-medium text-white"
                                    id="footer-header"
                                >
                                    Shop
                                </h3>
                                <ul>
                                    <li className="mb-2 leading-6">
                                        <a
                                            href="#"
                                            className="transition-colors duration-300 hover:text-emerald-100 focus:text-emerald-50"
                                        >
                                            Features
                                        </a>
                                    </li>
                                    <li className="mb-2 leading-6">
                                        <a
                                            href="#"
                                            className="transition-colors duration-300 hover:text-emerald-100 focus:text-emerald-50"
                                        >
                                            Customers
                                        </a>
                                    </li>
                                    <li className="mb-2 leading-6">
                                        <a
                                            href="#"
                                            className="transition-colors duration-300 hover:text-emerald-100 focus:text-emerald-50"
                                        >
                                            Why us?
                                        </a>
                                    </li>
                                    <li className="mb-2 leading-6">
                                        <a
                                            href="#"
                                            className="transition-colors duration-300 hover:text-emerald-100 focus:text-emerald-50"
                                        >
                                            Pricing
                                        </a>
                                    </li>
                                </ul>
                            </nav>
                            <nav
                                className="col-span-2 md:col-span-4 lg:col-span-3"
                                aria-labelledby="footer-header"
                            >
                                <h3
                                    className="mb-6 text-base font-medium text-white"
                                    id="footer-header "
                                >
                                    Sell
                                </h3>
                                <ul>
                                    <li className="mb-2 leading-6">
                                        <a
                                            href="#"
                                            className="transition-colors duration-300 hover:text-emerald-100 focus:text-emerald-50"
                                        >
                                            Documentation
                                        </a>
                                    </li>
                                    <li className="mb-2 leading-6">
                                        <a
                                            href="#"
                                            className="transition-colors duration-300 hover:text-emerald-100 focus:text-emerald-50"
                                        >
                                            Training
                                        </a>
                                    </li>
                                    <li className="mb-2 leading-6">
                                        <a
                                            href="#"
                                            className="transition-colors duration-300 hover:text-emerald-100 focus:text-emerald-50"
                                        >
                                            System status
                                        </a>
                                    </li>
                                    <li className="mb-2 leading-6">
                                        <a
                                            href="#"
                                            className="transition-colors duration-300 hover:text-emerald-100 focus:text-emerald-50"
                                        >
                                            FAQ
                                        </a>
                                    </li>
                                    <li className="mb-2 leading-6">
                                        <a
                                            href="#"
                                            className="transition-colors duration-300 hover:text-emerald-100 focus:text-emerald-50"
                                        >
                                            Help Center
                                        </a>
                                    </li>
                                </ul>
                            </nav>
                            <nav
                                className="col-span-2 md:col-span-4 lg:col-span-3"
                                aria-labelledby="footer-header"
                            >
                                <h3
                                    className="mb-6 text-base font-medium text-white"
                                    id="footer-header"
                                >
                                    About us
                                </h3>
                                <ul>
                                    <li className="mb-2 leading-6">
                                        <a
                                            href="#"
                                            className="transition-colors duration-300 hover:text-emerald-100 focus:text-emerald-50"
                                        >
                                            About us
                                        </a>
                                    </li>
                                    <li className="mb-2 leading-6">
                                        <a
                                            href="#"
                                            className="transition-colors duration-300 hover:text-emerald-100 focus:text-emerald-50"
                                        >
                                            Careers
                                        </a>
                                    </li>
                                    <li className="mb-2 leading-6">
                                        <a
                                            href="#"
                                            className="transition-colors duration-300 hover:text-emerald-100 focus:text-emerald-50"
                                        >
                                            Leadership
                                        </a>
                                    </li>
                                    <li className="mb-2 leading-6">
                                        <a
                                            href="#"
                                            className="transition-colors duration-300 hover:text-emerald-100 focus:text-emerald-50"
                                        >
                                            Blog
                                        </a>
                                    </li>
                                    <li className="mb-2 leading-6">
                                        <a
                                            href="#"
                                            className="transition-colors duration-300 hover:text-emerald-100 focus:text-emerald-50"
                                        >
                                            Events
                                        </a>
                                    </li>
                                </ul>
                            </nav>
                            <nav
                                className="col-span-2 md:col-span-4 lg:col-span-3"
                                aria-labelledby="footer-header"
                            >
                                <h3
                                    className="mb-6 text-base font-medium text-white"
                                    id="footer-header"
                                >
                                    Get in touch
                                </h3>
                                <ul>
                                    <li className="mb-2 leading-6">
                                        <a
                                            href="#"
                                            className="transition-colors duration-300 hover:text-emerald-100 focus:text-emerald-50"
                                        >
                                            Contact
                                        </a>
                                    </li>
                                    <li className="mb-2 leading-6">
                                        <a
                                            href="#"
                                            className="transition-colors duration-300 hover:text-emerald-100 focus:text-emerald-50"
                                        >
                                            Support
                                        </a>
                                    </li>
                                    <li className="mb-2 leading-6">
                                        <a
                                            href="#"
                                            className="transition-colors duration-300 hover:text-emerald-100 focus:text-emerald-50"
                                        >
                                            Partners
                                        </a>
                                    </li>
                                    <li className="mb-2 leading-6">
                                        <a
                                            href="#"
                                            className="transition-colors duration-300 hover:text-emerald-100 focus:text-emerald-50"
                                        >
                                            Join research
                                        </a>
                                    </li>
                                </ul>
                            </nav>
                        </div>
                    </div>
                </div>

                {/*    <!-- Subfooter --> */}
                <div className="py-4 text-sm bg-[#232347]">
                    <div className="container px-6 mx-auto">
                        <div className="grid grid-cols-4 gap-6 md:grid-cols-8 lg:grid-cols-12">
                            <div className="col-span-2 md:col-span-4 lg:col-span-6">
                                © 2021-2023 SnipShop.com
                            </div>
                            <nav
                                aria-labelledby="footer-social-links"
                                className="col-span-2 text-right md:col-span-4 lg:col-span-6"
                            >
                                <h2 className="sr-only" id="footer-social-links">
                                    Social Media Links
                                </h2>
                                <ul className="flex items-center justify-end gap-4">
                                    <li>
                                        <a
                                            href="javascript:void(0)"
                                            className="transition-colors duration-300 hover:text-emerald-100"
                                        >
                                            <BsFacebook className='text-xl'/>
                                        </a>
                                    </li>
                                    <li>
                                        <a
                                            href="javascript:void(0)"
                                            className="transition-colors duration-300 hover:text-emerald-100"
                                        >
                                            <BsTwitter className='text-xl'/>
                                        </a>
                                    </li>
                                    <li>
                                        <a
                                            href="javascript:void(0)"
                                            className="transition-colors duration-300 hover:text-emerald-100"
                                        >
                                            <BsInstagram className='text-xl'/>
                                        </a>
                                    </li>
                                </ul>
                            </nav>
                        </div>
                    </div>
                </div>
            </footer>
            {/*<!-- End Primary Dark Theme Footer --> */}
        </>
    );
};

export default Footer;