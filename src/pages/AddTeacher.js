import React, { useState } from "react";
import Navbar from "../components/Navbar";

const AddTeacher = () => {
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [address, setAddress] = useState("");
  const [email, setEmail] = useState("");
  const [lesson, setLesson] = useState("");
  const [weekdayFee, setWeekdayFee] = useState("");
  const [weekendFee, setWeekendFee] = useState("");

  const lessonTypes = ["Tekstil Tasarımı", "Örgü ve İşleme Sanatları"];

  const handleSubmit = (e) => {
    e.preventDefault();
    const formData = {
      name,
      phone,
      address,
      email,
      lesson,
      weekdayFee,
      weekendFee,
    };

    fetch("API_ENDPOINT", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(formData),
    })
      .then((response) => response.json())
      .then((data) => {
        console.log("Success:", data);
      })
      .catch((error) => {
        console.error("Error:", error);
      });
  };

  return (
    <>
      <Navbar />
      <div className="container mx-auto mt-8 flex justify-center">
        <div className="w-1/2 bg-gray-100 p-6 rounded-lg">
          <h1 className="text-3xl font-semibold mb-4 text-center">
            Eğitmen Ekle
          </h1>
          <form onSubmit={handleSubmit}>
            <div className="mb-4">
              <label
                htmlFor="name"
                className="block text-sm font-medium text-gray-700"
              >
                Ad
              </label>
              <input
                type="text"
                id="name"
                className="mt-1 p-2 w-full border-gray-300 rounded-md"
                value={name}
                onChange={(e) => setName(e.target.value)}
              />
            </div>
            <div className="mb-4">
              <label
                htmlFor="phone"
                className="block text-sm font-medium text-gray-700"
              >
                Cep Telefonu
              </label>
              <input
                type="text"
                id="phone"
                className="mt-1 p-2 w-full border-gray-300 rounded-md"
                value={phone}
                onChange={(e) => setPhone(e.target.value)}
              />
            </div>
            <div className="mb-4">
              <label
                htmlFor="address"
                className="block text-sm font-medium text-gray-700"
              >
                Adres
              </label>
              <input
                type="text"
                id="address"
                className="mt-1 p-2 w-full border-gray-300 rounded-md"
                value={address}
                onChange={(e) => setAddress(e.target.value)}
              />
            </div>
            <div className="mb-4">
              <label
                htmlFor="email"
                className="block text-sm font-medium text-gray-700"
              >
                Email
              </label>
              <input
                type="email"
                id="email"
                className="mt-1 p-2 w-full border-gray-300 rounded-md"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
            </div>
            <div className="mb-4">
              <label
                htmlFor="lesson"
                className="block text-sm font-medium text-gray-700"
              >
                Verdiği Ders Türü
              </label>
              <select
                id="lesson"
                className="mt-1 p-2 w-full border-gray-300 rounded-md"
                value={lesson}
                onChange={(e) => setLesson(e.target.value)}
              >
                <option value="">Ders Seçin</option>
                {lessonTypes.map((lessonType) => (
                  <option key={lessonType} value={lessonType}>
                    {lessonType}
                  </option>
                ))}
              </select>
            </div>
            <div className="mb-4">
              <label
                htmlFor="weekday-fee"
                className="block text-sm font-medium text-gray-700"
              >
                Hafta İçi Ücreti
              </label>
              <input
                type="text"
                id="weekday-fee"
                className="mt-1 p-2 w-full border-gray-300 rounded-md"
                value={weekdayFee}
                onChange={(e) => setWeekdayFee(e.target.value)}
              />
            </div>
            <div className="mb-4">
              <label
                htmlFor="weekend-fee"
                className="block text-sm font-medium text-gray-700"
              >
                Hafta Sonu Ücreti
              </label>
              <input
                type="text"
                id="weekend-fee"
                className="mt-1 p-2 w-full border-gray-300 rounded-md"
                value={weekendFee}
                onChange={(e) => setWeekendFee(e.target.value)}
              />
            </div>
            <button
              type="submit"
              className="bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-600"
            >
              Ekle
            </button>
          </form>
        </div>
      </div>
    </>
  );
};

export default AddTeacher;
