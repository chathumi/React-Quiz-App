import React from 'react'
import './Student.css'

const QuizeResult = ({result,retry}) => {
  return (
    <div>
      <div className="result-screen">
        <h2>
          Result: {result.percentage}%
        </h2>
        <p>
          Selected {result.correct} correct option out of {result.total} question
        </p>
        <button className="btn btn-warning" onClick={retry}> Retry</button>
      </div>
    </div>
  )
}

export default QuizeResult
