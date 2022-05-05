import React, { useState } from "react";

const Signup = () => {
  const [formState, setFormState] = useState({
    username: "",
    email: "",
    password: "",
  });

  // update state based on form input changes
  const handleChange = (event) => {
    const { name, value } = event.target;

    setFormState({
      ...formState,
      [name]: value,
    });
  };

  // submit form
  const handleFormSubmit = async (event) => {
    event.preventDefault();
  };

  return (
    <main>
      <div className="col-12 col-md-6">
        <div className="">
          <h4 className="">Sign Up</h4>
          <div className="">
            <form onSubmit={handleFormSubmit}>
              <input
                className=""
                placeholder="Your username"
                name="username"
                type="username"
                id="username"
                value={formState.username}
                onChange={handleChange}
              />
              <input
                className=""
                placeholder="Your email"
                name="email"
                type="email"
                id="email"
                value={formState.email}
                onChange={handleChange}
              />
              <input
                className=""
                placeholder="******"
                name="password"
                type="password"
                id="password"
                value={formState.password}
                onChange={handleChange}
              />
              <button className="" type="submit">
                Submit
              </button>
            </form>
          </div>
        </div>
      </div>
    </main>
  );
};

export default Signup;
