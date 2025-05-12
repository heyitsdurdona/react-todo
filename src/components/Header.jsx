import { PlusCircle } from 'lucide-react'
import { Button, buttonVariants } from './ui/button'

import {
    Dialog,
    DialogContent,
    DialogDescription,
    DialogHeader,
    DialogTitle,
    DialogTrigger,
} from "@/components/ui/dialog"
import AddNewTodoForm from './AddNewTodoForm'

import {
    Select,
    SelectContent,
    SelectItem,
    SelectTrigger,
    SelectValue,
} from "@/components/ui/select"



export default function Header({ dispatch }) {
    function handleFilter(value){
        dispatch({type: "filter", payload: value})

    }

    return (
        <header className='py-5 shadow-md'>
            <div className="container mx-auto max-w-[1200px] px-5 flex items-center justify-between">
                <h1 className='font-medium text-3xl'>ToDo app</h1>
                <Select onValueChange={handleFilter}>
                    <SelectTrigger className="w-[180px]">
                        <SelectValue placeholder="Daraja bo'yicha filterlash" />
                    </SelectTrigger>
                    <SelectContent>
                        <SelectItem value="high">Yuqori</SelectItem>
                        <SelectItem value="medium">O'rta</SelectItem>
                        <SelectItem value="low">Quyi</SelectItem>
                    </SelectContent>
                </Select>
 

                <Dialog>
                    <DialogTrigger className={buttonVariants({ variant: 'default' })}>
                        <PlusCircle />
                        New
                    </DialogTrigger>
                    <DialogContent>
                        <DialogHeader>
                            <DialogTitle>Yangi Todo qo'shish</DialogTitle>
                            <DialogDescription>
                                Siz bu yerda yangi todo qo'shishingiz mumkin.
                            </DialogDescription>
                        </DialogHeader>
                        <AddNewTodoForm dispatch={dispatch} />
                    </DialogContent>
                </Dialog>

            </div>
        </header>
    )
}
