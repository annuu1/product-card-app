// import { useState } from 'react';
import React, {useState} from 'react';
import ProductCard from './ProductCard';
import './App.css';

const App = () => {
        const [products, setProducts] = useState([
            { id: 1, name: 'Product 1', price: 100, isFavorited: true, description: 'This is a great product.', isExpanded: true},
            { id: 2, name: 'Product 2', price: 200, isFavorited: false, description: 'This is another great product.', isExpanded: true },
            { id: 3, name: 'Product 2', price: 200, isFavorited: false, description: 'This is another great product.',  isExpanded: false},
            { id: 4, name: 'Product 2', price: 200, isFavorited: false, description: 'This is another great product.',  isExpanded: true},
            { id: 5, name: 'Product 2', price: 200, isFavorited: true, description: 'This is another great product.',  isExpanded: true},
        ]);

        function toggleFav(id){
            let newProducts =products.map((product)=>{
                if(product.id === id){
                    return { ...product, isFavorited: !product.isFavorited };
                }
                return product;
            })
            setProducts(newProducts);
        }

        function toggleFeatures(id){
            let newProducts = products.map((product) =>{
                if(product.id === id){
                    return { ...product, isExpanded : !product.isExpanded}
            }
            return product;
         })
         setProducts(newProducts);
        }

    return (
        <div className="App">
            <h1>Product Card Application</h1>
            <button onClick={() => toggleFav(4)}>Count : {products[0].isFavorited ? products[0].price : "0"}</button>
            <div className="product-cards">
                {
                    products.map((product) => {
                        return <ProductCard key={product.id} {...product} toggleFav={toggleFav} toggleFeatures={toggleFeatures} />
                    })
                }
            </div>
            
        </div>
    );
};

export default App;