import React, { useState } from "react";
import { Link } from "react-router-dom";
import Cookies from "../../pages/Cookies";

const Sweets = () => {
  const [desserts] = useState([
    {
      name: "Cookies",
    },
    {
      name: "Pastries",
    },
    {
      name: "Cakes",
    },
  ]);

  return (
    <div>
      <div className="flex-row">
        {desserts.map((name, i) => (
          <>
            <div className="projects">
              <Link to={`/${name.name}`} className="p-2">
                {" "}
                {name.name}
              </Link>
            </div>
          </>
        ))}
      </div>
    </div>
  );
};
export default Sweets;
