import { BsBell } from "react-icons/bs";
import Image from "../../assets/profileImage.png";

function Navbar() {
  return (
    <>
      <div className="flex justify-end bg-white py-3 pr-5 md:pr-8">
        <div className="flex items-center">
          <div className="relative mr-4 cursor-pointer">
            <BsBell className="text-gray5" />
            <p className="absolute top-0 -right-0.5 h-2.5 w-2.5 rounded-full border-2 border-white bg-blue9"></p>
          </div>
          <img
            src={Image}
            alt="user profile"
            className="h-8 w-8 cursor-pointer rounded-full border-0"
          />
        </div>
      </div>
    </>
  );
}

export default Navbar;
