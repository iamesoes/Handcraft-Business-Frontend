import React from "react";
import Navbar from "../components/Navbar";
import homepageImage from "../icons/homepage.jpeg";
const LoginPage = () => {
  return (
    <>
      <Navbar />
      <div className="flex justify-center items-center h-screen">
        <div className="w-1/3 px-4">
          <form className="bg-white  rounded px-8 pt-6 pb-8 mb-4">
            <div className="mb-4">
              <label
                className="block text-gray-700 text-4xl font-bold mb-2"
                htmlFor="email"
              >
                Email
              </label>
              <input
                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                id="email"
                type="email"
                placeholder="Email Adresinizi Girin"
              />
            </div>
            <div className="mb-6">
              <label
                className="block text-gray-700 text-4xl font-bold mb-2"
                htmlFor="password"
              >
                Şifre
              </label>
              <input
                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline"
                id="password"
                type="password"
                placeholder="Şifrenizi Girin"
              />
            </div>
            <div className="flex items-center justify-between">
              <button
                className="bg-gray-700 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
                type="button"
              >
                Giriş Yap
              </button>
            </div>
          </form>
        </div>

        <div className="w-1/3 px-4">
          <img src={homepageImage} alt="Resim" className="w-full h-auto" />
        </div>
      </div>
    </>
  );
};

export default LoginPage;
