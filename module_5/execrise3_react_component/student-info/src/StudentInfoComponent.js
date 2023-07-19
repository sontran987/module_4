import './App.css';
import React from 'react';

const students = [{
  id: 1,
  name: 'Maria Anders',
  age: 23,
  address: 'Ha Noi'
},
{
  id: 2,
  name: 'Francisco Chang',
  age: 24,
  address: 'Ha Noi'
},
{
  id: 3,
  name: 'Roland Mendel',
  age: 37,
  address: 'Ha Noi'
},
{
  id: 4,
  name: 'Helen Bennett',
  age: 15,
  address: 'Ha Noi'
},
{
  id: 5,
  name: 'thanh son ',
  age: 26,
  address: 'Ha Noi'
},
{
  id: 6,
  name: 'Giovanni Rovelli',
  age: 29,
  address: 'Ha Noi'
}
];
function Stud() {
  return (
    <>
      <h1>Student</h1>
      <table border={1}>
        <thead>
          <tr>
            <th>Id</th>
            <th>Name</th>
            <th>Age</th>
            <th>Address</th>
          </tr>
        </thead>
        <tbody>
          {students.map((student,index) => (
            <tr key={student.id}>
              <td>{student.id}</td>
              <td>{student.name}</td>
              <td>{student.age}</td>
              <td>{student.address}</td>
            </tr>
          ))
          }
        </tbody>
      </table>
    </>
  );
}

class StudentInfoComponent extends React.Component {
  constructor() {
    super();
  };
  render() {
    return (
      <Stud />
    );
  }
}

export default StudentInfoComponent;
