
import './App.css';
import React from 'react';
import emna from"./emna.jpg";
class App extends React.Component {
  state = {
    Person: {
        fullName: "Emna khilfaoui",
        bio: "futur engineer",
        imgSrc: emna,
        profession: " ESprit Student",
        
    },
    show: false,
    interval: null,
        timer: 0,
};
handleShowPerson = () => {
  this.setState({
      ...this.state,
      show: !this.state.show,
  });
};
componentDidMount() {
  this.setState({
    interval: setInterval(() => {
        this.setState({ timer: this.state.timer + 1 });
    }, 1000),
});
}
componentWillUnmount() {
  clearInterval(this.state.interval);
}

 render(){

return (
  <>
  
    {this.state.show && (
      <>   <center>
        <h1>{this.state.Person.fullName}</h1>
        <h1>{this.state.Person.bio}</h1>
        <img src={this.state.Person.imgSrc} alt="emna"></img>
        <h1>{this.state.Person.profession}</h1>
        <h3>{this.state.timer}</h3>
        <br></br>
        </center>
      </>
    )}

        <button className="button" onClick={this.handleShowPerson}>
            {this.state.show ? "Hide Profile" : "Show Profile"}
        </button>
  </>
);
 }
}


export default App;
