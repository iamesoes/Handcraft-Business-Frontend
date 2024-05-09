import React, { useState } from "react";
import Navbar from "../components/Navbar";

const AddStudent = () => {
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [address, setAddress] = useState("");
  const [email, setEmail] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    const formData = {
      name,
      phone,
      address,
      email,
    };
    //URL AYARLA BACKENDE BU BİLGİLER gidecek
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
            Kursiyer Ekle
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
