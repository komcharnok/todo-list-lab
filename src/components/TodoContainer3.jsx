import React, { useEffect, useState } from 'react';
import TodoItem from './Todotem';
import axios from 'axios';

export default function TodoContainer() {

    const [todos, setTodos] = useState([]);

    useEffect(() => {
        const fetchTodos = async () => {
            try {
                const res = await axios.get('http://localhost:8000/jobs/');
                setTodos(res.data);
            } catch (error) {
                console.error(error);
            }
        };

        fetchTodos();
    }, []);

    return (
         <div>
             {todos.map((todo) => (
                 <TodoItem key={todo.id} todo={todo} />
             ))}
         </div>
      )
}
