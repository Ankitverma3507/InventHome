import { Film } from "@/data/schema";
import { FC, useEffect, useState } from "react";
import FilmCardSkeleton from "./film-card-skeleton";

interface filmCardProps {
  url: string
}

const FilmCard = () => {

  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState<null | string>(null);

  // const [data, setData] = useState<Film|null>(null);
  // useEffect(() => {
  //     const fetchData = async () => {
  //       setIsLoading(true);
  //       setError(null);

  //       try {
  //         const response = await fetch(url);
  //         if (!response.ok) {
  //           throw new Error(`Error fetching data: ${response.statusText}`);
  //         }
  //         const json : Film = await response.json();
  //         setData(json);
  //       } catch (error : any) {
  //         console.error('Error fetching data:', error);
  //         setError(error.message ?? "Error occured");
  //       } finally {
  //         setIsLoading(false);
  //       }
  //     };

  //     fetchData();
  //   }, []);

  const [data, setData] = useState<Film[]>([
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
  ]);
  // console.log({data});
  
  // if (isLoading || !data || error) return <FilmCardSkeleton />
  return (
    <div className="rounded-md border-dashed border border-primary p-4 text-left space-y-2">
      <div className="flex justify-between gap-2 items-center">
        <h4 className="text-lg text-black font-medium">{data[0].customer}</h4>
        <p className="text-xs bg-accent p-1 whitespace-nowrap">{data[0].status}</p>
      </div>
      {/* <p className="line-clamp-2">{data.opening_crawl}</p>

      <div className="">
        <h4><span className="text-primary font-medium">Director:</span> {data.director}</h4>
        <h4><span className="text-primary font-medium">Producer:</span> {data.producer}</h4>
      </div> */}

    </div>
  );
}

export default FilmCard;