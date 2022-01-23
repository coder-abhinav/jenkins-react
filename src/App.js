import "./App.css";
import Navbar from "./components/navbar";
import Product from "./components/Product";
import ProductList from "./components/ProductList";
//import Footer from "./components/Footer";
import React, { useState } from "react";

function App() {
  const products = [
    {
      price: 79999,
      name: "Iphone 13",
      quantity: 0,
    },
    {
      price: 9999,
      name: "Redmi Note 8",
      quantity: 0,
    },
  ];
  const [productList, setProductList] = useState(products);
 async function incrementQuantity(index){
    let newProductList =  [...products];
    
    if(!!newProduct List[index]){
     
   newProductList[index].quantity=4;
    console.log(newProductList,"index")
     setProductList(newProductList);
    }
  };

  return (
    <>
      <Navbar />
      <main className="container mt-5">
        <ProductList
          products={productList}
          incrementQuantity={(e)=>{incrementQuantity(e)}}
        />
      </main>
      {/*<Footer/>*/}
    </>
  );
}

export default App;
