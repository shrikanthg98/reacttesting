import UseStateInClassbased from "./UseStateInClassbased";
import MotherComponent from "./Todo_LiftingStateUpExample/MotherComponent";
import WhyReduxContainer from "./whyredux/WhyReduxContainer";
import ReduxCounter from "./ReduxCounter";
import LogoutMenu from "./LogoutRedux/LogoutMenu";
import MainMenu from "./LogoutRedux/MainMenu";
import MyButton from "./LocalStorageTesting/MyButton";
import allReducers from "./reducers";
import SongList from "./components/SongList";
import SongListWithHooks from "./components/SongListWithHooks";

import CreateBook from "./Task1/CreateBook";
import ShowBookList from "./Task1/ShowBookList";
import ShowBookDetails from "./Task1/ShowBookDetails";
import UpdateBookInfo from "./Task1/UpdateBookInfo";

import { BrowserRouter as Router, Route } from "react-router-dom";
import "./App.css";
import React, { Component } from "react";

class App extends Component {
  render() {
    return (
      <Router>
        <div>
          <Route exact path="/" component={ShowBookList} />
          <Route exact path="/create-book" component={CreateBook} />
          <Route exact path="/edit-book/:id" component={UpdateBookInfo} />
          <Route exact path="/show-book/:id" component={ShowBookDetails} />
        </div>
      </Router>
    );
  }
}

export default App;
