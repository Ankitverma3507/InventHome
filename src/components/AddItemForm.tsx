// AddItemForm.tsx
import React, { useState } from 'react';
import { InventoryProvider, useInventory } from "@/app/context/context"

const AddItemForm: React.FC = () => {
    const [itemName, setItemName] = useState('');
    const [itemStock, setItemStock] = useState(0);
    const { products, setProducts, addProduct } = useInventory(); // Adding setProducts to context

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        const newItem = {
            id: products.length + 1, // Simple unique id generation
            name: itemName,
            stock: itemStock,
        };
        addProduct(newItem); // Add new item to context
        setItemName(''); // Clear form fields
        setItemStock(0);
    };

    return (
        <form onSubmit={handleSubmit} className='' >
            <div>
                <label>
                    Item Name:
                    <input
                        type="text"
                        value={itemName}
                        onChange={(e) => setItemName(e.target.value)}
                        required
                        className='border-2 border-gray-300 rounded-md p-1 w-full'
                    />
                </label>
            </div>
            <div>
                <label>
                    Stock:
                    <input
                        type="number"
                        value={itemStock}
                        onChange={(e) => setItemStock(Number(e.target.value))}
                        required
                        className='border-2 border-gray-300 rounded-md p-1 w-full'
                    />
                </label>
            </div>
            <button type="submit" className='bg-black text-white px-4 py-2 rounded-lg mt-2'>Add Item</button>
        </form>
    );
};

export default AddItemForm;
