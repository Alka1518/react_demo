import React from 'react';
class StateEample extends React.Component {
    state = {
        first:true,
        second:false,
        clr:"Blue",
        txt:"Alka Soni"
};
constructor(){
    super();
    setTimeout(() => {
        this.setState({
            first:false,
            second:true,
            clr:"Red",
            txt:"CED Division",
        });
    }, 5000);
    setTimeout(() => {
        this.setState({
            first:false,
            second:true,
            clr:"Black",
            txt:"22SOECE11152",
        });
    }, 10000);
}
render() {
    const {first,second, clr, txt} = this.state;
    return(
        <div>
            <button disabled={first}>Button1</button>
            <button disabled={second}>Button2</button><br></br>
            <label style={{color: clr}}>{txt}</label>
        </div>
    );
}
}
export default StateEample;