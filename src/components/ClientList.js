import React, { useState } from 'react';

const ClientList = ({ clients, handleClientClick }) => {
  
  const handleClick = handleClientClick || (() => {});

  return (
    <div className="client_list">
      {clients.map(client => (
        <div className="client_preview customer_list" id={'client_' + client.id} key={client.id} onClick={() => handleClientClick(client.id)}>
          <h2><b>Name:</b> {client.name + " " + client.surname}  </h2>
          <h2><b>User Name:</b> {client.userName}  </h2>
          <p><b>Phone Number:</b> {client.phoneNumber}</p>
          <p><b>Address:</b> {client.address}</p>
          <p><b>Email:</b> {client.eMail}</p>

          <div className='client_list_sub'>
            <p><b>Taken Courses:</b></p>
            <ul>
              {client.taken_courses.map(course => (
                <li key={course}>{course}</li>
              ))}
            </ul>
          </div>

          <div className='client_list_sub'>
            <p><b>Courses Information:</b></p>
            <ul>
              {client.course_info.map(course => (
                <li key={course.course_name}>
                  Course: {course.course_name}, Date: {course.date}, Payment Amount: ${course.payment_amount}
                </li>
              ))}
            </ul>
          </div>
        </div>
      ))}
    </div>
  );
};

export default ClientList;