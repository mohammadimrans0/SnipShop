import { BsFillArrowLeftCircleFill, BsArrowRightCircle } from 'react-icons/bs';

const Testimonial = () => {
    return (
        <div className="mt-20 container mx-auto">
            {/*<!-- Component: Horizontal card--> */}
            <div className="flex gap-x-28 rounded shadow-md shadow-slate-200">
                {/*  <!-- Image --> */}
                <div className="">
                    <img
                        src="https://img.freepik.com/premium-photo/portrait-happy-young-casual-man-standing_171337-29744.jpg"
                        alt="card image"
                        className="rounded-3xl"
                    />
                </div>
                {/*  <!-- Body--> */}
                <div className="flex flex-col justify-center text-start">
                    <h3 className="text-xl font-medium text-slate-700">
                        Justin Pierre
                    </h3>
                    <p className="text-sm text-slate-400">Products Seller</p>
                    <p className="my-8 text-xl">
                        <span className="font-bold text-4xl">“</span><br /> In 2 years, my business went from just me <br /> and my Shop site to 40 employees, my own <br /> fulfillment center and over 22 million dollars <br /> in revenue. <span className="font-bold">”</span>
                    </p>
                    <span className='flex items-center space-x-3 text-2xl cursor-pointer'>
                        <BsFillArrowLeftCircleFill />
                        <BsArrowRightCircle/>
                    </span>
                </div>
            </div>
        </div>
    );
};

export default Testimonial;
