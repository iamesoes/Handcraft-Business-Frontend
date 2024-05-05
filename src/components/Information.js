import React from "react";
import bird from "../icons/bird.png";
const Information = () => {
  return (
    <div className="container  mx-auto mt-8">
      <div className="text-center mb-8">
        <h1 className="text-4xl font-bold mb-4 font-serif text-blue-900">
          EMEEK
        </h1>
        <p className="text-lg text-gray-700 leading-relaxed">
          Emeek olarak, çeşitli el sanatları kursları ile hayalinizdeki
          becerilere ulaşmanıza yardımcı oluyoruz. Yeni başlayanlardan deneyimli
          sanatçılara kadar herkese hitap eden geniş bir kurs yelpazesi
          sunuyoruz.
        </p>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2  gap-6 mb-8">
        <div className="bg-blue-50 p-6 p rounded-lg shadow-md">
          <h2 className="text-2xl font-semibold mb-4 text-blue-900">
            Neden Bizi Seçmelisiniz?
          </h2>
          <ul className="list-disc list-inside  text-gray-700">
            <li className="mb-4">
              <span className="font-bold">Geniş Kurs Yelpazesi:</span> Ahşap
              Boyama, Kumaş Boyama, Vitray, Tahta Oymacılık, Rölyef ve daha
              fazlasını içeren geniş bir yelpazede kurslar sunuyoruz.
            </li>
            <li className="mb-4">
              <span className="font-bold">Deneyimli Eğitmenler:</span> Alanında
              uzman ve tutkulu eğitmenlerimizle becerilerinizi geliştirmenize ve
              yeni teknikler öğrenmenize yardımcı oluyoruz.
            </li>
            <li className="mb-4">
              <span className="font-bold">Esnek Programlar:</span> Hafta içi ve
              hafta sonu kurslarımızla size en uygun zamanı seçme imkanı
              veriyoruz.
            </li>
          </ul>
        </div>

        <div className="bg-blue-50 p-6 rounded-lg shadow-md">
          <h2 className="text-2xl font-semibold mb-4 text-blue-900">
            İletişim
          </h2>
          <p className="text-lg text-gray-700 mb-4">
            05355555555 numaralı telefondan bize ulaşarak da bilgi
            alabilirsiniz.
          </p>
          <h2 className="text-2xl font-semibold mb-4 text-blue-900">Adres</h2>
          <p className="text-lg text-gray-700 mb-4">Davutpaşa Kampüsü</p>
        </div>
        <h1 className="text-4xl font-bold font-serif mb-4 text-right my-20 text-blue-900">
          {" "}
          El Sanatları Kursu ile hayalinizdeki becerilere ulaşın!
        </h1>
        <img src={bird} alt="bird" className="h-32" />
      </div>
    </div>
  );
};

export default Information;
