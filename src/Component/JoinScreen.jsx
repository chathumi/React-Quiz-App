import React from 'react'
import './Student.css'

const JoinScreen = ({start}) => {
  return (
    <div className='join-screen'>
        <h2>Join Quiz</h2>
        <button type="button" className="btn btn-warning"onClick={start}>Start</button>

    </div>
  )
}

export default JoinScreen
