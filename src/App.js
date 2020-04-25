import React, { Component } from "react";
// import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { HashRouter as Router, Route, Switch } from "react-router-dom";
import Header from "./Components/layout/Header";
import About from "./Components/pages/About";
import Contacts from "./Components/contacts/Contacts";
import AddContacts from "./Components/contacts/AddContact";
import EditContacts from "./Components/contacts/EditContact";
import Test from "./Components/test/Test";
import NotFound from "./Components/pages/NotFound";

import { Provider } from "./Context";

import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";

class App extends Component {
  render() {
    return (
      <Provider>
        <Router>
          <div className="App">
            <Header branding="Contact Manager" />
            <div className="container">
              <Switch>
                <Route exact path="/" component={Contacts} />
                <Route exact path="/about" component={About} />
                <Route exact path="/test" component={Test} />
                <Route exact path="/contact/add" component={AddContacts} />
                <Route
                  exact
                  path="/contact/edit/:id"
                  component={EditContacts}
                />
                <Route component={NotFound} />
              </Switch>
            </div>
          </div>
        </Router>
      </Provider>
    );
  }
}

export default App;
