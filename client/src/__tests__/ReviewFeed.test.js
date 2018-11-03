import React from 'react';
import {render} from 'react-testing-library';
import ReviewFeed from '../components/ReviewFeed';
import {reviews4, reviews7} from '../__mocks__/mockReviews';
import Moment from 'moment';

describe('Review Feed Component', () => {
  const mockGetReviewState = () => {
    return 'NormalReviews';
  };
  it('has a container for the individual reviews', () => {
    const {getByTestId} = render(
      <ReviewFeed reviews={reviews4} getReviewState={mockGetReviewState} />,
    );
    const reviewFeedNode = getByTestId('review-feed-container');
    expect(reviewFeedNode).not.toBeNull();
  });

  it('renders the correct amount of reviews if given less than 7 reviews', () => {
    const {getAllByTestId} = render(
      <ReviewFeed reviews={reviews4} getReviewState={mockGetReviewState} />,
    );

    // Every review has a username-container so we see how many are in the dom
    const reviewNodes = getAllByTestId('username-container');
    expect(reviewNodes).toHaveLength(reviews4.length);
  });

  it('renders the correct amount of reviews if given 7 reviews', () => {
    const {getAllByTestId} = render(
      <ReviewFeed reviews={reviews7} getReviewState={mockGetReviewState} />,
    );

    // Every review has a username-container so we see how many are in the dom
    const reviewNodes = getAllByTestId('username-container');
    expect(reviewNodes).toHaveLength(reviews7.length);
  });

  it('renders from the most recent to the oldest reviews', () => {
    const arrReviews = reviews7.map(review => {
      return Moment(review.createdAt).format('MMMM YYYY');
    });

    const {getAllByTestId} = render(
      <ReviewFeed reviews={reviews7} getReviewState={mockGetReviewState} />,
    );
    const createdAtNodes = getAllByTestId('createdAt-container');
    createdAtNodes.forEach((node, index) => {
      expect(node.innerHTML).toBe(arrReviews[index]);
    });
  });
});
