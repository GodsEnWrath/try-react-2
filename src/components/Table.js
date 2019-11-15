import React, { Component } from "react";
import TableHead from "./TableHead";
import TableBody from "./TableBody";

export default class Table extends Component {
  render() {
    const { employeeData, deleteEmployee, tambahEmployee} = this.props;
    return (
      <table>
        <TableHead></TableHead>
        <TableBody employeeData= {employeeData} deleteEmployee={deleteEmployee} tambahEmployee={tambahEmployee}></TableBody>
      </table>
    );
  }
}
