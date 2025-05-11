const baseURL = import.meta.env.VITE_BASE_URL;
export async function getTodos(query = ""){
    const req = await fetch(baseURL + "/todos" + query);    
    if(req.ok){
        const res = await req.json();
        return res.data;
    }else {
        throw new Error("Failed to fetch data")
    }
}

export async function AddTodo(todo){
    const req = await fetch(baseURL + "/todos", {
        method: "POST",
        body: JSON.stringify(todo),
        header:{
            "Content-Type": "application/json"
        }
    });    
    if(req.ok){
        const res = await req.json();
        return res;
    }else {
        throw new Error("Failed to add data");
    }
}

export async function deleteTodo(id){
    const req = await fetch(baseURL + "/todos/" + id, {
        method: "DELETE",
        
    });    
    if(req.ok){
        return id;
    }else {
        throw new Error("Failed to delete data");
    }
}