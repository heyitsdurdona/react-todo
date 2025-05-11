import { PlusCircle } from 'lucide-react'
import { Button, buttonVariants } from './ui/button'

export default function Header() {
    return (
        <header className='py-5 shadow-md'>
            <div className="container mx-auto max-w-[1200px] px-5 flex items-center justify-between">
                <h1 className='font-medium text-3xl'>ToDo app</h1>
                <Button className="bg-black text-white" variant={'outline'}>
                    <PlusCircle/>
                    New
                </Button>
            </div>
        </header>
    )
}
