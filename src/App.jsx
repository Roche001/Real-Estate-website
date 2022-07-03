import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import Home from "./components/home/Home";
import Nav from "./components/nav/Nav";
import About from "./components/about/About";
import Listings from "./components/listings/Listings";
import Properties from "./components/properties/Properties";
import Video from "./components/video/Video";
import Agents from "./components/agents/Agents";
import Blogs from "./components/blogs/Blogs";
import Reviews from "./components/reviews/Reviews";
import Location from "./components/location/Location";
import Contacts from "./components/contacts/Contacts";
import Footer from "./components/footer/Footer";

const App = () => {
  return (
    <>
      <Home />
      <Nav />
      <About />
      <Listings />
      <Properties />
      <Video />
      <Agents />
      <Blogs />
      <Reviews />
      <Location />
      <Contacts />
      <Footer />
    </>
  );
};

export default App;
