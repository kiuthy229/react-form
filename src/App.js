import logo from './logo.svg';
import React, {Component} from "react";
import './App.css';
import Form from './Form';

class App extends Component{

  state = {
    fields: {}
  };

  onSubmit = fields => {
    this.setState({fields});
    console.log('coi chom duoc thong tin gi ne:D', fields);
  };

  // onChange = updatedValue => {
  //   this.setState({fields: {
  //     ...this.state.fields,
  //     ...updatedValue
  //   }
  // });
  // };

  render(){
    return (
      <div className="App">
        <h1>Hello FROM rEACT</h1>
        <Form onSubmit={fields => this.onSubmit(fields)}/>
        <p>{JSON.stringify(this.state.fields, null, 2)}</p>
      </div>
    );
  }

}
  

export default App;
