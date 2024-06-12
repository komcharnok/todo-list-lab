import axios from 'axios';
import { useState } from "react";

function TodoItem({ job, reload, editId, setEditId }) {
  const [inputTitle, setInputTitle] = useState(job.todo);
  const [isChecked, setIsChecked] = useState(job.isChecked || false); 
  const [textColor, setTextColor] = useState(job.textColor || 'black'); 


  const hdlDelete = async () => {
    if (!confirm('Confirm delete?')) {
      return;
    }
    try {
      await axios.delete(`http://localhost:8000/jobs/${job.id}`);
      reload();
    } catch (error) {
      console.log(error.message);
    }
  };

  const hdlUpdate = async () => {
    const body = { ...job, todo: inputTitle, isChecked, textColor };
    try {
      await axios.put(`http://localhost:8000/jobs/${job.id}`, body);
      reload();
    } catch (error) {
      console.log(error.message);
    }
  };

  const hdlCancel = () => {
    setInputTitle(job.todo);
    setEditId(-1);
  };

  const handleCheckboxChange = (event) => {
    const checked = event.target.checked;
    setIsChecked(checked);
    setTextColor(checked ? 'green' : 'black');
  };

  return (
    <div className="todo-item">
      {job.id === editId ? (
        <>
          <input 
            type="checkbox" checked={isChecked} onChange={handleCheckboxChange} style={{width:'20px'}}
          />
          <input 
            type="text" value={inputTitle} onChange={e => setInputTitle(e.target.value)} style={{ color: textColor }} 
          />
          <button onClick={hdlUpdate}>Save</button>
          <button onClick={hdlCancel}>Cancel</button>
        </>
      ) : (
        <>
          <input 
            type="text" 
            disabled 
            value={job.todo} 
            style={{ color: job.textColor || 'black' }} // 
          />
          <button onClick={() => setEditId(job.id)}>Edit</button>
          <button onClick={hdlDelete}>Delete</button>
        </>
      )}
    </div>
  );
}

export default TodoItem;
