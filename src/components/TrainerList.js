
const TrainerList = ({ trainers }) => {
  return (
    <div className="client_list">
      {trainers.map(trainer => (
        <div className="client_preview" key={trainer.id}>
          <h2> <p> <b> Name: </b> {trainer.name} {trainer.surname} </p> </h2>
          <p> <b> Phone Number: </b> {trainer.phoneNumber}</p>
          <p> <b> Address: </b> {trainer.address}</p>
          <p> <b> Email: </b> {trainer.eMail}</p>
          <p> <b> Weekday Fee: </b> ${trainer.weekdayFee}</p>
          <p> <b> Weekend Fee: </b> ${trainer.weekendFee}</p>

          <div className='client_list_sub' >

            <p> <b> Working Days: </b></p>
            <ul>
              {trainer.days.map(day => (
                <li key={day}>
                  {day}
                </li>
              ))}
            </ul>

          </div>

          <div className='client_list_sub' >

            <p> <b> Handicraft Types: </b></p>
            <ul>
              {trainer.handicraftTypes.map(type => (
                <li key={type.id}>
                  Name: {type.name} <br/> Explanation: {type.explanation}
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






















