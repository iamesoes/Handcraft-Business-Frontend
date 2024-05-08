import React from "react";
import { Link } from "react-router-dom";
import Navbar from "../components/Navbar";

const StaffOperations = () => {
  return (
    <>
      <Navbar />
      <div className="container mx-auto mt-4 w-[1000px]">
        <h1 className="text-2xl text-center py-7 font-semibold mb-4">
          Personel İşlemleri
        </h1>
        <div className="grid grid-cols-2 gap-y-4 gap-x-8 justify-items-center ">
          <Link
            to="/create-course"
            className="flex w-full items-center p-4 justify-center bg-green-200  rounded-full hover:bg-green-300"
          >
            <div className="text-black-500 font-bold ">Ders Ekle</div>
          </Link>
          <Link
            to="/create-packet"
            className="flex w-full items-center p-4 justify-center bg-green-200  rounded-full hover:bg-green-300"
          >
            <div className="text-black-500 font-bold ">Kurs Paketi Oluştur</div>
          </Link>
          <Link
            to="/add-student"
            className="flex w-full items-center p-4 justify-center bg-green-200 rounded-full hover:bg-green-300"
          >
            <div className="text-black-500 font-bold ">Kursiyer Ekle</div>
          </Link>
          <Link
            to="/add-teacher"
            className="flex w-full items-center p-4  justify-center bg-green-200 rounded-full hover:bg-green-300"
          >
            <div className="text-black-500 font-bold  ">Eğitmen Ekle</div>
          </Link>
        </div>
      </div>
    </>
  );
};

export default StaffOperations;
