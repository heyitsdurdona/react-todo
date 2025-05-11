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
    case "error":
      return {...state, error: payload};
    case "delete":
      return {...state, todos: state.todos.filter((todo) => todo.id !== payload)};
    default:
      return state
  }

}

const initialState = {
  todos: [],
  error: null, 
  loading: false,
}

export default function App() {
  const [state, dispatch] = useReducer(reducerFunction, initialState);
  useEffect(() => {
    dispatch({type: "loading"})
    getTodos()
    .then((res) => {
      dispatch({type: "GET_TODOS", payload: res})
     })
    .catch(({message}) => {
      dispatch({type: "error", payload: message})
    })
    .finally(() => { });
  }, []);
  return (
    <div>
      <Header />
      <Todos state={state} dispatch={dispatch}/>
      <Toaster />
    </div>
  )
}
