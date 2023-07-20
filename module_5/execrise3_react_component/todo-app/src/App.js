import './App.css';
import React from 'react'

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      list: [],
      item: ""
    }

  };


  handleChange = (event) => {
    this.setState({ item: event.target.value })
  }

  handleAddItem = () => {
    if (this.state.item !== "") {
      const newList = [...this.state.list, this.state.item]
      this.setState(() => ({ list: newList, item: "" }))
    }
  }

  render() {
    return (
      <>
        <div style={{ textAlign: 'center' }}>
          <h1 >Todo List</h1>
          <input type='text' value={this.state.item} onChange={this.handleChange} />
          <button onClick={this.handleAddItem}>Add</button>
          <table style={{ marginLeft: '47%' }}>
            <thead>
              <tr>
                <th>Todo</th>
              </tr>
            </thead>
            <tbody>{
              this.state.list.map((todo, index) => (
                <tr key={index}>
                  <td>{todo}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </>

    );
  }

}

export default App;
