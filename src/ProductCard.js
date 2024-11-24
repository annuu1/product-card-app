import React from "react";
import "./ProductCard.css";

const ProductCard = (product) => {

  return (
    <div className={`product-card ${product.isFavorited? "favorited": ""}`}>

      <img src="https://m.media-amazon.com/images/I/71ZAkMvUuaL._SL1500_.jpg" alt={product.name} />
      <h3>{product.name}</h3>
      <p>Price: ${product.price}</p>
      <p>{product.description}</p>
      <div>
        <button onClick={() => product.toggleFav(product.id)} className="fav-icon">{product.isFavorited ? "❤️" : "🤍"}</button>
        <button onClick={()=> product.toggleFeatures(product.id)}>
            {product.isExpanded ? 'Hide Features' : 'Show Features'}
        </button>
        {
          product.isExpanded && (
            <ul className="features">
              <li>Feature 1</li>
              <li>Feature 2</li>
              <li>Feature 3</li>
            </ul>
          )
        }
      </div>  
    </div>
  );
};

export default ProductCard;
