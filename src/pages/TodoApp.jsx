import React from 'react'
import Dashborad from '../components/Dashborad'
import FormAddtodo from '../components/FormAddtodo'
import TodoContainer from '../components/TodoContainer'
// import TodoItem from '../components/Todotem';

import userFetch from '../hooks/userFetch';



export default function TodoApp() {
  const [jobs, error, loading, reload] = userFetch(`http://localhost:8000/jobs`)

  if (loading) {
      return <h1>Loading...</h1>
  }
  if (error) {
      return <h1>Error : {error.message}</h1>
  }
  return (
    <>
    <h1>Jobs</h1>
    <div className='todoapp'>
      <Dashborad amount={jobs.length}/>
      <FormAddtodo reload={reload}/>
      <TodoContainer jobs={jobs} reload={reload}/>

    </div>
    </>
  )
}
