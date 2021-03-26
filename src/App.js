import './App.css';
// import Form from './components/Form';
import { BrowserRouter as Router, Route, }from "react-router-dom";
import StudentList from './components/StudentList/StudentList.component'
  // case value:
    
    // break;

  // default:
  //   break;



  // function App() {
  //   return studentData.map((student) => (
  //     <div className="studentCard">
  //       <h1>Hi {student.name}</h1>
  //       <p>
  //       {student.name}'s favorite color is {student.color}
  //       </p>
  //     </div>
  //   ));
  //   };

    function App(){
      return (
        <div>
        <StudentList/>
        </div>
      )
      
      };
    export default App;