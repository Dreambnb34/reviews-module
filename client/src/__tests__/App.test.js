import React from 'react';
import {render} from 'react-testing-library';
import App from '../components/App';
import lib from '../libs/networkHelpers.js';
import {mockReturnObj} from '../__mocks__/mockReturnObj';

describe('App', () => {
  // jest.spyOn(lib, 'fetchReviews');
  // lib.fetchReviews = jest.fn(() => {
  //   Promise.resolve(mockReturnObj);
  // });

  it('renders the App', () => {
    const {getByText} = render(<App />);
    const node = getByText('202 Reviews');
    expect(node).not.toBeNull();
  });

  it('renders the Review Count Component', () => {});
});
