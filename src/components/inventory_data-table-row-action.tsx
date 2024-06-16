"use client"

import { DotsHorizontalIcon } from "@radix-ui/react-icons"
import { Row } from "@tanstack/react-table"

import { Button } from "@/components/ui/button"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuRadioGroup,
  DropdownMenuRadioItem,
  DropdownMenuSeparator,
  DropdownMenuShortcut,
  DropdownMenuSub,
  DropdownMenuSubContent,
  DropdownMenuSubTrigger,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"

import { labels } from "../data/data"
import { Inventory } from "../data/schema"
import { InventoryProvider, useInventory } from "../app/context/context"
import { use } from "react"
import { useContext,useState } from "react"
import { DialogDemo } from "./editProfile"


interface DataTableRowActionsProps<TData> {
  row: Row<TData>
}

export function DataTableRowActions<TData>(
  {
  row,
}: DataTableRowActionsProps<TData>) {
  const task = row.original

  const { deleteProduct, editProduct } = useInventory();
  const product = row.original as { id: number; name: string; stock: number }; // Ensure the type matches

  const handleDelete = () => {
    deleteProduct(product.id);
  };

  const handleEdit = (name: string, stock: number) => {
    const updatedProduct = { name, stock };
    editProduct(product.id, updatedProduct);
  };
  
  const [isDialogOpen, setIsDialogOpen] = useState(false);
  const openDialog = () => setIsDialogOpen(true);
  const closeDialog = () => setIsDialogOpen(false);
  return (
    <>
    

      <DropdownMenu>
        <DropdownMenuTrigger asChild>
          <Button
            variant="ghost"
            className="flex h-8 w-8 p-0 data-[state=open]:bg-muted"
          >
            <DotsHorizontalIcon className="h-4 w-4" />
            <span className="sr-only">Open menu</span>
          </Button>
        </DropdownMenuTrigger>
        <DropdownMenuContent align="end" className="w-[160px]">
        <DropdownMenuItem onClick={openDialog}>
            Edit
          </DropdownMenuItem>

          <DropdownMenuItem onClick={handleDelete} className="cursor-pointer">
            Delete
            <DropdownMenuShortcut>⌘⌫</DropdownMenuShortcut>
          </DropdownMenuItem>
        </DropdownMenuContent>
      </DropdownMenu>

    
      <DialogDemo
        isOpen={isDialogOpen}
        onClose={closeDialog}
        onSave={handleEdit}
      />
    </>
  )
}







