import { Film } from "@/data/schema";
import { FC, useEffect, useState } from "react";
import FilmCardSkeleton from "./film-card-skeleton";
import { Item } from "@/data/schema";

interface filmCardProps {
  url: string
}

const FilmCard = ({item} : {item:Item}) => {

  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState<null | string>(null);

  return (
    <div className="rounded-md border-dashed border border-primary p-4 text-left space-y-2">
      <div className="flex justify-between gap-2 items-center">
        <h4 className="text-lg text-black font-medium">{item.name}</h4>
        <p className="text-xs bg-accent p-1 whitespace-nowrap">{item.quantity}</p>
      </div>
    </div>
  );
}

export default FilmCard;