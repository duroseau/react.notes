import React, { Component } from 'react';
import FavoriteCandy from '../FavoriteCandy/FavoriteAnimal.component'
import './StudentList.styles.css'


class StudentList extends Component {
  constructor(props) {
    super(props)
    this.state = {
      studentData: [

        {
          id: 1,
          name: "Eddy",
          color: "chartreuse",
          school: "Nebula Academy",
          animal: "cat",
          candy: "skittles",
        },
        {
          id: 2,
          name: "Chelsea",
          color: "purple",
          school: "Nebula Academy",
          animal: "dinosaurs",
          candy: "kit-kat",
        },
        {
          id: 3,
          name: "Tauseef",
          color: "orange",
          school: "Nebula Academy",
          animal: "rabbit",
          candy: "mini snickers",
        },
        {
          id: 4,
          name: "Maurice",
          color: "red",
          school: "Nebula Academy",
          animal: "dog",
          candy: "reese's",
        },
        {
          id: 5,
          name: "D'aja",
          color: "blue",
          school: "Nebula Academy",
          animal: "elephants",
          candy: "twix",
        },
        {
          id: 6,
          name: "Jasmine",
          color: "pink",
          school: "Nebula Academy",
          animal: "bear",
          candy: "milky way",
        },
        {
          id: 7,
          name: "Anitria",
          color: "blue",
          school: "Nebula Academy",
          animal: "bear",
          candy: "snickers",
        },
      ]
    }
  }
  render(){

    return(
      <div>
      {this.state.studentData.map(club => <h1>{club.name} is a {club.school} student</h1>)}
      
      
       <h1>Hello World</h1>
      </div>
    )
  }
}
export default StudentList