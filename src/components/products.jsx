import { useEffect, useState } from 'react';
import ProductCart from '../shared/ProductCart';

const Products = () => {
    const [products, setProducts] = useState([]);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await fetch('https://dummyjson.com/products?limit=9');
                if (response.ok) {
                    const data = await response.json();
                    setProducts(data.products);
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
        <div className='container mx-auto mt-28'>
            <h1 className="text-5xl font-semibold">Shop by Category</h1>
            <p className="mt-6 text-xl">Life is hard enough already. Let us <br /> make it a little easier.</p>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-16 p-16">
                {products.map(product => (
                    <ProductCart
                        key={product.id}
                        product={product}
                    />
                ))}
            </div>
        </div>
    );
};

export default Products;