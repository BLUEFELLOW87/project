import React from "react";
import '../styles/aboutus.css';

const AboutPage =()=>{
    return(

        <div className="about-page">
            <div className="first-two">
            <div className="about-section">
             <h1>About us</h1>
                <p>
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit. Veniam expedita eos 
                    sequi esse accusantium placeat tempore aliquid culpa dignissimos modi. Veniam, 
                    saepe blanditiis doloremque mollitia in dolorum dolorem vero id. Lorem ipsum dolor sit amet consectetur adipisicing elit
                    . Placeat ab voluptas rem dolorem quas perferendis, necessitatibus temporibus est, sit ipsam, e
                    ius mollitia culpa. Deleniti obcaecati maiores aperiam officia hic. Laboriosam!
                </p>
            </div>

<div className="departments-section">
    <h1> Our Departments </h1>
        <div className="department" id="dept1"> <p>DEPRT-1</p> </div>
        <div className="department" id="dept2"> <p>DEPRT-2</p> </div>
        <div className="department" id="dept3"> <p>DEPRT-3</p> </div>
        <div className="department" id="dept4"> <p>DEPRT-4</p> </div>
</div>
</div>



        <div className="details-section">
            <legend className="profile-pic"></legend>
            <div className="details">
                <h2>Details</h2>
                <p>Main Officer</p>
                <h4>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Eveniet fuga sit repudiandae 
                    doloribus! Est veniam deserunt,
                     labore nulla officia, pariatur alias et, tempore cum obcaecati ipsa praesentium esse velit
                      architecto.</h4>
            </div>
            </div>
            </div>

    );
}


export default AboutPage;