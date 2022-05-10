import React from "react";
import CategoryMenu from "../components/CategoryMenu";

const Home = () => {
  return (
    <main>
      <div className="flex-row justify-space-between">
        <div className="col-12 mb-3">
          <CategoryMenu />
        </div>
      </div>
    </main>
  );
};

export default Home;
