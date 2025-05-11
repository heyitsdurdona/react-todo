import Loading from './Loading';
import Todo from './Todo';

export default function Todos({ state, dispatch }) {
  const { todos, error, loading } = state;
  if (loading) {
    return <div className='container mx-auto max-w-[1200px] px-5 flex justify-center py-10'>
      <Loading />
    </div>
  }

  if (error){
    return (
      <div className='container mx-auto max-w-[1200px] px-5 flex justify-center py-10'>
      <p>{error}</p>
    </div>
    )
  }

  if (todos.length === 0){
    return (
      <div className='container mx-auto max-w-[1200px] px-5 flex justify-center py-10'>
      <p>No data</p>
    </div>
    )
  }

  return (
    <div className='flex flex-col gap-5 container mx-auto max-w-[1200px] px-5 py-10'>
      {todos.map(({completed, title, priority, id})=>{
        return <Todo completed={completed} title={title} priority={priority} key={id} id={id} dispatch={dispatch}/>
      })}
    </div>
  )
}
