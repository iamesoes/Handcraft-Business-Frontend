import React from "react";
import Navbar from "../components/Navbar";

const dummyData = [
  {
    courseType: "Boyama",
    name: "Ahşap Boyama",
    time: "Pazartesi 12.00",
    instructor: "Meryem",
    registered: "12/20",
  },
  {
    courseType: "Boyama",
    name: "Parmak Boyama",
    time: "Çarşamba 13.00",
    instructor: "Ali",
    registered: "5/20",
  },
  {
    courseType: "Çizim",
    name: "Karakalem Çizimi",
    time: "Cumartesi 13.00",
    instructor: "Ali",
    registered: "20/20",
  },
];

const Courses = () => {
  return (
    <>
      <Navbar />
      <div className="w-full h-full py-8 px-[120px]">
        <div className="mb-8 w-full h-[66px] grid grid-cols-5 border border-black  bg-gray-200 rounded-full font-serif text-xl">
          <div className="flex h-full items-center justify-center font-semibold">
            Türü
          </div>
          <div className="flex h-full items-center pl-8 font-semibold">Adı</div>
          <div className="flex h-full items-center justify-center font-semibold">
            Zamanı
          </div>
          <div className="flex h-full items-center justify-center font-semibold">
            Eğitmeni
          </div>
          <div className="flex h-full items-center justify-center font-semibold">
            Kontenjan Durumu
          </div>
        </div>

        {dummyData.map((dummy) => (
          <div
            key={dummy.name}
            className="mb-8 w-full h-[66px] grid grid-cols-5 border border-black cursor-pointer hover:scale-105 duration-100 transition-all rounded-full"
          >
            <div className="flex h-full items-center justify-center">
              {dummy.courseType}
            </div>
            <div className="flex h-full items-center pl-8 font-bold">
              {dummy.name}
            </div>
            <div className="flex h-full items-center justify-center">
              {dummy.time}
            </div>
            <div className="flex h-full items-center justify-center">
              {dummy.instructor}
            </div>
            <div className="flex h-full items-center justify-center">
              {dummy.registered}
            </div>
          </div>
        ))}
      </div>
    </>
  );
};

export default Courses;
