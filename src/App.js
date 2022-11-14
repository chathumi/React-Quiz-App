import './App.css';
import {BrowserRouter as Router, Route, Routes} from 'react-router-dom';
import Home from './Component/Home';
import SideBar from './Component/SideBar';
import CreateQuestion from './Component/Teacher/CreateQuestion';
import DetailsQuetion from './Component/Teacher/DetailsQuetion';
import AllQuestion from './Component/Teacher/AllQuestion';
import NavBar from './Component/NavBar';
import QuizeScreen from './Component/QuizeScreen';
import Student from './Component/Student';


function App() {
  return (
    <Router>
      <div className="App">
        <NavBar/>
        <Routes>
          <Route exact path='/' element={<Home/>}/>
        </Routes>
        <Routes>
          <Route exact path='/teacherCreate' element={<CreateQuestion/>}/>
        </Routes>
        <Routes>
          <Route exact path='/teacher' element={<AllQuestion/>}/>
        </Routes>
        <Routes>
          <Route exact path='/student' element={<Student/>}/>
        </Routes>

        <Routes>
          <Route exact path='/QuestionList/:id' element={<DetailsQuetion/>}/>
        </Routes>


      </div>
    </Router>
  );
}

export default App;
