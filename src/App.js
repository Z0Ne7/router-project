import React, { Component } from 'react';
import './App.css';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Menu from './components/Menu/Menu';
import routes from './routes';

class App extends Component {
  showContentMenus = routes => {
    let results = null;
    if (routes.length > 0) {
      results = routes.map((route, index) => {
        return (
          <Route
            key={index}
            path={route.path}
            exact={route.exact}
            component={route.main}
          />
        );
      });
    }
    return <Switch>{results}</Switch>;
  };

  render() {
    return (
      <Router>
        <div>
          <Menu />
          <div className="container">
            <div className="row">{this.showContentMenus(routes)}</div>
          </div>
        </div>
      </Router>
    );
  }
}

export default App;
