import React from 'react';
import {render} from 'react-testing-library';
import ReviewCount from '../components/ReviewCount/ReviewCount';

describe('Review Count', () => {
  it('renders the Review Count', () => {
    const {queryByText} = render(<ReviewCount />);
    const header = queryByText('Review Count');
    expect(header.innerHTML).toBe('Review Count');
  });
});
