import React, {useState} from 'react'
import validation from '../Validation';
import {useNavigate} from "react-router-dom";


const CreateQuestion = () => {
  const history = useNavigate();

  const [values, setValues] = useState({
    question: "",
    option1: "",
    option2: "",
    option3: "",
    option4: "",
    option5: "",
    correctOption: "",
  });

  console.log('---------values', values);

  const handleSubmit = (event) => {
    event.preventDefault();
    const data1 = {
      id: values['id'],
      question: values['question'],
      correctOption: values['correctOption'],
      options: [values.option1, values.option2, values.option3, values.option4, values.option5],
    };
    fetch('http://localhost:5000/QuestionList', {
      method: 'POST',
      headers: {'Content-Type': 'application/json'},
      body: JSON.stringify(data1)
    })
      .then(response => response.json())
      .then(data => {
        console.log(data);
      })
      .catch((error) => {
        console.log(error);

      });
    history('/teacher');
  };

  return (
    <div>
      <div className="main-signup">

        <div className="container-fluid h-custom my-5">
          <div className="row d-flex justify-content-center align-items-center h-100">
            <div className='col-1'>

            </div>
            <div className='col-8'>
              <div className="Create-card mx-5">
                <h1 className='header'>Create Question</h1>

                <form className='ml-0 mt-3' onSubmit={handleSubmit}>
                  <div className="mb-3">
                    <label for="floatingTextarea2"><b>Question</b></label>

                    <textarea name='question' value={values.question} className="form-control"
                              aria-label="With textarea"
                              onChange={(e) => {
                                setValues({...values, question: e.target.value})
                              }}/>
                  </div>
                  <div className="mb-3">
                    <label for="exampleOption1" className="form-label"><b>Option 1</b></label>
                    <input type="text" name='option1' className="form-control" id="exampleOption1"
                           aria-describedby="option1Help"
                           value={values.option1}
                           onChange={(e) => {
                             setValues({...values, option1: e.target.value})
                           }}/>

                  </div>
                  <div className="mb-3">
                    <label for="exampleOption2" className="form-label"><b>Option 2</b></label>
                    <input type="text" name='option2' className="form-control" id="exampleOption2"
                           aria-describedby="option2Help"
                           value={values.option2}
                           onChange={(e) => {
                             setValues({...values, option2: e.target.value})
                           }}/>

                  </div>
                  <div className="mb-3">
                    <label for="exampleOption3" className="form-label"><b>Option 3</b></label>
                    <input type="text" name='option3' className="form-control" id="exampleOption3"
                           aria-describedby="option3Help"
                           value={values.option3}
                           onChange={(e) => {
                             setValues({...values, option3: e.target.value})
                           }}/>

                  </div>
                  <div className="mb-3">
                    <label for="exampleOption4" className="form-label"><b>Option 4</b></label>
                    <input type="text" name='option4' className="form-control" id="exampleOption4"
                           aria-describedby="option4Help"
                           value={values.option4}
                           onChange={(e) => {
                             setValues({...values, option4: e.target.value})
                           }}/>

                  </div>
                  <div className="mb-3">
                    <label for="exampleOption5" className="form-label"><b>Option 5</b></label>
                    <input
                      type="text" name='option5' className="form-control" id="exampleOption5"
                      aria-describedby="option5Help"
                      value={values.option5}
                      onChange={(e) => {
                        setValues({...values, option5: e.target.value})
                      }}/>

                  </div>


                  <div className="mb-3">

                    <label for="exampleanswer" className="form-label"><b>Answer</b></label>
                    <select className="form-control" id="exampleanswer" value={values.correctOptionIndex}
                            onChange={(e) => {
                              setValues({...values, correctOption: e.target.value})
                            }}>
                      <option selected>Choose...</option>
                      <option value="1">One</option>
                      <option value="2">Two</option>
                      <option value="3">Three</option>
                      <option value="4">Four</option>
                      <option value="5">Five</option>
                    </select>
                  </div>
                  <button type="submit" className="btn btn-warning">Submit</button>
                </form>
              </div>
            </div>
            <div className='col-1'>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
};
export default CreateQuestion
