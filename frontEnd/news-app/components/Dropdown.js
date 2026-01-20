import React, { useEffect, useState } from "react";
import countryCodes from "country-codes-list";
const Dropdown = () => {
  const [open, setOpen] = useState(false);
  const [selectedCode, setSelectedCode] = useState(null);
  const [countries, setCountries] = useState([]);
  useEffect(() => {
    const list = Object.entries(countryCodes.customList("countryCode")).map(
      ([code, label]) => ({
        code,
        label,
      }),
    );

    setCountries(list);
  }, []);

  const showRenderdData = countries.map((country) => (
    <div
      key={country.code}
      onClick={() => handleClick(country.code)}
      className="px-4 py-2 hover:bg-gray-500 cursor-pointer"
    >
      {country.label}
    </div>
  ));
  const handleClick = (code) => {
    setSelectedCode(code);
    setOpen(false);
  };
  console.log(selectedCode);
  return (
    <div className="relative inline-block">
      <button
        className="px-4 py-2 bg-black text-white rounded "
        onClick={() => setOpen(!open)}
      >
        {selectedCode ?? "Country"}
      </button>
      {open && (
        <div className="absolute mt-2 w-48 bg-black border rounded shadow max-h-60 overflow-y-auto">
          {showRenderdData}
        </div>
      )}
    </div>
  );
};

export default Dropdown;

// {open && (
//         <div className="absolute right-0 mt-2 w-40 bg-white border rounded shadow">
//           <p className="px-4 py-2 hover:bg-gray-100 cursor-pointer">Profile</p>
//           <p className="px-4 py-2 hover:bg-gray-100 cursor-pointer">Settings</p>
//           <p className="px-4 py-2 hover:bg-gray-100 cursor-pointer">Logout</p>
//         </div>

// https://newsapi.org/
// Your API key is: 4b366af9f68843949e0df5b77f9f6fdf
