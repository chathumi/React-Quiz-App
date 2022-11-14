import React from 'react'
import {useState, useRef} from 'react'
import {flushSync} from 'react-dom'
import './Student.css'

const Question = ({question, totalQuestions, currentQuestion, setAnswer}) => {
  const [selectedOption, setSelectedOption] = useState(null);
  const timer = useRef(null);
  const progressBar = useRef(null);

  const gotoNextQuestion = () => {
    if (timer.current) {
      clearTimeout(timer.current);
    }
    flushSync(() => {
      setAnswer(selectedOption);
    });
    setSelectedOption(null);
  };


  return (
    <div className='question'>
      <div className='progress-bar' ref={progressBar}/>
      <div className='question-count'>
        <b>
          {currentQuestion}
        </b>
        of
        <b>
          {totalQuestions}
        </b>
      </div>
      <div className='main'>
        <div className='title'>
          {/* <span>Question:</span> */}
          <p>{question.question}</p>
        </div>
        <div className='options'>
          {
            question.options.map((option, index) => {
              return (
                <div
                  style={{
                    background: index + 1 === selectedOption ? '#1428cd' : '#fff',
                    color: index + 1 === selectedOption ? '#fff' : '#000'
                  }}
                  className={index + 1 === selectedOption ? "option active" : "option"}
                  key={index}
                  onClick={() => setSelectedOption(index + 1)}
                >
                  {option}
                </div>
              )
            })
          }
        </div>
      </div>

      <div className='control'>
        <button className="btn btn-warning" onClick={() => {
          gotoNextQuestion()
        }}>Next
        </button>
      </div>

    </div>
  )
}

export default Question
