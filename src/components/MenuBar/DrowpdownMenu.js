import React, { useState, useEffect, useRef } from 'react';
import { CSSTransition } from 'react-transition-group';

function DropdownMenu(props) {
    const [activeMenu, setActiveMenu] = useState('main');
    const [menuHeight, setMenuHeight] = useState(null);
    const dropdownRef = useRef(null);
    console.log(props);
    useEffect(() => {
      setMenuHeight(props.menuObj.length * (dropdownRef.current?.firstChild.offsetHeight))
    }, [])
  
    function calcHeight(el) {
      const height = el.offsetHeight;
      console.log(height);
      setMenuHeight(height);
    }
  
    function DropdownItem(props) {
        
      return (
        <a href="#" className="menu-item" onClick={() => props.goToMenu && setActiveMenu(props.goToMenu)}>
          {props.children}
        </a>
      );
    }
  
    return (
        
      <div className="dropdown" style={{ height: menuHeight }} ref={dropdownRef}>
        {props.menuObj.map((menuItem, i) => {
            
            return (
                <div key={i}>
                <CSSTransition 
                in={activeMenu === 'main'}
                timeout={500}
                classNames="menu-primary"
                unmountOnExit
                onEnter={calcHeight}>
                <div className="menu">
                  
                  <DropdownItem
                    goToMenu={menuItem.router}>
                    {menuItem.name}
                  </DropdownItem>
                </div>
              </CSSTransition>
            <CSSTransition
                in={activeMenu === menuItem.router}
                timeout={500}
                classNames="menu-secondary"
                unmountOnExit
                onEnter={calcHeight}>
                <div className="menu">
                    <DropdownItem goToMenu={menuItem.router} >
                    <span>Back</span>
                    </DropdownItem>
                    {menuItem.children.map((menuElement, x) => {
                        return (
                        <DropdownItem key={x}>{menuElement.name}</DropdownItem>
                        )
                    })
                    }
                </div>
                </CSSTransition>
            </div>
            
            )
              
        })
        }
        
  
        
      </div>
    );
}
export default DropdownMenu;

