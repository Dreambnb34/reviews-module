import React from 'react';
import {render} from 'react-testing-library';
import App from '../components/App';

describe('App', () => {
  it('renders the App', () => {
    const {container} = render(<App />);
    const firstChild = container.firstChild;
    expect(firstChild).toHaveAttribute('id', 'App');
  });

  it('renders the Review Count Component', () => {
    const {queryByText} = render(<App />);
    const ReviewCount = queryByText('ReviewCount');
    // expect(ReviewCount).toBeTruthy();
    console.log(ReviewCount);
  });
});
