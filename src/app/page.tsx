'use client'
import { useEffect, useState } from "react"
import { columns } from "../components/columns"
import { DataTable } from "../components/data-table"
import { Entity } from "@/data/schema"
import { Loader2Icon } from "lucide-react"
import { Newnav } from "@/components/component/newnav"
import { InventoryProvider } from "./context/context";
interface ApiResponse {
  results: Entity[];
}


export default function Page() {

  const [data, setData] = useState<Entity[]>([
    {
      id: 1,
      customer: "Customer A",
      items: [
        { id: 1, name: "Item 1", quantity: 5 },
        { id: 2, name: "Item 2", quantity: 3 },
      ],
      status: "Pending",
    },
    {
      id: 2,
      customer: "Customer B",
      items: [
        { id: 1, name: "Item 1", quantity: 2 },
        { id: 3, name: "Item 3", quantity: 1 },
      ],
      status: "Completed",
    },
    {
      id: 3,
      customer: "Customer C",
      items: [
        { id: 1, name: "Item 1", quantity: 2 },
        { id: 3, name: "Item 3", quantity: 1 },
        { id: 3, name: "Item 3", quantity: 1 },
      ],
      status: "Completed",
    },
    {
      id: 4,
      customer: "Customer D",
      items: [
        { id: 1, name: "Item 1", quantity: 2 },
        { id: 3, name: "Item 3", quantity: 1 },
        { id: 3, name: "Item 3", quantity: 1 },
      ],
      status: "Pending",
    },
    {
      id: 5,
      customer: "Customer E",
      items: [
        { id: 1, name: "Item 1", quantity: 2 },
        { id: 3, name: "Item 3", quantity: 1 },
        { id: 3, name: "Item 3", quantity: 1 },
      ],
      status: "Pending",
    },
    {
      id: 6,
      customer: "Customer F",
      items: [
        { id: 1, name: "Item 1", quantity: 2 },
        { id: 3, name: "Item 3", quantity: 1 },
        { id: 3, name: "Item 3", quantity: 1 },
      ],
      status: "Pending",
    },
  ]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState<null | string>(null);
  // useEffect(() => {
  //   const fetchAllPages = async () => {
  //     setIsLoading(true);
  //     setError(null);

  //     const urls = [];
  //     for (let page = 1; page <= 8; page++) {
  //       urls.push(`https://swapi.dev/api/people?page=${page}`);
  //     }

  //     try {
  //       const responses = await Promise.all(urls.map(url => fetch(url)));
  //       const jsonData = await Promise.all(responses.map(response => response.json()));
  //       const allResults = jsonData.flatMap(data => data.results);
  //       setData(allResults);
  //     } catch (error) {
  //       console.error('Error fetching data:', error);
  //       setError('Error fetching data. Please try again.');
  //     } finally {
  //       setIsLoading(false);
  //     }
  //   };

  //   fetchAllPages();
  // }, []);


  return (
    <InventoryProvider>

    <div className="relative h-full w-full bg-slate-950">

      <div className="absolute bottom-0 left-0 right-0 top-0 bg-[linear-gradient(to_right,#4f4f4f2e_1px,transparent_1px),linear-gradient(to_bottom,#4f4f4f2e_1px,transparent_1px)] bg-[size:14px_24px]"></div>
      <div className="relative h-full min-h-screen w-full">
        <Newnav />
        <div className="container mx-auto py-3 text-white">
        <h2 className="text-xl font-bold mb-4 text-muted">Order List</h2>
          {
            <DataTable columns={columns} data={data} />
          }
        </div>
      </div>
    </div>
    </InventoryProvider>
  )
}
