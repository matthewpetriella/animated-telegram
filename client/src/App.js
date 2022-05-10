// I,porting React and Apollo packages
import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import {
  ApolloProvider,
  ApolloClient,
  InMemoryCache,
  createHttpLink,
} from "@apollo/client";
import { setContext } from "@apollo/client/link/context";

// Importing components
import Header from "./components/Header";
import Footer from "./components/Footer";

import { StoreProvider } from "./utils/GlobalState";

// Importing pages
import Home from "./pages/Home";
import Login from "./pages/Login";
import ViewCart from "./pages/ViewCart";
import Profile from "./pages/Profile";
import Signup from "./pages/Signup";
import Cookies from "./pages/Cookies";
import Donut from "./pages/Donuts";
import Cakes from "./pages/Cakes";

// Connecting to graphql
const httpLink = createHttpLink({
  uri: "/graphql",
});

const authLink = setContext((_, { headers }) => {
  const token = localStorage.getItem("id_token");
  return {
    headers: {
      ...headers,
      authorization: token ? `Bearer ${token}` : "",
    },
  };
});

// creating graphql and apollo connection
const client = new ApolloClient({
  link: authLink.concat(httpLink),
  cache: new InMemoryCache(),
});

function App() {
  return (
    <ApolloProvider client={client}>
      <Router>
        <div className="flex-column justify-flex-start min-100-vh">
          <Header />
          <div className="container">
            <StoreProvider>
              <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/login" element={<Login />} />
                <Route path="/signup" element={<Signup />} />
                <Route path="/profile" element={<Profile />} />
                {/* <Route path="/viewCart" element={<ViewCart />} /> */}
                <Route path="/cookies" element={<Cookies />} />
                <Route path="/donuts" element={<Donut />} />
                <Route path="/cakes" element={<Cakes />} />
              </Routes>
            </StoreProvider>
          </div>
        </div>
      </Router>

      <Footer />
    </ApolloProvider>
  );
}

export default App;
