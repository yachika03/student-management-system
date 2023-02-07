import React, { useState } from 'react'
import Swal from 'sweetalert2';

function Edit({ students, selectedstudent, setstudents, setIsEditing }) {

    const id = selectedstudent.id;

    const [firstName, setFirstName] = useState(selectedstudent.firstName);
    const [lastName, setLastName] = useState(selectedstudent.lastName);
    const [email, setEmail] = useState(selectedstudent.email);
   
    const [date, setDate] = useState(selectedstudent.date);
    const [photo,setPhoto]=useState(selectedstudent.photo)
    const [phoneNo,setPhoneNo]=useState(selectedstudent.setPhoneNo)

    const handleUpdate = e => {
        e.preventDefault();

        if (!firstName || !lastName || !email || !phoneNo || !date||!photo) {
            return Swal.fire({
                icon: 'error',
                title: 'Error!',
                text: 'All fields are required.',
                showConfirmButton: true
            });
        }

        const student = {
            id,
            firstName,
            lastName,
            email,
          phoneNo,
          photo,
            date
        };

        for (let i = 0; i < students.length; i++) {
            if (students[i].id === id) {
                students.splice(i, 1, student);
                break;
            }
        }

        setstudents(students);
        setIsEditing(false);

        Swal.fire({
            icon: 'success',
            title: 'Updated!',
            text: `${student.firstName} ${student.lastName}'s data has been updated.`,
            showConfirmButton: false,
            timer: 1500
        });
    };

    return (
        <div className="small-container">
            <form onSubmit={handleUpdate}>
                <h1>Edit student</h1>
                <label htmlFor="firstName">First Name</label>
                <input
                    id="firstName"
                    type="text"
                    name="firstName"
                    value={firstName}
                    onChange={e => setFirstName(e.target.value)}
                />
                <label htmlFor="lastName">Last Name</label>
                <input
                    id="lastName"
                    type="text"
                    name="lastName"
                    value={lastName}
                    onChange={e => setLastName(e.target.value)}
                />
                <label htmlFor="email">Email</label>
                <input
                    id="email"
                    type="email"
                    name="email"
                    value={email}
                    onChange={e => setEmail(e.target.value)}
                />
               
                <label htmlFor="date">Date</label>
                <input
                    id="date"
                    type="date"
                    name="date"
                    value={date}
                    onChange={e => setDate(e.target.value)}
                />
                 <label htmlFor="phoneNo">PhoneNo </label>
        <input
          id="phoneNo"
          type="text"
          pattern="[0-9]*"
          max={10}
          country={"India"}
          value={phoneNo}
          onChange={(e) => setPhoneNo(e.target.value)}
        />
        <label htmlFor="photo">Photo</label>
        <input
          id="photo"
          type="file"
          name="photo"
          value={photo}
          onChange={(e) => setPhoto(e.target.value)}
        />
                <div style={{ marginTop: '30px' }}>
                    <input type="submit" value="Update" />
                    <input
                        style={{ marginLeft: '12px' }}
                        className="muted-button"
                        type="button"
                        value="Cancel"
                        onClick={() => setIsEditing(false)}
                    />
                </div>
            </form>
        </div>
    );
}

export default Edit