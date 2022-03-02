import React from 'react';
import './Home.css';
import 'bootstrap/dist/css/bootstrap.min.css';
const Home = () => {
    return (
        <div className=''>
            <section>
                <div className="container main">
                    <div className=" d-flex">
                        <div className="home-text">
                            <p>Hello, I'm</p>
                            <h1>Arafat Hossain</h1>
                            <h2>Front End Web Developer</h2>
                        </div>
                        <div className="home-image">
                            <div className="img-box">
                                <img src="https://st.depositphotos.com/2101611/3925/v/600/depositphotos_39258143-stock-illustration-businessman-avatar-profile-picture.jpg" alt="" />
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default Home;