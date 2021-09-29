import Image from "next/image";
import logo from "../../public/Images/pucsd_logo.png";
import Navbar from "../Components/Navbar";

const Header = () => {
  return (
    <header>
      <div className="container">
        <div className="text-center">
          <Image src={logo} alt="Logo" />
        </div>
        <hr />
        <Navbar />
      </div>
    </header>
  );
};

export default Header;
