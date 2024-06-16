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
import { useContext } from "react"


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

  const handleEdit = () => {
    // Logic to edit the product. This could involve opening a modal with a form.
    // Example:
    const updatedProduct = { name: "Updated Name", stock: 10 }; // This should come from user input
    editProduct(product.id, updatedProduct);
  };
  
  
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
          <DropdownMenuItem onClick={handleEdit}>Edit</DropdownMenuItem>

          <DropdownMenuItem onClick={handleDelete}>
            Delete
            <DropdownMenuShortcut>⌘⌫</DropdownMenuShortcut>
          </DropdownMenuItem>
        </DropdownMenuContent>
      </DropdownMenu>

    

    </>
  )
}







