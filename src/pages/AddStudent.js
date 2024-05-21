import React, { useState } from "react";
import Navbar from "../components/Navbar";

const AddStudent = () => {
  const [name, setName] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  const [address, setAddress] = useState("");
  const [eMail, setEmail] = useState("");
  const [surname, setSurname] = useState("");
  const [userName, setUserName] = useState("");
  const [notification, setNotification] = useState(null);

  const handleSubmit = (e) => {
    e.preventDefault();

    const formData = {
      name,
      surname,
      phoneNumber,
      address,
      eMail,
      userName,
    };
    // URL Ayarla: Backend'e bu bilgiler gönderilecek
    fetch("http://localhost:8080/applicant", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(formData),
    })
      .then((response) => response.json())
      .then((data) => {
        console.log("Success:", data);
        setNotification("Student added successfully.");
        // Clear form inputs
        setName("");
        setSurname("");
        setPhoneNumber("");
        setAddress("");
        setEmail("");
        setUserName("");
      })
      .catch((error) => {
        console.error("Error:", error);
        setNotification("Failed to add student.");
      });
  };

  return (
    <>
      <Navbar />
      <div className="container mx-auto mt-8 flex justify-center">
        <div className="w-1/2 bg-gray-100 p-6 rounded-lg">
          <h1 className="text-3xl font-semibold mb-4 text-center">
            Kursiyer Ekle
          </h1>
          {notification && (
            <div className="bg-green-200 text-green-800 p-2 mb-4 rounded">
              {notification}
            </div>
          )}
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

export default AddStudent;
