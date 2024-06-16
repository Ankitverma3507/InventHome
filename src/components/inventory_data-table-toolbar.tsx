"use client"

import { Cross2Icon } from "@radix-ui/react-icons"
import { Table } from "@tanstack/react-table"

import { Button } from "../components/ui/button"
import { Input } from "../components/ui/input"
import { InDataTableFacetedFilter } from "./inventory_data-table-faceted-filter"
import Additembutton from "./additembutton"

interface DataTableToolbarProps<TData> {
  table: Table<TData>
}

export const statuses = [
  {
    label: "Available",
    value: "Available",
 
  },
  {
    label: "Not Available",
    value: "Not Available",
 
  },
]


export function InDataTableToolbar<TData>({
  table,
}: DataTableToolbarProps<TData>) {
  const isFiltered = table.getState().columnFilters.length > 0

  return (
    <div className="flex items-center justify-between text-black">
      <div className="flex flex-1 items-center space-x-2">
        <Input
          placeholder="Search for your favourite character..."
          value={(table.getColumn("name")?.getFilterValue() as string) ?? ""}
          onChange={(event) =>
            table.getColumn("name")?.setFilterValue(event.target.value)
          }
          className="h-8 w-[150px] lg:w-[250px]"
        />
        {table.getColumn("status") && (
          <InDataTableFacetedFilter
          column={table.getColumn("status")}
            title="Status"
            options={statuses}/>
        )}
        {isFiltered && (
          <Button
            variant="ghost"
            onClick={() => table.resetColumnFilters()}
            className="h-8 px-2 lg:px-3 text-white"
          >
            Reset
            <Cross2Icon className="ml-2 h-4 w-4" />
          </Button>
        )}
      </div>

      <div>
        <Additembutton />
      </div>
    </div>
  )
}
