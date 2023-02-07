import React from "react";

const List = ({students, handleEdit, handleDelete}) => {
  
  return (
    <div className="containe-table">
      <table className="striped-table">
        <thead>
          <tr>
            <th className="text-center">No.</th>
            <th className="text-center">First Name</th>
            <th className="text-center">Last Name</th>
            <th className="text-center">Email</th>
            <th className="text-center">PhoneNo</th>
            <th className="text-center">Date</th>
            <th className="text-center">Photo</th>
            <th colSpan={2} className="text-center">
              Actions
            </th>
          </tr>
        </thead>

        <tbody>
          {students.length > 0 ? (
            students.map((student, i) => (
              <tr key={student.id}>
                <td >{i + 1}</td>
                <td >{student.firstName}</td>
                <td >{student.lastName}</td>
                <td >{student.email}</td>
                <td >{student.phoneNo}</td>
                <td >{student.date} </td>
                <td >{student.photo}</td>
                <td className="text-right">
                  <button
                    onClick={() => handleEdit(student.id)}
                    className="button muted-button"
                  >
                    Edit
                  </button>
                </td>
                <td className="text-left">
                  <button
                    onClick={() => handleDelete(student.id)}
                    className="button muted-button"
                  >
                    Delete
                  </button>
                </td>
              </tr>
            ))
          ) : (
            <tr>
              <td colSpan={8}>No students</td>
            </tr>
          )}
        </tbody>
      </table>
    </div>
  );
};

export default List;
