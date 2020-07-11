import React from 'react';
import { render } from '@testing-library/react';
import App from './App';
import { shallow }  from 'enzyme';
import MenuBar from './components/MenuBar/MenuBar';

describe('App', () => {
  let appWrapper;

  beforeAll(() => {
    appWrapper = shallow(<App />);
  });

  it('render a manu bar component', () => {
      const menuBar = appWrapper.find(MenuBar);
      expect(menuBar).toHaveLength(1);
  });
  it('has state', ()=> {
      const appState = appWrapper.state();
      expect(appState).not.toBeNull();
  });

  it('has menu list on state', ()=> {
    const appState = appWrapper.state();
    expect(appState.menuList).toBeDefined();
  });

  it('passes menulist array from json to MenuBar', () => {
      const menuBar = appWrapper.find(MenuBar);
       expect(menuBar.props().menuList).toEqual(appWrapper.state().menuList);
  });
});
