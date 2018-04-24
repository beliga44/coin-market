import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Home from './Home';
import Header from './Header';
import Body from './Body';
import AppBar from 'material-ui/AppBar';
import Toolbar from 'material-ui/Toolbar';
import createMuiTheme from 'material-ui/styles/createMuiTheme';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import {
  indigo,
  purple,
  deepOrange
} from 'material-ui/colors';

class App extends Component {
  constructor(props) {
    super(props);

    this.theme = createMuiTheme({
      palette: {
        primary: {
          main: indigo["500"],
          dark: indigo["700"]
        },
        secondary: {
          main: purple["500"],
          dark: purple["700"]
        }
      }
    });
  }

  render() {
    return (
      <MuiThemeProvider theme={this.theme}>
        <div className="App">
          <Header />
          <Body />
        </div>
      </MuiThemeProvider>
    );
  }
}

export default App;
