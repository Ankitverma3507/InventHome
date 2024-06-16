"use client";

import { useState } from "react"
import { Newnav } from "./newnav"
import { columns } from "../inventory_column"
import { DataTable } from "../inventory_data-table"
import { useInventory } from "@/app/context/context"
export function Management() {

  const { products } = useInventory();





  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState<null | string>(null);
  return (
    <div className="flex flex-col ">
      <Newnav />
      <main className="flex-1 h-full w-full">
        <div className="relative h-full w-full bg-slate-950">

          <div className="absolute bottom-0 left-0 right-0 top-0 bg-[linear-gradient(to_right,#4f4f4f2e_1px,transparent_1px),linear-gradient(to_bottom,#4f4f4f2e_1px,transparent_1px)] bg-[size:14px_24px]"></div>
          <div className="relative h-full min-h-screen w-full">
            <div className="container mx-auto py-3 text-white">
              <h2 className="text-xl font-bold mb-4 text-muted">Order List</h2>
              {
                <DataTable columns={columns} data={products} />
              }
            </div>
          </div>
        </div>
      </main>

    </div>
  )
}
