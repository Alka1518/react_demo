import React from 'react';

class MyComponent extends React.Component {
    render() {
        return (
            <>
            <div>
                Hello world!
                <h1>Hello world!</h1>
                <input type="text"></input><br></br><br></br>
                <input type="radio"></input>
                <input type="checkbox"></input><br></br><br></br>
                <input type="color"></input>
                <input type="button"></input>
                <br></br><br></br>
                <input type="date"></input>
                <label style={{color: "red"}}> text label</label>
                <br></br><br></br>
                <iframe
                    src="https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d3596020.9268027456!2d77.97100061153935!3d23.02696743114071!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e0!3m2!1sen!2sin!4v1734892354530!5m2!1sen!2sin"
                    // width="600"
                    // height="450"
                    // style={{ border: 0 }}
                    // allowFullScreen=""
                    // loading="lazy"
                    // referrerPolicy="no-referrer-when-downgrade"
                ></iframe>
            </div>
            </>
        );
    }
}

export default MyComponent;
