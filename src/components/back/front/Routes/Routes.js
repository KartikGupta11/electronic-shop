import React from "react";
import Products from "../Products/Products";
import { Route,Switch } from "react-router-dom";
import Signup from "../Signup/Signup";
import Cart from "../Cart/Cart";
const Routes = ({productItems,cartItems,handleAddProduct,handleRemoveProduct,handleCartClearance}) =>{
    return<div>
        <Switch>
            <Route path="/" exact>
                <Products productItems={productItems} handleAddProduct={handleAddProduct}/>
            </Route>
            <Route path="/signup" >
                <Signup />
            </Route>
            <Route path="/cart">
                <Cart cartItems={cartItems} handleAddProduct={handleAddProduct} 
                handleRemoveProduct={handleRemoveProduct} handleCartClearance={handleCartClearance}/>
            </Route>
            
        </Switch>
    </div>;
};
export default Routes;