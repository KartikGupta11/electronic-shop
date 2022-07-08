import React,{useState} from 'react';
import data from './components/back/data/Data';

import Header from './components/back/front/Header/Header';
import { BrowserRouter as Router } from 'react-router-dom';
import Routes from './components/back/front/Routes/Routes';
import './App.css';


const App = () =>{
  const{ productItems} = data;
  const[cartItems,setCartItems]= useState([]);

  const handleAddProduct =(product) =>{
    const ProductExist = cartItems.find((item) => item.id === product.id);
    if (ProductExist){
      setCartItems(cartItems.map((item)=> item.id === product.id?
      {...ProductExist, quantity: ProductExist.quantity+1}: item)
      );
    } else{
      setCartItems([...cartItems,{...product, quantity:1}]);
    }

  };

  const handleRemoveProduct =(product) =>{
    const ProductExist = cartItems.find((item) => item.id === product.id);
    if(ProductExist.quantity ===1){
      setCartItems(cartItems.filter((item)=> item.id !== product.id));

    }else{
      setCartItems(
        cartItems.map((item) => item.id ===product.id?{...ProductExist, quantity: ProductExist.quantity-1}:item
        )
      );
    }

  };

  const handleCartClearance =() =>{
    setCartItems([]);
  }
  return( <div>
    <Router>
      
    <Header cartItems={cartItems}/>
    <Routes productItems={productItems}  
    cartItems={cartItems} 
    handleAddProduct={handleAddProduct}
    handleRemoveProduct={handleRemoveProduct}
    handleCartClearance={handleCartClearance} />
      
    </Router>
  </div>
  );
};

export default App;
