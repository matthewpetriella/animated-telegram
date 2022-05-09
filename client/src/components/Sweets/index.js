import React, { useState } from "react";
import { Link } from "react-router-dom";

const Sweets = () => {
  const [desserts] = useState([
    {
      name: "Cookies",
    },
    {
      name: "Donuts",
    },
    {
      name: "Cakes",
    },
  ]);

  return (
    <div>
      <div className="flex-row">
        {desserts.map((name, i) => (
          <div className="projects" key={i}>
            <Link to={`/${name.name}`} className="p-2">
              {" "}
              {name.name}
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
};
export default Sweets;
