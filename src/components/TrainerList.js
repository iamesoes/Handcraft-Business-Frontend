
const TrainerList = ({ trainers }) => {
  return (
    <div className="client_list">
      {trainers.map(trainer => (
        <div className="client_preview" key={trainer.id}>
          <h2> <p> <b> Name: </b> {trainer.name} </p> </h2>
          <p> <b> Phone Number: </b> {trainer.phone_number}</p>
          <p> <b> House Number: </b> {trainer.house_number}</p>
          <p> <b> Address: </b> {trainer.address}</p>
          <p> <b> Email: </b> {trainer.email}</p>

          <div className='client_list_sub' >

            <p> <b> Working Hours: </b></p>
            <ul>
              {trainer.working_hours.map(hour => (
                <li key={`${hour.day}-${hour.start_time}-${hour.end_time}`}>
                  {hour.day}: {hour.start_time} - {hour.end_time}
                </li>
              ))}
            </ul>

          </div>

          <div className='client_list_sub' >

            <p> <b> Courses Information: </b></p>
            <ul>
              {trainer.course_info.map(course => (
                <li key={course.course_name}>
                  Course: {course.course_name}, Details: {course.details}, Payment Amount: ${course.payment_amount}
                </li>
              ))}
            </ul>

          </div>


        </div>
      ))}
    </div>
  );
}
 
export default TrainerList;