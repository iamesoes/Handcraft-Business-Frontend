import React from "react";
import Navbar from "../components/Navbar";

const dummyData = [
  {
    packageName: "El Sanatları Paketi",
    courses: [
      {
        name: "Ahşap Boyama",
        time: "Pazartesi 12.00",
        instructor: "Meryem",
      },
      {
        name: "Parmak Boyama",
        time: "Çarşamba 13.00",
        instructor: "Ali",
      },
    ],
    price: "1500 TL",
    capacity: "9/25",
  },
  {
    packageName: "Resim Sanatı Paketi",
    courses: [
      {
        name: "Karakalem Çizimi",
        time: "Cumartesi 13.00",
        instructor: "Ali",
      },
      {
        name: "Yağlı Boya",
        time: "Çarşamba 13.00",
        instructor: "Yeşim",
      },
    ],
    price: "2000 TL",
    capacity: "12/30",
  },
];

const Courses = () => {
  return (
    <>
      <Navbar />
      <div className="w-full h-full py-8 px-[120px]">
        {dummyData.map((packageData) => (
          <div
            key={packageData.packageName}
            className="mb-8 bg-white rounded-lg p-4"
          >
            <div className="mb-4 text-xl font-semibold bg-slate-500 text-zinc-50 p-3 w-7/12 rounded-2xl ">
              {packageData.packageName}
            </div>
            <div className="font-bold flex ">
              <div className="w-1/5">Kurs Adı </div>
              <div className="w-1/5">Eğitmen </div>
              <div className="w-1/5">Zaman </div>
            </div>
            {packageData.courses.map((course) => (
              <div key={course.name} className="mb-4 flex items-center ">
                <div className="w-1/5">{course.name}</div>
                <div className="w-1/5">{course.instructor}</div>

                <div className="w-1/5">{course.time}</div>
              </div>
            ))}
            <div className="font-semibold">
              Kapasite: {packageData.capacity}
            </div>
            <div className="font-semibold">Fiyat: {packageData.price}</div>
          </div>
        ))}
      </div>
    </>
  );
};

export default Courses;
