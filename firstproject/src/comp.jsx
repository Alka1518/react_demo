import React from 'react';

class MyComponent extends React.Component {
    render() {
        return (
            <>
            <div>
                Hello world!
                <h1>Hello world!</h1>
                <input type="text "></input><br></br><br></br>
                <input type="ratio"></input>
                <input type="checkbox"></input><br></br><br></br>
                <input type="color"></input>
                <input type="button"></input>
                <br></br><br></br>
                <input type="date"></input>
                <label style={{color:"red"}}> text label</label>
            </div>
            </>
        );
    }
}

export default MyComponent;


