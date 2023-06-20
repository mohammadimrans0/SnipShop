import { BsFillArrowDownCircleFill } from 'react-icons/bs';
import camera from '../assets/camera.png';

const Banner = () => {
    return (
        <div className='w-full'>
            <div className="bg-[#7DE1EF]">
                <div className='w-full h-8'></div>
                <div>
                    <ul className="flex justify-center gap-10 cursor-pointer">
                        <li>Jewelry & Accessories</li>
                        <li className="underline">Clothing & Shoes</li>
                        <li>Home & Living</li>
                        <li>Wedding & Party</li>
                        <li>Toys & Entertainment</li>
                        <li>Art & Collectibles</li>
                        <li>Craft Supplies & Tools</li>
                        <li>Vintage</li>
                    </ul>
                </div>
                <div className='mt-32 flex justify-center gap-32'>
                    <div className="flex flex-col justify-center text-start">
                        <p className="text-base mb-4">100% QUALITY, 100% SATISFACTION</p>
                        <h1 className="text-6xl font-bold">Where the world <br /> comes to shop.</h1>
                        <p className="text-xl mt-8">Life is hard enough already. Let us make it a little <br /> easier, Vision of Snipshop for a better outlook.</p>
                        <div className='flex items-center justify-between'>
                            <button className="mt-16 w-32 h-12 rounded-3xl bg-black text-white">SHOP NOW</button>
                            <span className='mt-12'>
                                <p className="text-base mb-1">Start from</p>
                                <h1 className="text-4xl font-semibold">110.00$</h1>
                            </span>
                        </div>
                    </div>
                    <div className='w-[400px] h-[400px] border-[16px] border-blue-400 rounded-full'>
                        <img src={camera} alt="" className='p-6' />
                    </div>
                    <div className='flex flex-col gap-y-8'>
                        <div className='flex flex-col justify-center items-center'>
                            <img src="https://img.lovepik.com/element/40168/0122.png_860.png" alt="" className='w-36 h-36 rounded-full' />
                            <p className='text-sm'>Fuji 14mm <br /> Lens</p>
                        </div>
                        <div className='flex flex-col justify-center items-center'>
                            <img src="https://cdn.imgbin.com/10/15/13/imgbin-gimbal-camera-stabilizer-digital-slr-mirrorless-interchangeable-lens-camera-camera-WQehKTkfBPerB9LJvCmYPRwf2.jpg" alt="" className='w-36 h-36 rounded-full' />
                            <p className='text-sm'>Camera <br /> Gimbal</p>
                        </div>
                        <div className='flex flex-col justify-center items-center'>
                            <BsFillArrowDownCircleFill className='text-3xl cursor-pointer' />
                        </div>
                    </div>
                </div>
            </div>
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320"><path fill="#7DE1EF" fillOpacity="1" d="M0,96L48,101.3C96,107,192,117,288,144C384,171,480,213,576,213.3C672,213,768,171,864,165.3C960,160,1056,192,1152,197.3C1248,203,1344,181,1392,170.7L1440,160L1440,0L1392,0C1344,0,1248,0,1152,0C1056,0,960,0,864,0C768,0,672,0,576,0C480,0,384,0,288,0C192,0,96,0,48,0L0,0Z"></path></svg>

        </div>
    );
};

export default Banner;