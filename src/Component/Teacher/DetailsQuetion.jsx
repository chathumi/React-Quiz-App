// import React, { useEffect, useState } from 'react'

// const DetailsQuetion = () => {
//   const [taskList, setTaskList] = useState([]);

//   useEffect(() => {
//     fetch('http://localhost:5000/QuestionList/'+id, {
//         method: "GET"
//     })
//         .then(response => response.json())
//         .then(data => {
//             console.log('data',data)
//             setTaskList(data);
//         })
//         .catch((error) => {
//             console.log(error);
//             alert(error);
//         })


// }, [])
//   return (
//     <div>
//       <div className='card-wrapper1 mx-2'>
//                     <div className="card-top1" style={{ "background-color": "#ffd700" }}></div>
//                     <div className="task-holder1">

//                         <br></br>
//                         <p className='des mb-5'>{taskList.DetailsQuetion}</p>
//                         <div className="row mt-0">
//                             <div className="col-6 my-3">
//                                 <p>Date : {taskList.}</p>
//                             </div>
//                             <div className="col-6 my-3">
//                                 <p>Time : {taskList.sheduleTime}</p>
//                             </div>
//                         </div>
//                         </div>
//                         </div>


//     </div>
//   )
// }

// export default DetailsQuetion

import React, { useEffect,useState } from 'react'
import { useParams } from 'react-router-dom';

const DetailsQuetion = () => {
  const params = useParams();
  console.log('para',params);
  const [task, setTask] = useState({});
  console.log('data1222',task);
    useEffect(() => {
    fetch('http://localhost:5000/QuestionList/', {
        method: "GET"
    })
        .then(response => response.json())
        .then(data => {
            console.log('data1',data);
            const taskvalue=data.find(item=>item.id===parseInt(params.id))
            setTask(taskvalue);
        })
        .catch((error) => {
            console.log(error);
            alert(error);
        })
      }, [params])
  return (
    <div className='container'>
        <div className="card text-center mt-5">
  {/* <div className="card-header">
    Featured
  </div> */}
  <div className="card-body">
    <h5 className="card-title">{task.question}</h5>
    <p className="card-text">{task.options}</p>

    {/* {task.options.map(dataItem => {
                                return (
                                    <p className="card-text">{dataItem.}</p>

                                )
                            })} */}
    <a href="#" className="btn btn-primary">Go somewhere</a>
  </div>

</div>
       <div>
      <div className='card-wrapper1 mx-2'>
                    <div className="card-top1" style={{ "background-color": "#ffd700" }}></div>
                    <div className="task-holder1">

                        <br></br>
                        <p className='des mb-5'>{task.question}</p>
                        {/* <div className="row mt-0">
                            <div className="col-6 my-3">
                                <p>Date : {taskList.}</p>
                            </div>
                            <div className="col-6 my-3">
                                <p>Time : {taskList.sheduleTime}</p>
                            </div>
                        </div> */}
                        </div>
                        </div>


    </div>
    </div>
  )
}

export default DetailsQuetion
