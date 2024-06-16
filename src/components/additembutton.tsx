"use client";
import React from 'react'
import Dialog from './Dialog'
import AddItemForm from './AddItemForm'
import { InventoryProvider, useInventory } from '@/app/context/context'
import { useState } from 'react'
import { Inventory } from '@/data/schema'


const Additembutton = () => {
    const [isDialogOpen, setIsDialogOpen] = useState(false);
    const { products } = useInventory();

    return (
        <InventoryProvider>

            <div>
                {/* <h1>Product Inventory</h1> */}
                <button className='group inline-flex h-9 w-max items-center justify-center rounded-md bg-white px-4 py-2 text-sm font-medium transition-colors hover:bg-gray-100 hover:text-gray-900 focus:bg-gray-100 focus:text-gray-900 focus:outline-none disabled:pointer-events-none disabled:opacity-50 data-[active]:bg-gray-100/50 data-[state=open]:bg-gray-100/50 dark:bg-gray-950 dark:hover:bg-gray-800 dark:hover:text-gray-50 dark:focus:bg-gray-800 dark:focus:text-gray-50 dark:data-[active]:bg-gray-800/50 dark:data-[state=open]:bg-gray-800/50' onClick={() => setIsDialogOpen(true)}>Add New Item</button>

                <div>
                    {products.map((item:Inventory) => (
                        <div key={item.id}>
                            <span>{item.name} - {item.stock}</span>
                        </div>
                    ))}
                </div>

                <Dialog isOpen={isDialogOpen} onClose={() => setIsDialogOpen(false)}>
                    <h2>Add New Item</h2>
                    <AddItemForm />
                </Dialog>
            </div>
        </InventoryProvider>
    );
};

export default Additembutton