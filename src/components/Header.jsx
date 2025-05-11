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


export default function Header({dispatch}) {
    return (
        <header className='py-5 shadow-md'>
            <div className="container mx-auto max-w-[1200px] px-5 flex items-center justify-between">
                <h1 className='font-medium text-3xl'>ToDo app</h1>

                <Dialog>
                    <DialogTrigger className={buttonVariants({ variant: 'default'})}>
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
