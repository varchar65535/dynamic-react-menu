import React from 'react';
import { shallow }  from 'enzyme';
import MenuBar from './MenuBar';
import MenuItem from './MenuItem';


describe('MenuBar', () => {

  it('render ul elements', () => {
    const menuBarWrapper = shallow(<MenuBar />);
    const menuList = menuBarWrapper.find('ul');
    expect(menuList).toHaveLength(1);
  });

  it('render no li elements when no menuItem exist', () => {
    const menuListArray = [];
    const menuBarWrapper = shallow(<MenuBar menuList= {menuListArray}/>);
    const menuList = menuBarWrapper.find(MenuItem);
    expect(menuList).toHaveLength(0);
  });

  it('render one li element when one menuItem exist', () => {
    const menuListArray = [
        {
            name: "Item1",
            router: "/item1",
            type: "menuItem",
            children: []
        }
    ];
    const menuBarWrapper = shallow(<MenuBar menuList= {menuListArray}/>);
    const menuList = menuBarWrapper.find(MenuItem);
    expect(menuList).toHaveLength(1);
  });

  it('render two li elements when two menuItems exist', () => {
    const menuListArray = [
        {
            name: "Item1",
            router: "/item1",
            type: "menuItem",
            children: []
        },
        {
            name: "Item2",
            router: "/item2",
            type: "menuItem",
            children: []
        }
    ];
    const menuBarWrapper = shallow(<MenuBar menuList= {menuListArray}/>);
    const menuList = menuBarWrapper.find(MenuItem);
    expect(menuList).toHaveLength(2);
  });

  
  
});
