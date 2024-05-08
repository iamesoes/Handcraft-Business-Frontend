import React, { useState } from "react";
import Navbar from "../components/Navbar";

// Var olan kurs türleri BACKEND GELECEK
const lessonType = ["Dekoratif El Ürünleri Yapımı", "Tekstil Tasarımı"];

//eğitmen listesi BACKEND GELECEK
const instructors = ["Mehmet Keçeci", "Emir Çağrı", "Esma Ekmekci"];

//eklenen dersin adı, türü, eğitmeni ve günü gönderilecek BACKEND

const AddLesson = () => {
  const [courseType, setCourseType] = useState("");
  const [lessonName, setLessonName] = useState("");
  const [selectedDay, setSelectedDay] = useState("");
  const [selectedInstructor, setSelectedInstructor] = useState("");
  const [addedLessons, setAddedLessons] = useState([]);

  const handleCourseTypeChange = (event) => {
    setCourseType(event.target.value);
    setLessonName(""); // Ders ismi sıfırlanır
  };

  const handleLessonNameChange = (event) => {
    setLessonName(event.target.value);
  };

  const handleDayChange = (event) => {
    setSelectedDay(event.target.value);
  };

  const handleInstructorChange = (event) => {
    setSelectedInstructor(event.target.value);
  };

  const addLesson = () => {
    // Ders bilgilerini ekle
    const lesson = {
      courseType,
      lessonName,
      day: selectedDay,
      instructor: selectedInstructor,
    };
    setAddedLessons([...addedLessons, lesson]);

    // Bilgileri sıfırla
    setLessonName("");
    setSelectedDay("");
    setSelectedInstructor("");
  };

  return (
    <>
      <Navbar />
      <div className="container mx-auto mt-8">
        <h1 className="text-3xl font-bold mb-4  text-center">
          Ders Ekleme Sayfası
        </h1>
        <div className="mb-4">
          <label className="block mb-2 font-semibold">Ders Türü:</label>
          <select
            className="border border-gray-400 rounded p-2"
            value={courseType}
            onChange={handleCourseTypeChange}
          >
            <option value="">Seçiniz</option>
            {/* Var olan kurs türleri burada dinamik olarak listelenir */}
            {lessonType.map((course, index) => (
              <option key={index} value={course}>
                {course}
              </option>
            ))}
          </select>
        </div>
        {courseType && (
          <div className="mb-4">
            <label className="block mb-2 font-semibold">Ders Adı:</label>
            <input
              type="text"
              className="border border-gray-400 rounded p-2 w-1/2"
              value={lessonName}
              onChange={handleLessonNameChange}
              placeholder="Ders Adını Girin"
            />
          </div>
        )}
        {courseType && lessonName && (
          <div className="mb-4">
            <label className="block mb-2 font-semibold">Gün:</label>
            <select
              className="border border-gray-400 rounded p-2"
              value={selectedDay}
              onChange={handleDayChange}
            >
              <option value="">Seçiniz</option>
              <option value="Pazartesi">Pazartesi</option>
              <option value="Salı">Salı</option>
              <option value="Çarşamba">Çarşamba</option>
              <option value="Perşembe">Perşembe</option>
              <option value="Cuma">Cuma</option>
              <option value="Cumartesi">Cumartesi</option>
              <option value="Pazar">Pazar</option>
            </select>
          </div>
        )}
        {courseType && lessonName && selectedDay && (
          <div className="mb-4">
            <label className="block mb-2 font-semibold">Eğitmen:</label>
            <select
              className="border border-gray-400 rounded p-2"
              value={selectedInstructor}
              onChange={handleInstructorChange}
            >
              {instructors.map((instructor, index) => (
                <option key={index} value={instructor}>
                  {instructor}
                </option>
              ))}
            </select>
          </div>
        )}
        {courseType && lessonName && selectedDay && selectedInstructor && (
          <div className="mb-4">
            <button
              className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600"
              onClick={addLesson}
            >
              Ekle
            </button>
          </div>
        )}
        {/* Eklenen derslerin listesi */}
        <div>
          <h2 className="text-lg font-semibold mb-2">Eklenen Dersler</h2>
          <ul>
            {addedLessons.map((lesson, index) => (
              <li key={index}>
                <strong className="text-2xl px-5">{lesson.lessonName}</strong> (
                {lesson.courseType}) - {lesson.day} - {lesson.instructor}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </>
  );
};

export default AddLesson;
