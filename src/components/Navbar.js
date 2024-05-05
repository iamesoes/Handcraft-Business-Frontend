import { Link } from "react-router-dom";
import logo from "../icons/logo.png";

const Navbar = () => {
  return (
    <nav className="bg-gray-800 py-2">
      <div className="container mx-auto flex justify-between items-center">
        <div>
          <Link to="/">
            <img src={logo} alt="Logo" className="h-20" />
          </Link>
        </div>
        <div>
          <ul className="flex space-x-4">
            <li>
              <Link to="/" className="text-white hover:text-gray-300">
                Anasayfa
              </Link>
            </li>
            <li>
              <Link to="/about" className="text-white hover:text-gray-300">
                Hakkımızda
              </Link>
            </li>
            <li>
              <Link to="/courses" className="text-white hover:text-gray-300">
                Kurslar
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
