import {
    Card,
    CardContent,
    CardFooter,
    CardHeader,
    CardTitle,
} from "@/components/ui/card"
import { Button, buttonVariants } from "./ui/button"
import { Badge } from "./ui/badge"
import { CheckCircle, RefreshCcw, Trash, X } from "lucide-react"

import {
    Tooltip,
    TooltipContent,
    TooltipProvider,
    TooltipTrigger,
} from "@/components/ui/tooltip"
import { deleteTodo } from "../request"
import { useState } from "react"
import { toast } from "sonner"




export default function Todo({ priority = "secondary", title = "This is the task title", completed = false, id=1, dispatch }) {
    const [delLoading, setDelLoading] = useState(false);
    const styles = {
        hight: "destructive",
        medium: "outline",
        low: "secondary",
    }

    function handleDelete(id){
        setDelLoading(true);
        deleteTodo(id)
        .then((id)=>{
            dispatch({type: "delete", payload: id})
            toast.success("Muvaffaqiyatli o'chirildi")
        })
        .catch(()=>{})
        .finally(()=>{
            setDelLoading(false);
        })

    }
    return (
        <Card>
            <CardHeader>
                <CardTitle>{title}</CardTitle>
            </CardHeader>
            <CardContent className="flex items-center gap-5">
                <span>
                    Muhimlilik darajasi: <Badge className={"uppercase"} variant={styles[priority]}>{priority}</Badge>
                </span>
                <span className="flex items-center gap-2">
                    Holati: <Button size={"icon"} variant={completed ? "outline" : "secondary"}>{completed ? <CheckCircle /> : <X />}</Button>
                </span>
            </CardContent>
            <CardFooter>
                <TooltipProvider>
                    <Tooltip>
                        <TooltipTrigger disabled={delLoading} onClick={() => handleDelete(id)} className={buttonVariants({ variant: "destructive" })}>
                            {delLoading ? <RefreshCcw className="animate-spin" /> : <Trash />}
                        </TooltipTrigger>
                        <TooltipContent>
                            <p>O'chirmoqchimisiz?</p>
                        </TooltipContent>
                    </Tooltip>
                </TooltipProvider>
            </CardFooter>
        </Card>

    )
}
