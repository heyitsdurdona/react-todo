import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group"
import {
    Select,
    SelectContent,
    SelectItem,
    SelectTrigger,
    SelectValue,
} from "@/components/ui/select"
import { Button } from "./ui/button"
import { useState } from "react"
import { RefreshCcw } from "lucide-react"
import { validation } from "../lib/utils"
import { toast } from "sonner"
import { AddTodo } from "../request"




export default function AddNewTodoForm({dispatch}) {
    const [addLoading, setAddLoading] = useState(false);
    const [priority, setPriority] = useState("low"); // State for priority

    function handleSubmit(e) {
    e.preventDefault();
    const formData = new FormData(e.target);
    const sendData = {};
    formData.forEach((value, key) => {
        
        if (key==="completed"){
            sendData[key] = value === "completed";
        } else {
            sendData[key] = value;
        }
    });
    const result = validation(sendData);
    
    if (result){
        const {target, message} = result;
        e.target[target].focus();
        toast.error(message);
    } else {
        setAddLoading(true);
        AddTodo(sendData)
        .then((res) => {
            toast.success("Muvaffaqiyatli qo'shildi");
            e.target.reset();
            dispatch({type: "add", payload: res})
        })
        .catch(() => {
            toast.error("Qo'shishda xatolik yuz berdi");
        })
        .finally(() => {
            setAddLoading(false);
        })

    }
}
    return (
        <form onSubmit={handleSubmit} className="flex flex-col gap-6">
            <div className="grid w-full items-center gap-1.5">
                <Label htmlFor="title">Sarlavha*</Label>
                <Input name="title" type="text" id="title" placeholder="Sarlavhani kiriting..." />
            </div>
            <div className="grid w-full items-center gap-1.5">
                <Label>Holati*</Label>
                <RadioGroup name="completed" defaultValue="uncomplete">
                    <div className="flex items-center space-x-2">
                        <RadioGroupItem value="uncomplete" id="uncomplete" />
                        <Label htmlFor="uncomplete">Bajarilmagan ❌</Label>
                    </div>
                    <div className="flex items-center space-x-2">
                        <RadioGroupItem value="completed" id="completed" />
                        <Label htmlFor="completed">Bajarilgan ✅</Label>
                    </div>
                </RadioGroup>
            </div>
            <div className="grid w-full items-center gap-1.5">
                <Label htmlFor="priority">Muhimlilik darajasi*</Label>
                <Select name="priority"
                    defaultValue="low"
                    onValueChange={(value) => setPriority(value)} // Update priority state
                >
                    <SelectTrigger className="w-full">
                        <SelectValue placeholder="Daraja" />
                    </SelectTrigger>
                    <SelectContent>
                        <SelectItem value="high">Yuqori</SelectItem>
                        <SelectItem value="medium">O'rta</SelectItem>
                        <SelectItem value="low">Quyi</SelectItem>
                    </SelectContent>
                </Select>
            </div>
            <Button disabled={addLoading} type="submit">{addLoading ? <RefreshCcw className="animate-spin"/>: "Tasdiqlash"}</Button>
        </form>
    )
}
