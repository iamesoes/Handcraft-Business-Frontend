import React, { useState, useEffect } from "react";
import Navbar from "../components/Navbar";

const Courses = () => {
  const [data, setData] = useState([]);
  const [isPending, setIsPending] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    fetch("http://localhost:8080/course/allViews")
      .then((res) => {
        if (!res.ok) {
          throw Error("Could not fetch the data for that resource");
        }
        return res.json();
      })
      .then((data) => {
        setData(data);
        setIsPending(false);
        setError(null);
      })
      .catch((err) => {
        setIsPending(false);
        setError(err.message);
      });
  }, []);

  return (
    <>
      <Navbar />
      <div className="w-full h-full py-8 px-[120px]">
        {error && <div>{error}</div>}
        {isPending && <div>Loading...</div>}
        {!isPending && !error && data.map((packageData) => (
          <div
            key={packageData.id}
            className="mb-8 bg-white rounded-lg p-4"
          >
            <div className="mb-4 text-xl font-semibold bg-slate-500 text-zinc-50 p-3 w-7/12 rounded-2xl ">
              {packageData.name}
            </div>
            <div className="font-bold flex ">
              <div className="w-1/5">Ders Adı</div>
              <div className="w-1/5">Eğitmen</div>
              <div className="w-1/5">Zaman</div>
            </div>
            {packageData.handicrafts.map((handicraft) => (
              <div key={handicraft.name} className="mb-4 flex items-center">
                <div className="w-1/5">{handicraft.name}</div>
                <div className="w-1/5">
                  {handicraft.instructorName} {handicraft.instructorSurname}
                </div>
                <div className="w-1/5">{handicraft.day}</div>
              </div>
            ))}
            <div className="font-semibold">
              Kapasite: {packageData.maxAttendants}
            </div>
            <div className="font-semibold">
              Mevcut Katılımcı Sayısı: {packageData.attendantCount}
            </div>
            <div className="font-semibold">Fiyat: {packageData.currentCourseFee}</div>
          </div>
        ))}
      </div>
    </>
  );
};

export default Courses;
