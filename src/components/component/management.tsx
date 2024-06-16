"use client";
import Link from "next/link"
import { useEffect, useState } from "react"
import { Newnav } from "./newnav"
import { Inventory } from "@/data/schema"
import { columns } from "../inventory_column"
import { DataTable } from "../inventory_data-table"
export function Management() {

  const [data, setData] = useState<Inventory[]>([
    { "id": 1, "name": "Item 1", "stock": 20 },
    { "id": 2, "name": "Item 2", "stock": 15 },
    { "id": 3, "name": "Item 3", "stock": 10 },
    { "id": 4, "name": "Item 3", "stock": 0 },
    { "id": 5, "name": "Item 3", "stock": 20 }
  ]);

  const[itemname,setItemname]= useState("");
  const[stock,setStock]= useState("0");

  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState<null | string>(null);
  return (
    <div className="flex flex-col min-h-screen">
      <Newnav />
      <main className="flex-1 py-8 px-6 md:px-8 lg:px-10">
        <div>
          <div className="container mx-auto">
            <div className="mb-8">
              <h2 className="text-xl font-bold mb-4 text-muted">Inventory List</h2>
              <div className="container mx-auto py-3 text-white">
                {
                  <DataTable columns={columns} data={data} />
                }
              </div>
            </div>
            <div className="mb-8 text-muted">
              <h2 className="text-xl font-bold mb-4">Adding Items</h2>
              <div className="flex space-x-4 items-center">
                <div className="flex-1">
                  <label className="block mb-2" htmlFor="newItemName">
                    Item Name:
                  </label>
                  <input className="border border-gray-300 px-2 py-1 rounded w-full" id="newItemName" type="text" 
                  />
                </div>
                <div className="flex-1">
                  <label className="block mb-2" htmlFor="newItemStock">
                    Initial Stock:
                  </label>
                  <input className="border border-gray-300 px-2 py-1 rounded w-full" id="newItemStock" type="number" />
                </div>
                <button className="bg-muted text-ring -mb-8 px-2 h-8 rounded hover:bg-gray-800">Add Item</button>
              </div>
            </div>
            <div className="text-muted">
              <h2 className="text-xl font-bold mb-4">Deleting Items</h2>
              <p>To delete an item, click the "Delete" button from the Dropdown by clicking on three dots next to the item in the Inventory List.</p>
            </div>
          </div>
        </div>
      </main>

    </div>
  )
}
