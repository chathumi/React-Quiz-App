import React, { useState } from 'react'
import JoinScreen from './JoinScreen';
import QuizeScreen from './QuizeScreen'
import './Student.css'

const Student = () => {
    const [isQuizedStarted,setisQuizedStarted]=useState(false);
  return (
    <div className='quiz-container'>
        {
            isQuizedStarted ? (
                <QuizeScreen retry={()=>setisQuizedStarted(false)}/>
            ):(
                <JoinScreen start={()=>setisQuizedStarted(true)}/>
            )
        }
        
    </div>
  )
}

export default Student