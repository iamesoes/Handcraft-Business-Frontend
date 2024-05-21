import React, { useState, useEffect } from "react";
import Navbar from "../components/Navbar";

const AddCoursePacket = () => {
  const [packetName, setPacketName] = useState("");
  const [capacity, setCapacity] = useState("");
  const [selectedCourses, setSelectedCourses] = useState([]);
  const [lessonTypes, setLessonTypes] = useState([]);
  const [allCourses, setAllCourses] = useState([]);
  const [filteredCourses, setFilteredCourses] = useState([]);
  const [selectedType, setSelectedType] = useState("");
  const [selectedCourse, setSelectedCourse] = useState("");
  const [notification, setNotification] = useState({ message: "", type: "" });

  useEffect(() => {
    // Fetch lesson types
    fetch("http://localhost:8080/handicraftType/allView")
      .then((res) => res.json())
      .then((data) => setLessonTypes(data))
      .catch((error) => console.error("Error fetching lesson types:", error));

    // Fetch all courses
    fetch("http://localhost:8080/handicraft/viewAll")
      .then((res) => res.json())
      .then((data) => setAllCourses(data))
      .catch((error) => console.error("Error fetching courses:", error));
  }, []);

  useEffect(() => {
    if (selectedType) {
      const filtered = allCourses.filter(
        (course) => course.handicraftTypeName === selectedType
      );
      setFilteredCourses(filtered);
    } else {
      setFilteredCourses([]);
    }
  }, [selectedType, allCourses]);

  const handlePacketNameChange = (e) => {
    setPacketName(e.target.value);
  };

  const handleCapacityChange = (e) => {
    setCapacity(e.target.value);
  };

  const handleTypeSelection = (type) => {
    setSelectedType(type);
  };

  const handleCourseSelection = (course) => {
    const selected = filteredCourses.find((c) => c.id === course);
    setSelectedCourse(course);
    setSelectedCourses([
      ...selectedCourses,
      {
        type: selected.handicraftTypeName,
        course: selected,
      },
    ]);
    setSelectedCourse("");
    setSelectedType("");
  };

  const handleSubmit = () => {
    // Kurs paketi oluşturma işlemleri
    const packetData = {
      name: packetName,
      capacity: parseInt(capacity, 10),
      handicraftIdList: selectedCourses.map((c) => c.course.id),
    };

    fetch("http://localhost:8080/course", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(packetData),
    })
      .then((response) => {
        if (response.ok) {
          setNotification({
            message: "Kurs paketi başarıyla oluşturuldu!",
            type: "success",
          });
          console.log("Kurs paketi oluşturuldu!");
        } else {
          throw new Error("Kurs paketi oluşturulamadı.");
        }
      })
      .catch((error) => {
        setNotification({
          message: "Kurs paketi oluşturulurken bir hata oluştu.",
          type: "error",
        });
        console.error("Error:", error);
      });
  };

  return (
    <>
      <Navbar />
      <div className="container mx-auto mt-8">
        <h1 className="text-2xl font-semibold mb-4">Kurs Paketi Oluştur</h1>
        {notification.message && (
          <div
            className={`mb-4 p-4 text-white ${
              notification.type === "success" ? "bg-green-500" : "bg-red-500"
            } rounded-md`}
          >
            {notification.message}
          </div>
        )}
        <div className="mb-4">
          <label
            htmlFor="packetName"
            className="block text-sm font-medium text-gray-700"
          >
            Paket Adı
          </label>
          <input
            type="text"
            name="packetName"
            id="packetName"
            className="mt-1 p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 block w-full sm:text-sm"
            value={packetName}
            onChange={handlePacketNameChange}
          />
        </div>
        <div className="mb-4">
          <label
            htmlFor="capacity"
            className="block text-sm font-medium text-gray-700"
          >
            Kapasite
          </label>
          <input
            type="number"
            name="capacity"
            id="capacity"
            className="mt-1 p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 block w-full sm:text-sm"
            value={capacity}
            onChange={handleCapacityChange}
          />
        </div>
        <div className="mb-4">
          <p className="text-sm font-medium text-gray-700 mb-2">
            Seçilen Dersler:
          </p>
          <ul>
            {selectedCourses.map((course, index) => (
              <li key={index}>
                {course.course.handicraftTypeName} -{" "}
                {course.course.instructorName} {course.course.instructorSurname}{" "}
                - {course.course.day}
              </li>
            ))}
          </ul>
        </div>
        <div className="mb-4">
          <label
            htmlFor="courseType"
            className="block text-sm font-medium text-gray-700"
          >
            Ders Türü
          </label>
          <select
            id="courseType"
            name="courseType"
            className="mt-1 p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 block w-full sm:text-sm"
            value={selectedType}
            onChange={(e) => handleTypeSelection(e.target.value)}
          >
            <option value="">Ders Türü Seçin</option>
            {lessonTypes.map((type) => (
              <option key={type.id} value={type.name}>
                {type.name}
              </option>
            ))}
          </select>
        </div>
        {selectedType && (
          <div className="mb-4">
            <label
              htmlFor="course"
              className="block text-sm font-medium text-gray-700"
            >
              Ders Seçin
            </label>
            <select
              id="course"
              name="course"
              className="mt-1 p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 block w-full sm:text-sm"
              value={selectedCourse}
              onChange={(e) => setSelectedCourse(e.target.value)}
            >
              <option value="">Dersi Seçin</option>
              {filteredCourses.map((course) => (
                <option key={course.id} value={course.id}>
                  {course.handicraftTypeName} - {course.instructorName}{" "}
                  {course.instructorSurname} - {course.day}
                </option>
              ))}
            </select>
            <button
              className="mt-2 bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
              onClick={() => handleCourseSelection(selectedCourse)}
            >
              Dersi Ekle
            </button>
          </div>
        )}
        <button
          type="button"
          className="w-full py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
          onClick={handleSubmit}
        >
          Oluştur
        </button>
      </div>
    </>
  );
};

export default AddCoursePacket;
