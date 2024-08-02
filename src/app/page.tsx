import React from "react";

const HomePage = () => {
  return (
    <div style={{ width: "100%" }}>
      <section
        id="home"
        style={{ background: "#F3F2EB", display: "grid", placeItems: "center" }}
      >
        <h1>Home</h1>
      </section>
      <section
        id="about"
        style={{ background: "#325746", display: "grid", placeItems: "center" }}
      >
        <h1>About</h1>
      </section>
      <section
        id="contact"
        style={{ background: "red", display: "grid", placeItems: "center" }}
      >
        <h1>Contact</h1>
      </section>
    </div>
  );
};

export default HomePage;
