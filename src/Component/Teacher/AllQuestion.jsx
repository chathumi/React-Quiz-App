import React, {useEffect, useState} from 'react'
import {Link} from 'react-router-dom';
import {confirmAlert} from 'react-confirm-alert'; // Import
import 'react-confirm-alert/src/react-confirm-alert.css';


const AllQuestion = () => {
  const [taskList, setTaskList] = useState([]);

  useEffect(() => {
    fetch('http://localhost:5000/QuestionList', {
      method: "GET"
    })
      .then(response => response.json())
      .then(data => {
        setTaskList(data);
      })
      .catch((error) => {
        console.log(error);
        alert(error);
      })
  }, []);


  const handleClick = (id) => {
    console.log('taskList.id', id)
    fetch('http://localhost:5000/QuestionList/' + id, {
      method: 'DELETE'
    }).then(() => {
    });
    window.location.reload()
  };


  const handleDelete = (id) => {
    confirmAlert({
      title: 'Confirm to submit',
      message: 'Are you sure to do this.',
      buttons: [
        {
          label: 'Yes',
          onClick: () => handleClick(id)
        },
        {
          label: 'No',
          //onClick: () => alert('Click No')
        }
      ]
    });
  }


  return (
    <div>

      <div className="container mt-5">
        <div className='Create mb-5'>
          <Link to={`/teacherCreate`}>
            <button className="btn btn-warning mt-2">Create Task</button>
          </Link>

        </div>
        <div>
          <table className="table">
            <thead>
            <tr>
              <th scope="col">Question</th>
              <th scope="col">Options</th>
              <th scope="col">Answer</th>
              <th scope="col">Action</th>
            </tr>
            </thead>
            <tbody>


            {taskList.map(dataItem => {
              return (
                <tr>

                  <td>{dataItem.question}</td>
                  <td>
                    <div style={{display: 'flex', flexDirection: 'column'}}>
                      {dataItem.options.map((element, index) => {
                        return (
                          <td>{`${index + 1}. ${element} `}</td>
                        )
                      })}
                    </div>
                  </td>
                  <td>{dataItem.correctOption}</td>
                  <td>
                    <i
                      className='far fa-trash-alt mx-3'
                      style={{"color": "#ffd700", cursor: 'pointer'}}
                      onClick={() => handleDelete(dataItem.id)}
                    />
                    {/* <Link to={`/QuestionList/${dataItem.id}`}>
                      <i className='far fa-info' style={{"color": "#ffd700", cursor: 'pointer'}}/>
                    </Link> */}
                  </td>
                </tr>
              )
            })}
            </tbody>
          </table>
        </div>
      </div>

    </div>
  )


}

export default AllQuestion
