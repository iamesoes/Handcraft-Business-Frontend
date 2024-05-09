import React, { useState } from "react";
import Navbar from "../components/Navbar";

const AddCoursePacket = () => {
  const [packetName, setPacketName] = useState("");
  const [capacity, setCapacity] = useState("");
  const [selectedCourses, setSelectedCourses] = useState([]);

  // Kurs türleri ve bu türlerin altındaki dersler BACKENDDEN GELECEK
  const courseTypes = [
    {
      type: "Tekstil Tasarımı",
      courses: ["Keçe Aksesuarları Yapımı", "Kırkyama Çanta ve Cüzdan Dikimi"],
    },
    {
      type: "Örgü ve İşleme Sanatları",
      courses: [
        "Amigurumi Oyuncak Yapımı",
        "Beş Şiş Aksesuar Yapımı",
        "Elde Antep İşi",
      ],
    },
  ];
  //ders ekleme yaparken kolaylık olması için ders seçiminde dersin zamanını da göster yanında
  ///OLUŞTURULAN PAKETİN ADI, KAPASİTESİ VE EKLENEN DERSLERİ BACKENDE DÖN

  const [selectedType, setSelectedType] = useState("");
  const [selectedCourse, setSelectedCourse] = useState("");

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
    setSelectedCourse(course);
    setSelectedCourses([...selectedCourses, { type: selectedType, course }]);
    setSelectedType("");
  };

  const handleSubmit = () => {
    // Kurs paketi oluşturma işlemleri
    console.log("Kurs paketi oluşturuldu!");
    console.log("Paket Adı:", packetName);
    console.log("Kapsite:", capacity);
    console.log("Seçilen Kurslar:", selectedCourses);
  };

  return (
    <>
      <Navbar />
      <div className="container mx-auto mt-8">
        <h1 className="text-2xl font-semibold mb-4">Kurs Paketi Oluştur</h1>
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
            Kapsite
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
            Seçilen Kurslar:
          </p>
          <ul>
            {selectedCourses.map((course, index) => (
              <li key={index}>
                {course.course} ({course.type})
              </li>
            ))}
          </ul>
        </div>
        <div className="mb-4">
          <label
            htmlFor="courseType"
            className="block text-sm font-medium text-gray-700"
          >
            Kurs Türü
          </label>
          <select
            id="courseType"
            name="courseType"
            className="mt-1 p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 block w-full sm:text-sm"
            value={selectedType}
            onChange={(e) => handleTypeSelection(e.target.value)}
          >
            <option value="">Kurs Türü Seçin</option>
            {courseTypes.map((type, index) => (
              <option key={index} value={type.type}>
                {type.type}
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
              Kurs Seçin
            </label>
            <select
              id="course"
              name="course"
              className="mt-1 p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 block w-full sm:text-sm"
              value={selectedCourse}
              onChange={(e) => setSelectedCourse(e.target.value)}
            >
              <option value="">Kurs Seçin</option>
              {courseTypes
                .find((type) => type.type === selectedType)
                .courses.map((course, index) => (
                  <option key={index} value={course}>
                    {course}
                  </option>
                ))}
            </select>
            <button
              className="mt-2 bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
              onClick={() => handleCourseSelection(selectedCourse)}
            >
              Kursu Ekle
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
