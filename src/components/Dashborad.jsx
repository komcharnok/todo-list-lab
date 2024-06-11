import React from 'react'

function Dashborad() {
  return (
    <div className='dashboard'>
      <h3>{new Date().toDateString()}</h3>
      <p>24 tasks</p>
    </div>
  )
}

export default Dashborad
