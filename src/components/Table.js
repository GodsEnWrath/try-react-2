import React, { Component } from "react";
import TableHead from "./TableHead";
import TableBody from "./TableBody";

export default class Table extends Component {
  render() {
    const { employeeData, deleteEmployee} = this.props;
    return (
      <table>
        <TableHead></TableHead>
        <TableBody employeeData= {employeeData} deleteEmployee={deleteEmployee}></TableBody>
      </table>
    );
  }
}
