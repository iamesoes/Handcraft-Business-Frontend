import React, { useState } from 'react';

const ClientList = ({ clients, handleClientClick }) => {
  
  const handleClick = handleClientClick || (() => {});

  return (
    <div className="client_list">
      {clients.map(item => (
        <div className="client_preview customer_list" id={'client_' + item.userView.id} key={item.userView.id} onClick={() => handleClientClick(item.userView.id)}>
          <h2><b>Name:</b> {item.userView.name + " " + item.userView.surname}  </h2>
          <h2><b>User Name:</b> {item.userView.userName}  </h2>
          <p><b>Phone Number:</b> {item.userView.phoneNumber}</p>
          <p><b>Address:</b> {item.userView.address}</p>
          <p><b>Email:</b> {item.userView.eMail}</p>

          <div className='client_list_sub'>
            <p><b>Courses Information:</b></p>
            <ul>
              {item.courseViewList && item.courseViewList.map(course => (
                <li key={course.id}>
                  Course: {course.name}, Fee: ${course.currentCourseFee}
                  

                  {course.handicrafts && course.handicrafts.length > 0 && (
                  <div>
                    <p><b>Handicrafts:</b></p>
                    <ul>
                      {course.handicrafts.map(handicraft => (
                        <li className='sublist' key={handicraft.id}>
                          Handicraft Type: {handicraft.handicraftTypeName} <br/> Instructor: {handicraft.instructorName} {handicraft.instructorSurname} <br/> Day: {handicraft.day}
                        </li>
                      ))}
                    </ul>
                  </div>
                )}
                  
                  
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