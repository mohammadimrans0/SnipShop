import { BsArrowRight } from "react-icons/bs";
import { IoIosArrowDropleftCircle, IoIosArrowDropright } from 'react-icons/io';


const FeaturedProduct = () => {
    return (
        <div className="mt-20">
            <div>
                <h1 className="relative text-5xl font-semibold text-center">Featured Product For <br /> Pre-Order</h1>
                <span className="absolute right-40 flex items-center space-x-3 cursor-pointer text-center">
                    <p className="text-base font-semibold">Discover Our Products</p>
                    <BsArrowRight className='text-xl' />
                </span>
            </div>
            {/* cart  */}
            <div className="mt-40 flex justify-center items-center gap-12">
                <div className="flex items-center justify-center gap-6 text-4xl w-80 h-[380px] cursor-pointer">
                        <IoIosArrowDropleftCircle />
                        <IoIosArrowDropright/>
                </div>
                <div className="flex flex-col justify-center items-center">
                    <div className="relative flex flex-col justify-center items-center w-80 h-[380px] shadow-3xl rounded-xl bg-white">
                        <img
                            src="https://picsum.photos/id/101/800/600"
                            alt="card image"
                            className="absolute w-80 h-72 p-2 bottom-40 rounded-xl"
                        />
                        <h3 className="absolute bottom-[120px] text-xl font-medium text-slate-700">
                            VERSACE
                        </h3>
                        <p className="absolute bottom-20 text-base "> EROS - W - Women</p>
                        <p className="absolute bottom-8 text-base font-semibold text-[#0E4B80]">$285.00 USD</p>

                    </div>
                    <button className="mt-10 bottom-0 w-32 h-10 rounded-3xl bg-black text-white">SHOP NOW</button>
                </div>
                <div className="flex flex-col justify-center items-center">
                    <div className="relative flex flex-col justify-center items-center w-80 h-[380px] shadow-3xl rounded-xl bg-white">
                        <img
                            src="https://picsum.photos/id/101/800/600"
                            alt="card image"
                            className="absolute w-80 h-72 p-2 bottom-40 rounded-xl"
                        />
                        <h3 className="absolute bottom-[120px] text-xl font-medium text-slate-700">
                            VERSACE
                        </h3>
                        <p className="absolute bottom-20 text-base "> EROS - W - Women</p>
                        <p className="absolute bottom-8 text-base font-semibold text-[#0E4B80]">$285.00 USD</p>

                    </div>
                    <button className="mt-10 bottom-0 w-32 h-10 rounded-3xl bg-black text-white">SHOP NOW</button>
                </div>
                <div className="flex flex-col justify-center items-center">
                    <div className="relative flex flex-col justify-center items-center w-80 h-[380px] shadow-3xl rounded-xl bg-white">
                        <img
                            src="https://picsum.photos/id/101/800/600"
                            alt="card image"
                            className="absolute w-80 h-72 p-2 bottom-40 rounded-xl"
                        />
                        <h3 className="absolute bottom-[120px] text-xl font-medium text-slate-700">
                            VERSACE
                        </h3>
                        <p className="absolute bottom-20 text-base "> EROS - W - Women</p>
                        <p className="absolute bottom-8 text-base font-semibold text-[#0E4B80]">$285.00 USD</p>

                    </div>
                    <button className="mt-10 bottom-0 w-32 h-10 rounded-3xl bg-black text-white">SHOP NOW</button>
                </div>
            </div>
        </div>
    );
};

export default FeaturedProduct;
       