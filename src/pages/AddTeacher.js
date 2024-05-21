import React, { useState, useEffect } from "react";
import Navbar from "../components/Navbar";

const AddTeacher = () => {
  const [name, setName] = useState("");
  const [surname, setSurname] = useState("");
  const [userName, setUserName] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  const [address, setAddress] = useState("");
  const [eMail, setEmail] = useState("");
  const [lesson, setLesson] = useState("");
  const [weekdayFee, setWeekdayFee] = useState("");
  const [weekendFee, setWeekendFee] = useState("");
  const [handicraftTypes, setHandicraftTypes] = useState([]);
  const [notification, setNotification] = useState({ message: "", type: "" });

  // Fetch handicraftTypes from the backend
  useEffect(() => {
    fetch("http://localhost:8080/handicraftType/allView")
      .then((res) => {
        if (!res.ok) {
          throw new Error("Failed to fetch handicraft types");
        }
        return res.json();
      })
      .then((data) => {
        setHandicraftTypes(data);
      })
      .catch((error) => {
        console.error("Error fetching handicraft types:", error);
      });
  }, []);

  const handleSubmit = (e) => {
    e.preventDefault();
    const formData = {
      name,
      surname,
      userName,
      phoneNumber,
      address,
      eMail,
      lesson,
      weekdayFee,
      weekendFee,
    };

    fetch("http://localhost:8080/instructor", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(formData),
    })
      .then((response) => response.json())
      .then((data) => {
        setNotification({
          message: "Eğitmen başarıyla eklendi!",
          type: "success",
        });
        console.log("Success:", data);
      })
      .catch((error) => {
        setNotification({
          message: "Eğitmen eklenirken bir hata oluştu.",
          type: "error",
        });
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
                htmlFor="surname"
                className="block text-sm font-medium text-gray-700"
              >
                Soyad
              </label>
              <input
                type="text"
                id="surname"
                className="mt-1 p-2 w-full border-gray-300 rounded-md"
                value={surname}
                onChange={(e) => setSurname(e.target.value)}
              />
            </div>
            <div className="mb-4">
              <label
                htmlFor="userName"
                className="block text-sm font-medium text-gray-700"
              >
                Kullanıcı Adı
              </label>
              <input
                type="text"
                id="userName"
                className="mt-1 p-2 w-full border-gray-300 rounded-md"
                value={userName}
                onChange={(e) => setUserName(e.target.value)}
              />
            </div>
            <div className="mb-4">
              <label
                htmlFor="phoneNumber"
                className="block text-sm font-medium text-gray-700"
              >
                Cep Telefonu
              </label>
              <input
                type="text"
                id="phoneNumber"
                className="mt-1 p-2 w-full border-gray-300 rounded-md"
                value={phoneNumber}
                onChange={(e) => setPhoneNumber(e.target.value)}
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
                htmlFor="eMail"
                className="block text-sm font-medium text-gray-700"
              >
                Email
              </label>
              <input
                type="eMail"
                id="eMail"
                className="mt-1 p-2 w-full border-gray-300 rounded-md"
                value={eMail}
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
                {handicraftTypes.map((type) => (
                  <option key={type.id} value={type.name}>
                    {type.name}
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
          {notification.message && (
            <div
              className={`mb-4 p-4 text-white ${
                notification.type === "success" ? "bg-green-500" : "bg-red-500"
              } rounded-md`}
            >
              {notification.message}
            </div>
          )}
        </div>
      </div>
    </>
  );
};

export default AddTeacher;
