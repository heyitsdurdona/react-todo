import { useEffect, useReducer } from 'react'
import Header from './components/Header'
import Todos from './components/Todos'
import { getTodos } from './request';
import { toast, Toaster } from 'sonner';

function reducerFunction(state, action){
  const {type, payload} = action;
  switch(type){
    case "GET_TODOS":
      return {...state, todos: payload, loading: false};
    case "loading":
      return {...state, loading: !state.loading};
    case "add":
      return {...state, todos: [payload, ...state.todos]};
    case "error":
      return {...state, error: payload};
    case "delete":
      return {...state, todos: state.todos.filter((todo) => todo.id !== payload)};
    case "filter":
      return {...state, filter: payload};
    default:
      return state
  }

}

const initialState = {
  todos: [],
  error: null, 
  loading: false,
  filter: "",
}

export default function App() {
  const [state, dispatch] = useReducer(reducerFunction, initialState);
  useEffect(() => {
    dispatch({type: "loading"})
    getTodos(state.filter ? `?priority=${state.filter}` : "")
    .then((res) => {
      dispatch({type: "GET_TODOS", payload: res})
     })
    .catch(({message}) => {
      dispatch({type: "error", payload: message})
    })
    .finally(() => { });
  }, [state.filter]);
  return (
    <div>
      <Header dispatch={dispatch} />
      <Todos state={state} dispatch={dispatch}/>
      <Toaster />
    </div>
  )
}
