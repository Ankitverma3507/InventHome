"use client";

import {  useState } from "react"
import { Newnav } from "./newnav"
import { columns } from "../inventory_column"
import { DataTable } from "../inventory_data-table"
import { useInventory } from "@/app/context/context"
export function Management() {

  const {products}=useInventory();





  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState<null | string>(null);
  return (
    <div className="flex flex-col min-h-screen">
      <Newnav />
      <main className="flex-1">
        <div>
          <div className="container ">
            <div className="">
              <div className="container mx-auto py-3 text-white">
              <h2 className="text-xl font-bold mb-4 text-muted">Inventory List</h2>
                {
                  <DataTable columns={columns} data={products} />
                }
              </div>
            </div>
            
          </div>
        </div>
      </main>

    </div>
  )
}
