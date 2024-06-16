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
      <main className="flex-1 py-8 px-6 md:px-8 lg:px-10">
        <div>
          <div className="container mx-auto">
            <div className="mb-8">
              <div className="container mx-auto py-3 text-white">
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
