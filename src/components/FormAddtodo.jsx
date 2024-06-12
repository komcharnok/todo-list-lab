import React, { useState } from 'react'
import useAuth from '../hooks/useAuth'
import axios from 'axios'

function FormAddTodo({reload}) {
  const {user} = useAuth()
  const [title, setTitle] = useState('')

  const hdlSubmit = async e => {
    e.preventDefault()
    // validation
    if(title.trim().length < 3) {
      return alert('todo must have at least 3 characters')
    }
    const body = {
      todo : title,
      completed : false,
      userId : user.id
    }
    try {
      await axios.post('http://localhost:8000/jobs', body)
      reload()
      // location.reload('/')
    } catch(err) {
      console.log(err)
    }

  }
  return (
    <form className='form-add-todo' onSubmit={hdlSubmit}>
      <input type="text" value={title} onChange={e=>setTitle(e.target.value)} />
      <button>Add</button>
    </form>
  )
}

export default FormAddTodo