import logo from "./logo.svg";
import React, { Component } from "react";
import "./App.css";
import Form from "./Form";
import Navbar from "./Navbar";
import Home from "./Home";
import Create from "./Create";
import UserDetails from "./UserDetails";
import Login from "./pages/Login/Login";
import IdeaList from "./pages/IdeaList/IdeaList";
// import IdeaList from './pages/IdeaList/IdeaList'
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import IdeaCreate from "./pages/IdeaCreate";

class App extends Component {
  state = {
    fields: {},
  };

  onSubmit = (fields) => {
    this.setState({ fields });
    console.log("coi chom duoc thong tin gi ne:D", fields);
  };

  // onChange = updatedValue => {
  //   this.setState({fields: {
  //     ...this.state.fields,
  //     ...updatedValue
  //   }
  // });
  // };

  render() {
    return (
      <Router>
        <div className="App">
          <Navbar></Navbar>
          <div className="content">
            <Routes>
              <Route path="/" element={<Home />}></Route>
              <Route path="/idealist" element={<IdeaList />}></Route>
              {/* <Route path="/ideas" element={<IdeaList />}></Route> */}
              {/* <Route path="/create" element={<Create />}></Route> */}
              <Route path="/person/:id" element={<UserDetails />}></Route>
              <Route path="/ideacreate" element={<IdeaCreate />}></Route>
              <Route path="/login" element={<Login />}></Route>
            </Routes>
          </div>
          {/* <Form onSubmit={fields => this.onSubmit(fields)}/>
        <p>{JSON.stringify(this.state.fields, null, 2)}</p> */}
        </div>
      </Router>
    );
  }
}

export default App;
