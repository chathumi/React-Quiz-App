import React, {useEffect, useState} from 'react'
import './Student.css'
import Question from './Question.jsx';
import QuizeResult from './QuizeResult.jsx';

const QuizeScreen = ({retry}) => {
  const [QuestionList, setTaskList] = useState([]);
  const [questionIndex, setQuestionIndex] = useState(1);
  const [markAnswer, setMarkAnswer] = useState(new Array(QuestionList.length));
  const isQuestionEnd = QuestionList.length < questionIndex;

  useEffect(() => {
    fetch('http://localhost:5000/QuestionList', {
      method: "GET"
    })
      .then(response => response.json())
      .then(data => {
        console.log('datawwaswfwar', data)
        setTaskList(data);
      })
      .catch((error) => {
        console.log(error);
        alert(error);
      })
  }, []);


  const calculateResult = () => {
    let correct = 0;
    QuestionList.map((question, index) => {
      if (parseInt(question.correctOption) === markAnswer[index]) {
        correct++;
      }
    });

    return {
      total: QuestionList.length,
      correct: correct,
      percentage: Math.trunc((correct / QuestionList.length) * 100)
    }
  };


  return (
    <div className='quiz-screen'>
      {
        isQuestionEnd ? (
          <QuizeResult
            result={calculateResult()}
            retry={retry}
          />
        ) : (
          <Question
            question={QuestionList[questionIndex - 1]}
            totalQuestions={QuestionList.length}
            currentQuestion={questionIndex}
            setAnswer={(index) => {
              setMarkAnswer((arr) => {
                let newArr = [...arr];
                newArr[questionIndex - 1] = index;
                return newArr;
              });
              setQuestionIndex(questionIndex + 1);
            }}
          />
        )
      }
    </div>
  )
}

export default QuizeScreen
