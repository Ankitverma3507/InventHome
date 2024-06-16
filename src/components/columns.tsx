"use client"

import { ColumnDef } from "@tanstack/react-table"
import { Entity } from "@/data/schema"
import { DataTableColumnHeader } from "@/components/data-table-column-header"
import { cn } from "@/lib/utils"

export const columns: ColumnDef<Entity>[] = [
  {
    accessorKey: "id",
    enableSorting: false,
    header: ({ column }) => (
        <DataTableColumnHeader column={column} title="Id" />
      ),
  },
  {
    accessorKey: "customer",
    header: ({ column }) => (
        <DataTableColumnHeader column={column} title="Customer Name" />
      ),
    enableSorting: true,
    
  },
  
  
  {
    accessorKey: "status",
    enableSorting: false,
    
    header: ({ column }) => (
        <DataTableColumnHeader column={column} title="Status" />
      ),
    cell: ({ row }) => {
        return (
          <div className="flex space-x-2">
            <span className={cn(row.getValue("status") == "Completed" ? "text-yellow-100" : row.getValue("status")=="Pending"? "text-pink-100" : "text-white")}>
              {row.getValue("status")}
            </span>
          </div>
        )
      },
    filterFn: (row, id, value) => {
        return value.includes(row.getValue(id))
      },
  },
  {
    accessorKey: "items.length",
    enableSorting: true,
    header: ({ column }) => (
        <DataTableColumnHeader column={column} title="Quantity" />
      ),
  },
  // {
  //   accessorKey: "hair_color",
  //   enableSorting: false,
  //   header: ({ column }) => (
  //       <DataTableColumnHeader column={column} title="Hair Color" />
  //     ),
  // },
]







