import { useEffect, useState } from 'react';
import TrendingProductCart from '../shared/TrendingProductCart';

const TrendingProducts = () => {
    const [trendingProducts, setTrendingProducts] = useState([]);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await fetch('https://dummyjson.com/products/category/smartphones');
                if (response.ok) {
                    const data = await response.json();
                    setTrendingProducts(data.products);
                } else {
                    throw new Error('API request failed with status ' + response.status);
                }
            } catch (error) {
                console.log('Error fetching data:', error);
                // Handle the error state or show an error message to the user
            }
        };

        fetchData();
    }, []);

    return (
        <div>
            <h1 className="text-center text-4xl font-bold">Shop Our Trending Products</h1>
            <p className="text-center mt-6 text-xl">Life is hard enough already. Let us make it <br /> a little easier.</p>
            <div className="mt-12">
                <ul className="flex justify-center gap-x-5 cursor-pointer">
                    <li className="underline">Fashion</li>
                    <li>Technology</li>
                    <li>Interiors</li>
                    <li>Food & Drink</li>
                </ul>
            </div>
            <div className="mt-28 flex justify-center gap-x-16">
                {trendingProducts.map(trendingProduct => (
                    <TrendingProductCart
                        key={trendingProduct.id}
                        trendingProduct={trendingProduct}
                    />
                ))}              
            </div>
        </div>
    );
};

export default TrendingProducts;