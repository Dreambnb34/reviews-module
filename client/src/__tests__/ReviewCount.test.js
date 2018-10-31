import React from 'react';
import {render} from 'react-testing-library';
import ReviewCount from '../components/ReviewCount';

describe('Review Count', () => {
  const mockData = {
    reviewCount: 137,
    averageAccuracyRating: 4,
    averageCommunicationRating: 5,
    averageCleanlinessRating: 3,
    averageLocationRating: 2,
    averageCheck_In_Rating: 1,
    averageValueRating: 4,
  };

  it('renders the correct the review count', () => {
    const query = '137 Reviews';
    const {queryByText} = render(<ReviewCount {...mockData} />);
    const reviewCountNode = queryByText(query);
    expect(reviewCountNode.innerHTML).toBe(query);
  });

  it('renders the Stars Component', () => {
    const {getByTestId} = render(<ReviewCount />);
    const starsContainer = getByTestId('stars-container');
    expect(starsContainer).not.toBeNull();
  });
});
