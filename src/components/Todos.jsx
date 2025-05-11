import Loading from './Loading';
import Todo from './Todo'

export default function Todos({state, dispatch}) {
  const {todos, error} = state;

  let loading= true
  if (loading){
    <Loading />
  }
  
  return (
    <div className='flex flex-col gap-5'>
      <Todo />
    </div>
  )
}
