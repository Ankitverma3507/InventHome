import { Button } from "@/components/ui/button"
import {
    Dialog,
    DialogContent,
    DialogDescription,
    DialogFooter,
    DialogHeader,
    DialogTitle,
    DialogTrigger,
    DialogClose,
} from "@/components/ui/dialog"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { useState } from "react"

interface DialogDemoProps {
    isOpen: boolean;
    onClose: () => void;
    onSave: (name: string, stock: number) => void;
  }
export function DialogDemo({ isOpen, onClose, onSave }: DialogDemoProps) {
    const [itemName, setItemName] = useState('');
    const [itemStock, setItemStock] = useState(0);
    const handleSave = () => {
        onSave(itemName, itemStock);
        onClose();  // Close dialog after saving changes
      };
    return (
        <Dialog open={isOpen} onOpenChange={onClose}>
            <DialogTrigger asChild>
                {/* <span className="border-none text-left cursor-pointer w-full">Edit</span> */}
            </DialogTrigger>
            <DialogContent className="sm:max-w-[425px]">
                <DialogHeader>
                    <DialogTitle>Edit </DialogTitle>
                </DialogHeader>
                <div className="grid gap-4 py-4">
                    <div className="grid grid-cols-4 items-center gap-4">
                        <Label htmlFor="name" className="text-right">
                            Name
                        </Label>
                        <Input id="name"
                            value={itemName}
                            onChange={(e) => setItemName(e.target.value)}
                            required
                            className="col-span-3" />
                    </div>
                    <div className="grid grid-cols-4 items-center gap-4">
                        <Label htmlFor="stock" className="text-right">
                            Stock
                        </Label>
                        <Input id="stock"
                            value={itemStock}
                            onChange={(e) => setItemStock(Number(e.target.value))}
                            required
                            className="col-span-3" />
                    </div>
                </div>
                <DialogFooter>
                    <Button type="submit" onClick={handleSave}>Save changes</Button>
                </DialogFooter>

                <DialogClose asChild>
                    <Button type="button" variant="secondary">
                        Close
                    </Button>
                </DialogClose>
            </DialogContent>
        </Dialog>
    )
}
