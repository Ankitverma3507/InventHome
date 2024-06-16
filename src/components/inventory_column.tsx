"use client"
import { useState } from "react"
import { ColumnDef } from "@tanstack/react-table"
import { Inventory } from "@/data/schema"
import { DataTableColumnHeader } from "@/components/data-table-column-header"
import { cn } from "@/lib/utils"
// import  {data as intitialdata} from "@/data/data"
import  {DataTableRowActions} from "@/components/inventory_data-table-row-action"


export const columns: ColumnDef<Inventory>[] = [
    {
        accessorKey: "id",
        enableSorting: false,
        header: ({ column }) => (
            <DataTableColumnHeader column={column} title="Id" />
        ),
    },
    {
        accessorKey: "name",
        header: ({ column }) => (
            <DataTableColumnHeader column={column} title="Item Name" />
        ),
        enableSorting: true,

    },
    {
        accessorKey: "stock",
        enableSorting: true,
        header: ({ column }) => (
            <DataTableColumnHeader column={column} title="Stock" />
        ),
    },

    {
        accessorKey: "status",
        enableSorting: false,

        header: ({ column }) => (
            <DataTableColumnHeader column={column} title="Status" />
        ),
        cell: ({ row }) => {
            // Calculate the status based on the stock value
            const stock = row.getValue("stock") as number;
            const status = stock > 0 ? "Available" : "Not Available";
            const statusColor = stock > 0 ? "text-green-500" : "text-red-500";

            return (
                <div className="flex space-x-2">
                    <span className={cn(statusColor)}>
                        {status}
                    </span>
                </div>
            )
        },
        filterFn: (row, id, value) => {
            // Adjust the filter function to match the calculated status
            const stock = row.getValue("stock") as number;
            const status = stock > 0 ? "Available" : "Not Available";
            return value.includes(status);
        },
    },
    {
        id: "actions",
        cell: ({ row }) => <DataTableRowActions row={row} />,
      },
    
]




