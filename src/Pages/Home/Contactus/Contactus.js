import React from 'react';


const Contactus = () => {
    return (
        <div>
            <section className="icons-container my-10 rounded grid grid-template-cols-3">

                <div className="icons">
                    <i className="fas fa-home"></i>
                    <div className="content">
                        <h3>150+</h3>
                        <p>branches</p>
                    </div>
                </div>

                <div className="icons">
                    <i className="fas fa-car"></i>
                    <div className="content">
                        <h3>4770+</h3>
                        <p>cars sold</p>
                    </div>
                </div>

                <div className="icons">
                    <i className="fas fa-users"></i>
                    <div className="content">
                        <h3>320+</h3>
                        <p>happy clients</p>
                    </div>
                </div>

                <div className="icons">
                    <i className="fas fa-car"></i>
                    <div className="content">
                        <h3>1500+</h3>
                        <p>news cars</p>
                    </div>
                </div>

            </section>

        </div>
    );
};

export default Contactus;