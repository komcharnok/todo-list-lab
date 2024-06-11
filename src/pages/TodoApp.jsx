import React from 'react'
import Dashborad from '../components/Dashborad'
import FormAddtodo from '../components/FormAddtodo'
import TodoContainer from '../components/TodoContainer'


export default function TodoApp() {
  return (
    <>
    <h1>Jobs</h1>
    <div className='todoapp'>
      <Dashborad/>
      <FormAddtodo/>
      <TodoContainer/>
    </div>
    </>
  )
}
