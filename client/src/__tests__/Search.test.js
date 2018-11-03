import React from 'react';
import {render, fireEvent} from 'react-testing-library';
import Search from '../components/Search';

describe('Search Component', () => {
  it('renders the search component', () => {
    const {container} = render(<Search />);
    expect(container.firstChild).toMatchSnapshot();
  });

  it('should intiate search when the "Enter" key is pressed', () => {
    const mockFn = jest.fn();
    const {container} = render(<Search onPageSearch={mockFn} />);
    fireEvent.keyDown(container.getElementsByTagName('input')['0'], {
      key: 'Enter',
      keyCode: 13,
      which: 13,
    });
    expect(mockFn.mock.calls.length).toBe(1);
  });

  it('should intiate search with the correct value in the input field', () => {
    const mockFn = jest.fn();
    const {getByPlaceholderText} = render(<Search onPageSearch={mockFn} />);
    const input = getByPlaceholderText('Search reviews');
    fireEvent.change(input, {
      target: {value: 'Test'},
    });

    expect(input.value).toBe('Test');
  });
});
