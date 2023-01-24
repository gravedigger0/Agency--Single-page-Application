import React from "react";

const Navbar = () => {
  return (
    <header>
      <nav className="h-[12vh]">
        {/* Contact mail & Number */}
        <div className="w-full h-[4vh] justify-end flex pt-2 text-sm bg-white">
          <div className="relative">
            <a>Company Address type here</a>
          </div>
          <div className="relative mx-10">
            <p>+8801797074477</p>
          </div>
        </div>
        {/* Navbar */}
        <div className="w-full h-[8vh] bg-accent">
          <div className="p-4 flex justify-between">
            <div className="text-white font-extrabold text-3xl">LOGO</div>
            <div className="flex">
              <ul className="flex my-auto">
                <li>
                  <a className="text-white font-medium text-lg mx-8">Home</a>
                </li>
                <li>
                  <a className="text-white font-medium text-lg mx-8">About us</a>
                </li>
                <li>
                  <a className="text-white font-medium text-lg mx-8">Services</a>
                </li>
                <li>
                  <a className="text-white font-medium text-lg mx-8">News</a>
                </li>
                <li>
                  <a className="text-accent bg-white px-4 py-3 rounded-md mx-12 font-bold text-lg">
                    Contact us
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </nav>
    </header>
  );
};
export default Navbar;
