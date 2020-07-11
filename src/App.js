import React, { Component } from 'react';
import './App.css';
import MenuBar from './components/MenuBar/MenuBar'
import menuSettings  from './settings/menuSettings';



class App extends Component {
    state = {menuList: menuSettings.data};
    render() {
      return (
        <div className="App">
          <MenuBar menuList= {this.state.menuList}/>
        </div>
      );
    }
}

export default App;
