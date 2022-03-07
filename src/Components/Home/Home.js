import React from "react";
import "./Home.css";
import "bootstrap/dist/css/bootstrap.min.css";
const Home = () => {
  return (
    <div>
      <section>
        <div className="container ">
          <div className="row align-items-center main mt-5">
            <div className="col-md-6 home-text order-md-0 order-1">
              <div className="ps-md-3">
                <p>Hello, I'm</p>
                <h1>Arafat Hossain</h1>
                <h2>Front End Web Developer</h2>
                <a href="#" className="btn btn-custom me-2">
                  More About Me
                </a>
                <a href="#" className="btn btn-custom">
                  Portfolio
                </a>
              </div>
            </div>
            <div className="col-md-6 order-md-1 order-0 order-lg-1">
              <div className="home-image">
                <div className="img-box text-center">
                  <img
                    src="https://st.depositphotos.com/2101611/3925/v/600/depositphotos_39258143-stock-illustration-businessman-avatar-profile-picture.jpg"
                    alt=""
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
