import React, {useState, Component} from 'react';




class MenuItem extends Component {
    constructor(props) {
        super(props);
        this.state = {open: false};
    }
    // Shows or hide the Drawer
    handleToggle = () => this.setState({open: !this.state.open});

    // Closes the drawer
    handleClose = () => this.setState({open: false});
    render() {
        return (
            <li className="nav-item" >
                <a href="#" className="icon-button" onClick={this.handleToggle}>
                {this.props.item.name}
                </a>
                {this.state.open && this.props.children}
            </li>
        );
    }
    
  }

  export default MenuItem