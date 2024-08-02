import React from "react";

const HomePage = () => {
  return (
    <div style={{ width:"100%" }}>
      <section id="home" style={{ background: "aqua" }}>
        <h2>Home</h2>
        <p>Welcome to the home section.</p>
      </section>
      <section id="about" style={{ background: "green" }}>
        <h2>About</h2>
        <p>This is the about section.</p>
      </section>
      <section id="contact" style={{ background: "red" }}>
        <h2>Contact</h2>
        <p>Get in touch through the contact section.</p>
      </section>
    </div>
  );
};

export default HomePage;
