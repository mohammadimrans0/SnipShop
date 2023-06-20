import apple from '../assets/brand-logo/apple.png'
import bmw from '../assets/brand-logo/bmw.png'
import nike from '../assets/brand-logo/nike.png'
import fila from '../assets/brand-logo/fila.png'
import mi from '../assets/brand-logo/mi.png'
import addidas from '../assets/brand-logo/addidas.png'
import { BsArrowRight } from 'react-icons/bs';

const Brands = () => {
    return (
        <div className="mt-20 flex flex-col justify-center gap-y-24 container mx-auto h-[1400px] bg-[#F4FCFF]">
                {/*<!-- Card 1--> */}
                <div className="flex gap-x-28 justify-evenly rounded shadow-slate-200 ">
                    {/*  <!-- Image --> */}
                    <div className="grid grid-cols-3 gap-x-12 gap-y-16">
                    <div className='flex justify-center items-center w-36 h-36 bg-white rounded-2xl shadow-2xl'>
                        <img src={apple} alt="apple" className='flex justify-center items-center w-28 h-28' />
                    </div>
                    <div className='flex justify-center items-center w-36 h-36 bg-white rounded-2xl shadow-2xl'>
                        <img src={bmw} alt="BMW" className='flex justify-center items-center w-28 h-28' />
                    </div>
                    <div className='flex justify-center items-center w-36 h-36 bg-white rounded-2xl shadow-2xl'>
                        <img src={nike} alt="Nike" className='flex justify-center items-center w-28 h-28' />
                    </div>
                    <div className='flex justify-center items-center w-36 h-36 bg-white rounded-2xl shadow-2xl'>
                        <img src={fila} alt="Fila" className='flex justify-center items-center w-28 h-28' />
                    </div>
                    <div className='flex justify-center items-center w-36 h-36 bg-white rounded-2xl shadow-2xl'>
                        <img src={mi} alt="Mi" className='flex justify-center items-center w-28 h-28' />
                    </div>
                    <div className='flex justify-center items-center w-36 h-36 bg-white rounded-2xl shadow-2xl'>
                        <img src={addidas} alt="addidas" className='flex justify-center items-center w-28 h-28' />
                    </div>
                        
                    </div>
                    {/*  <!-- Body--> */}
                    <div className="flex flex-col justify-center text-start">
                    <h1 className="text-4xl font-semibold">Explore Most Popular <br /> Brands</h1>
                    <p className="text-base mt-6">Life is hard enough already. Let us <br /> make it a little easier.</p>
                    <span className="mt-8 flex items-center space-x-3 cursor-pointer">
                        <p className="text-base font-semibold">See All</p>
                        <BsArrowRight className='text-xl'/>
                    </span>
                    </div>
                </div>
            {/*<!--Card 2--> */}
            <div className="flex gap-x-28 justify-evenly rounded shadow-slate-200">
                {/*  <!-- Body--> */}
                <div className="flex flex-col justify-center text-start">
                    <h1 className="text-4xl font-semibold">Sell Easily on  Social Media</h1>
                    <p className="text-base mt-6">Life is hard enough already. Let us <br /> make it a little easier.</p>
                    <span className="mt-8 flex items-center space-x-3 cursor-pointer">
                        <p className="text-base font-semibold">See All</p>
                        <BsArrowRight className='text-xl' />
                    </span>
                </div>
                {/*  <!-- Image --> */}
                <div className="">
                    <img
                        src="https://img.freepik.com/premium-photo/one-modern-trendy-boy-teenager-sitting-ground-urban-town-park-looking-camera-concept-young-man-guy-lifestylepeople-wearing-casual-clothes-outdoo-rleisure-boy-spring_425263-6599.jpg"
                        alt="card image"
                        className="rounded-3xl"
                    />
                </div>
            </div>
        </div>
    );
};

export default Brands;