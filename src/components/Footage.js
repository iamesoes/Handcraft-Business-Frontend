export default function Footage() {
  return (
    <div className="container mx-auto mt-8">
      <h1 className="text-3xl font-bold font-serif text-center mb-4">
        Yazılım Ekibimiz
      </h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-4">
        <div className="bg-white rounded-lg shadow-md p-4">
          <h2 className="text-lg font-semibold mb-1">Esma Nur Ekmekci</h2>
          <p className="text-gray-600 font-light mb-3">Frontend Developer</p>

          <p className="text-gray-600">Öğrenci No: 20011620</p>
        </div>
        <div className="bg-white rounded-lg shadow-md p-4">
          <h2 className="text-lg font-semibold mb-1">Anıl Kutay Uçan</h2>
          <p className="text-gray-600 font-light mb-3">Frontend Developer</p>

          <p className="text-gray-600">Öğrenci No: 123-456-7890</p>
        </div>
        <div className="bg-white rounded-lg shadow-md p-4">
          <h2 className="text-lg font-semibold mb-1">Mehmet Keçeci</h2>
          <p className="text-gray-600 font-light mb-3">Backend Developer</p>

          <p className="text-gray-600">Öğrenci No: 123-456-7890</p>
        </div>
        <div className="bg-white rounded-lg shadow-md p-4">
          <h2 className="text-lg font-semibold mb-1">Emir Çağrı Aykın</h2>
          <p className="text-gray-600 font-light mb-3">Backend Developer</p>

          <p className="text-gray-600">Öğrenci No: 123-456-7890</p>
        </div>
        <div className="bg-white rounded-lg shadow-md p-4">
          <h2 className="text-lg font-semibold mb-1">Efe Girgin</h2>
          <p className="text-gray-600 font-light mb-3">Database Manager</p>

          <p className="text-gray-600">Öğrenci No: 123-456-7890</p>
        </div>
      </div>
    </div>
  );
}
