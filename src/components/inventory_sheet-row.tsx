
import {
    Sheet,
    SheetContent,
    SheetDescription,
    SheetHeader,
    SheetTitle,
    SheetTrigger,
} from "@/components/ui/sheet"
import { FC, useState } from "react";
import {
    Table,
    TableBody,
    TableCell,
    TableHead,
    TableHeader,
    TableRow,
} from "@/components/ui/table"
import { Row, RowData, flexRender } from "@tanstack/react-table";
import { Entity, Inventory } from "@/data/schema";
import FilmCard from "./filmCard";
import FilmCardSkeleton from "./film-card-skeleton";


interface SheetRowProps {
    row: any
}

const InSheetRow: FC<SheetRowProps> = ({ row }) => {
    const entityData : Inventory[] = row.original
    return (
        <Sheet>
            <SheetTrigger asChild>
                <TableRow>
                    {row.getVisibleCells().map((cell: any) => (
                        <TableCell key={cell.id} className="text-gray-100" >
                            {flexRender(cell.column.columnDef.cell, cell.getContext())
                            
                            }
                        </TableCell>
                    ))}
                </TableRow>
                </SheetTrigger>
            <SheetContent side={"bottom"}>
                <SheetHeader>
                    {/* <SheetTitle>{entityData.id}</SheetTitle> */}
                    {/* <SheetDescription className="grid md:grid-cols-4 gap-5">
                        {entityData.map(({id,name,stock})=>{
                            return (
                                <FilmCard  key={id}/>
                            )
                        })}
                    </SheetDescription> */}
                </SheetHeader>
            </SheetContent>
        </Sheet>
    );
}

export default InSheetRow;