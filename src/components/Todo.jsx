import {
    Card,
    CardContent,
    CardFooter,
    CardHeader,
    CardTitle,
} from "@/components/ui/card"
import { Button, buttonVariants } from "./ui/button"
import { Badge } from "./ui/badge"
import { CheckCircle, Trash, X } from "lucide-react"

import {
    Tooltip,
    TooltipContent,
    TooltipProvider,
    TooltipTrigger,
} from "@/components/ui/tooltip"




export default function Todo({ priority = "secondary", title = "This is the task title", completed = false }) {
    const styles = {
        hight: "destructive",
        medium: "outline",
        low: "secondary",
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
                        <TooltipTrigger className={buttonVariants({ variant: "destructive" })}>
                            <Trash />
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
