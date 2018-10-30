import React from 'react';
import {render} from 'react-testing-library';
import Ratings from '../components/Modular/Ratings';

describe('Ratings Component', () => {
  it('has a container for the Ratings', () => {
    const {getByTestId} = render(<Ratings />);
    const ratingsContainer = getByTestId('ratings-container');
    expect(ratingsContainer).not.toBeNull();
  });

  it('renders the Stars Component', () => {
    const {getByTestId} = render(<Ratings />);
    const starsContainer = getByTestId('stars-container');
    expect(starsContainer).not.toBeNull();
  });

  it('renders the correct label for the component', () => {
    const mockData = {
      label: 'TestRatingLabel',
      rating: 3.5,
    };
    const {getByText} = render(<Ratings {...mockData} />);
    const labelNode = getByText('TestRatingLabel');
    expect(labelNode.innerHTML).toBe(mockData.label);
  });
});
