"use client";
import React from 'react'
import AddItemForm from './AddItemForm'
import { useInventory } from '@/app/context/context'
import { useState } from 'react'
import { Button } from "@/components/ui/button"

import {
    Dialog,
    DialogContent,
    DialogDescription,
    DialogFooter,
    DialogHeader,
    DialogTitle,
    DialogTrigger,
    DialogClose,
} from "@/components/ui/dialog"
const Additembutton = () => {
    const [isDialogOpen, setIsDialogOpen] = useState(false);
    const { products } = useInventory();

    return (
        

            <div className='relative'>
                <Dialog>
                
                <DialogTrigger asChild>
                <button className='group inline-flex h-9 w-max items-center justify-center rounded-md bg-white px-4 py-2 text-sm font-medium transition-colors hover:bg-gray-100 hover:text-gray-900 focus:bg-gray-100 focus:text-gray-900 focus:outline-none disabled:pointer-events-none disabled:opacity-50 data-[active]:bg-gray-100/50 data-[state=open]:bg-gray-100/50 dark:bg-gray-950 dark:hover:bg-gray-800 dark:hover:text-gray-50 dark:focus:bg-gray-800 dark:focus:text-gray-50 dark:data-[active]:bg-gray-800/50 dark:data-[state=open]:bg-gray-800/50' onClick={() => setIsDialogOpen(true)}>
                    
                        Add New Item
                    
                </button>
                </DialogTrigger>
                <DialogContent className="sm:max-w-[425px]">
                <AddItemForm />
                

                    <DialogClose asChild>
                        <Button type="button" className='border bg-black text-white hover:bg-black' variant="secondary">
                            Close
                        </Button>
                    </DialogClose>
            </DialogContent>
            
            </Dialog>
            </div>
        
    );
};

export default Additembutton