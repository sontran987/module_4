import logo from './logo.svg';
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
  age:26,
  address: 'Ha Noi'
},
{
  id: 6,
  name: 'Giovanni Rovelli',
  age: 29,
  address: 'Ha Noi'
}
];

class App extends React.Component {
  constructor(){
    super();
  }
  render(){
    return(
        <table>
          
        </table>
    );
  }
}

export default App;
