import React from 'react';
import {render} from 'react-testing-library';
import App from '../components/App';
import lib from '../libs/networkHelpers.js';
import {mockReturnObj} from '../__mocks__/mockReturnObj';

describe('App', () => {
  // Set the URL to be a specific EP
  // window.history.pushState({}, 'Test Title', '/test.html?query=true');

  it('loads at the beginning', () => {
    const {getByText} = render(<App />);
    const loadingNode = getByText('Loading...');
    expect(loadingNode).not.toBeNull();
  });
});
