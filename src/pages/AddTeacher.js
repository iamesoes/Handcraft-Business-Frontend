import React from "react";
import Navbar from "../components/Navbar";

const AddTeacher = () => {
  return (
    <>
      <Navbar />
      <div className="container mx-auto mt-8 flex justify-center">
        <div className="w-1/2 bg-gray-100 p-6 rounded-lg">
          <h1 className="text-3xl font-semibold mb-4 text-center">
            Eğitmen Ekle
          </h1>
          <form>
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
              />
            </div>
            <div className="mb-4">
              <label
                htmlFor="working-hours"
                className="block text-sm font-medium text-gray-700"
              >
                Çalışma Saatleri
              </label>
              <input
                type="text"
                id="working-hours"
                className="mt-1 p-2 w-full border-gray-300 rounded-md"
              />
            </div>
            <div className="mb-4">
              <label
                htmlFor="lessons"
                className="block text-sm font-medium text-gray-700"
              >
                Verdiği Dersler
              </label>
              <input
                type="text"
                id="lessons"
                className="mt-1 p-2 w-full border-gray-300 rounded-md"
              />
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
