

const CourseList = ({ courses, handleCourseClick }) => {
  return (
    <div className="client_list">
      {courses.map(course => (
        <div className="client_preview course_list" key={course.id} id={'course_' + course.id} onClick={() => handleCourseClick(course.id)}>
          <h2><p><b> İsim: </b> {course.name} </p></h2>
          <p><b> Kurs Ücreti: </b> {course.currentCourseFee}</p>
          <p><b> Kalan Kontenjan: </b> {course.maxAttendants - course.attendantCount}</p>
          <p><b> Kurs Zamanı: </b> {course.days.join(', ')}</p>

          <div className='client_list_sub'>

            <p><b> El İşleri: </b> </p>
            <ul>
              {course.handicrafts.map(handcraft => (
                <li key={handcraft.id}>
                  <p><b>El İşi Türü:</b> {handcraft.handicraftTypeName}</p>
                  <p><b>Eğitmen:</b> {handcraft.instructorName}</p>
                  <p><b>Gün:</b> {handcraft.day}</p>
                  <p><b>Ücret:</b> {handcraft.fee}</p>
                </li>
              ))}
            </ul>

          </div>
        </div>
      ))}
    </div>
  );
}

 
export default CourseList;