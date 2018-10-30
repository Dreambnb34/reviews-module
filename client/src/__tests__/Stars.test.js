import React from 'react';
import {render} from 'react-testing-library';
import Stars from '../components/Modular/Stars';

describe('Stars Component', () => {
  it('renders 1.0 stars', () => {
    const {getAllByTestId} = render(<Stars count={1.2} />);
    const oneStar = getAllByTestId('full-star');
    const emptyStars = getAllByTestId('empty-star');
    expect(oneStar).toHaveLength(1);
    expect(emptyStars).toHaveLength(4);
  });
  it('renders 1.5 stars', () => {
    const {getAllByTestId} = render(<Stars count={1.6} />);
    const oneStar = getAllByTestId('full-star');
    const halfStar = getAllByTestId('half-star');
    const emptyStars = getAllByTestId('empty-star');
    expect(oneStar).toHaveLength(1);
    expect(halfStar).toHaveLength(1);
    expect(emptyStars).toHaveLength(3);
  });
  it('renders 2.0 stars', () => {
    const {getAllByTestId} = render(<Stars count={2.2} />);
    const oneStar = getAllByTestId('full-star');
    const emptyStars = getAllByTestId('empty-star');
    expect(oneStar).toHaveLength(2);
    expect(emptyStars).toHaveLength(3);
  });
  it('renders 2.5 stars', () => {
    const {getAllByTestId} = render(<Stars count={2.6} />);
    const oneStar = getAllByTestId('full-star');
    const halfStar = getAllByTestId('half-star');
    const emptyStars = getAllByTestId('empty-star');
    expect(oneStar).toHaveLength(2);
    expect(halfStar).toHaveLength(1);
    expect(emptyStars).toHaveLength(2);
  });
  it('renders 3.0 stars', () => {
    const {getAllByTestId} = render(<Stars count={3.2} />);
    const oneStar = getAllByTestId('full-star');
    const emptyStars = getAllByTestId('empty-star');
    expect(oneStar).toHaveLength(3);
    expect(emptyStars).toHaveLength(2);
  });
  it('renders 3.5 stars', () => {
    const {getAllByTestId} = render(<Stars count={3.6} />);
    const oneStar = getAllByTestId('full-star');
    const halfStar = getAllByTestId('half-star');
    const emptyStars = getAllByTestId('empty-star');
    expect(oneStar).toHaveLength(3);
    expect(halfStar).toHaveLength(1);
    expect(emptyStars).toHaveLength(1);
  });
  it('renders 4.0 stars', () => {
    const {getAllByTestId} = render(<Stars count={4.1} />);
    const oneStar = getAllByTestId('full-star');
    const emptyStars = getAllByTestId('empty-star');
    expect(oneStar).toHaveLength(4);
    expect(emptyStars).toHaveLength(1);
  });
  it('renders 4.5 stars', () => {
    const {getAllByTestId} = render(<Stars count={4.7} />);
    const oneStar = getAllByTestId('full-star');
    const halfStar = getAllByTestId('half-star');
    expect(oneStar).toHaveLength(4);
    expect(halfStar).toHaveLength(1);
  });
  it('renders 5.0 stars', () => {
    // anything 4.9 and above is 5 stars
    const {getAllByTestId} = render(<Stars count={4.8} />);
    const oneStar = getAllByTestId('full-star');
    expect(oneStar).toHaveLength(5);
  });
});
