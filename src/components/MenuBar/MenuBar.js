import React, {Component} from 'react';
import DropdownMenu from '../MenuBar/DrowpdownMenu'
import ManuItem from '../MenuBar/MenuItem'
import FormPanel from '../FormPanel';


class MenuBar extends Component {
    constructor( {props} ) {
      super( props )
      this.state = {
        close: false
      };
      let handleToUpdate  = this.handleToUpdate.bind(this);
      let  arg1 = '';
    }
    handleToUpdate(index){
      
        this.refs.child.handleClose();
      
    }   
    

    render() {
      let handleToUpdate  =   this.handleToUpdate;
        return (<nav className="navbar" >
          <ul className="navbar-nav">{this.props && this.props.menuList && this.props.menuList.length 
        ? this.props.menuList.map((menuItem, i) => {
          if (menuItem.type && menuItem.type === 'form') {
            return (
            <ManuItem ref='child' item={menuItem} close={this.state.close} key={i}>
              <FormPanel index={i} handleToUpdate = {this.handleToUpdate.bind(this)}/>
            </ManuItem>)
          } else {
            return (<ManuItem item={menuItem} key={i}>
                      {menuItem.children && menuItem.children.length 
                    ?  <DropdownMenu  menuObj= {menuItem.children}></DropdownMenu>
                        : undefined}
                    </ManuItem>)
          }
        })
            : undefined}
            </ul></nav>) 
    }
}
export default MenuBar

