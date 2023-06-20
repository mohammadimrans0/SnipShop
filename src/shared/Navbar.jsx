import { useState } from "react"
import { BsCartPlus, BsSearch, BsFillBagHeartFill } from 'react-icons/bs'
import { FaUser } from 'react-icons/fa'
import { GiHamburgerMenu } from 'react-icons/gi'

const Navbar = () => {
    const [isToggleOpen, setIsToggleOpen] = useState(false)
    return (
        <>
            {/*<!-- Header --> */}
            <header className="border-b-1 relative z-20 w-full bg-[#1E66FF] after:absolute after:top-full after:left-0 after:z-10 after:block after:h-px after:w-full lg:backdrop-blur-sm lg:after:hidden">
                <div className="relative mx-auto max-w-full px-6 lg:max-w-5xl xl:max-w-7xl 2xl:max-w-[96rem]">
                    <nav
                        aria-label="main navigation"
                        className="flex h-[5.5rem] items-stretch justify-between font-medium text-slate-700"
                        role="navigation"
                    >
                        {/*      <!-- Brand logo --> */}
                        <a
                            id="WindUI"
                            aria-label="WindUI logo"
                            aria-current="page"
                            className="flex items-center gap-2 whitespace-nowrap py-3 text-lg focus:outline-none lg:flex-1"
                            href="javascript:void(0)"
                        >
                            <p className="font-bold text-xl text-white"> SnipShop</p>
                        </a>
                        {/*      <!-- Mobile trigger --> */}
                        <button
                            className={`relative order-10 block h-10 w-10 self-center lg:hidden
                ${isToggleOpen
                                    ? "visible opacity-100 [&_span:nth-child(1)]:w-6 [&_span:nth-child(1)]:translate-y-0 [&_span:nth-child(1)]:rotate-45 [&_span:nth-child(3)]:w-0 [&_span:nth-child(2)]:-rotate-45 "
                                    : ""
                                }
              `}
                            onClick={() => setIsToggleOpen(!isToggleOpen)}
                            aria-expanded={isToggleOpen ? "true" : "false"}
                            aria-label="Toggle navigation"
                        >
                            <div className="absolute top-1/2 left-1/2 w-6 -translate-x-1/2 -translate-y-1/2 transform">
                                <span
                                    aria-hidden="true"
                                    className="absolute block h-0.5 w-9/12 -translate-y-2 transform rounded-full bg-slate-900 transition-all duration-300"
                                ></span>
                                <span
                                    aria-hidden="true"
                                    className="absolute block h-0.5 w-6 transform rounded-full bg-slate-900 transition duration-300"
                                ></span>
                                <span
                                    aria-hidden="true"
                                    className="absolute block h-0.5 w-1/2 origin-top-left translate-y-2 transform rounded-full bg-slate-900 transition-all duration-300"
                                ></span>
                            </div>
                        </button>
                        {/*      <!-- search bar --> */}
                        <div className="flex items-center w-[666px] h-8 mt-7">
                            <input type="search" name="" id="" className=" w-[650px] h-8" />
                            <div className="w-16 h-8 bg-sky-400"><span className="flex items-center justify-center h-8"><BsSearch className="cursor-pointer" /></span></div>
                        </div>
                        {/*      <!-- Actions --> */}
                        <div className="ml-auto flex items-center gap-x-12 justify-end px-6 lg:ml-0 lg:flex-1 lg:p-0">
                            <FaUser className='text-xl text-white cursor-pointer' />
                            <BsFillBagHeartFill className='text-xl text-white cursor-pointer' />
                            <BsCartPlus className='text-xl text-white cursor-pointer' />    
                            <GiHamburgerMenu className='text-2xl text-white cursor-pointer' />
                        </div>
                    </nav>
                </div>
            </header>
        </>
    )
};

export default Navbar;
