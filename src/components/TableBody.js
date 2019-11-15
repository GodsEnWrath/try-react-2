import React from "react";

export default function TableBody(props) {
  const rows = props.employeeData.map((row, index) => {
    return (
      <tr key={index}>
        <td>{row.name}</td>
        <td>{row.job}</td>
        <td><button onClick={() => props.deleteEmployee(index)} >Hapus</button></td>
        <td><button onClick={() => props.tambahEmployee(index)}>Tambah</button></td>
      </tr>
    );
  });

  return <tbody>{rows}</tbody>;
}

//     <tbody>
//       <tr>
//         <td>Yazid</td>
//         <td>Student</td>
//       </tr>
//       <tr>
//         <td>Sakuya</td>
//         <td>Supervisor</td>
//       </tr>
//       <tr>
//         <td>GodsEnWrath</td>
//         <td>Programmer</td>
//       </tr>
//     </tbody>
