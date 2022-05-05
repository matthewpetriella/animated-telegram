import React from "react";

import Sweets from "../components/Sweets";

const Home = () => {
  return (
    <main>
      <div className="flex-row justify-space-between">
        <div className="col-12 mb-3">
          {" "}
          <Sweets />{" "}
        </div>
      </div>
    </main>
  );
};

export default Home;
