import React, { Component } from "react";
import Table from "./components/Table";
import Form from './components/Form'

export default class App extends Component {
  state = {
    employee: [
      {
        name: "Yazid",
        job: "student"
      },
      {
        name: "sakuya",
        job: "mentor"
      },
      {
        name: "dizay",
        job: "student"
      }
    ]
  };
  deleteEmployee = index => {
    const { employee } = this.state;

    this.setState({
      employee: employee.filter((person, i) => {
        return i !== index;
      })
    });
  };





  render() {
    const { employee } = this.state;

    return (
      <Table employeeData={employee} deleteEmployee={this.deleteEmployee} ></Table>
   
    );
  }
}
