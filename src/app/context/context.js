// context.js
"use client";
import { createContext, useState, useContext } from "react";

// Initial data
const initialData = [
  { id: 1, name: "Item 1", stock: 20 },
  { id: 2, name: "Item 2", stock: 15 },
  { id: 3, name: "Item 3", stock: 10 },
  { id: 4, name: "Item 3", stock: 0 },
  { id: 5, name: "Item 3", stock: 20 },
];

// Create context
export const InventoryContext = createContext();

// Provider component
export const InventoryProvider = ({ children }) => {
  const [products, setProducts] = useState(initialData);

  // Function to delete a product by id
  const deleteProduct = (id) => {
    setProducts(products.filter((product) => product.id !== id));
  };

  // Function to edit a product
  const editProduct = (id, updatedProduct) => {
    setProducts(
      products.map((product) =>
        product.id === id ? { ...product, ...updatedProduct } : product
      )
    );
  };

  const addProduct=(item)=>{
    setProducts([...products,item])
  }
  return (
    <InventoryContext.Provider value={{ products,setProducts, deleteProduct, editProduct, addProduct }}>
      {children}
    </InventoryContext.Provider>
  );
};
export const useInventory = () => {
  const context = useContext(InventoryContext);
  // console.log(context);
  return context;
};
