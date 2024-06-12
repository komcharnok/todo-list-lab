import TodoItem from './Todotem';
import userFetch from '../hooks/userFetch';

export default function TodoContainer() {
    const [jobs, error, loading] = userFetch(`http://localhost:8000/jobs`)

    if (loading) {
        return <h1>Loading...</h1>
    }
    if (error) {
        return <h1>Error : {error.message}</h1>
    }

    return (
        <div className='todo-container'>
          { jobs.map( el => (
            <TodoItem key={el.id} job={el} />
          ))
    
          }
        </div>
      )
}
