import React from 'react';
import {render, fireEvent} from 'react-testing-library';
import Review from '../components/Modular/Review';

describe('Individual Review Component', () => {
  const mockData = {
    username: 'Jon',
    createdAt: '2018-10-26T02:22:58.000Z',
    reviewText: 'Totam natus est nam accusamus nobis vero soluta ut eum.',
    avatarURL:
      'https://hrr34-jaypatrickdeguzman-fec.s3.amazonaws.com/FEC/avatar_photos/62dsfsdfsdf.jpg',
  };

  it('has a container for username', () => {
    const {getByTestId} = render(<Review />);
    const usernameNode = getByTestId('username-container');
    expect(usernameNode).not.toBeNull();
  });

  it('renders the correct username', () => {
    const {getByText} = render(<Review username={mockData.username} />);
    const usernameNode = getByText('Jon');
    expect(usernameNode.innerHTML).toBe('Jon');
  });

  it('has a container for createdAtDate', () => {
    const {getByTestId} = render(<Review />);
    const createdAtNode = getByTestId('createdAt-container');
    expect(createdAtNode).not.toBeNull();
  });

  it(`renders the correct date with format "month year" ie "October 2018"`, () => {
    const {getByText} = render(<Review postDate={mockData.createdAt} />);
    const createdAtNode = getByText('October 2018');
    expect(createdAtNode.innerHTML).toBe('October 2018');
  });

  it('has a container for the user avatar', () => {
    const {getByTestId} = render(<Review />);
    const userAvatarNode = getByTestId('avatar-container');
    expect(userAvatarNode).not.toBeNull();
  });

  it('renders the correct user avatar', () => {
    const {container} = render(<Review avatarURL={mockData.avatarURL} />);
    const userAvatar = container.querySelector('img');
    expect(userAvatar.getAttribute('src')).toBe(mockData.avatarURL);
  });

  it('has a container for the review text', () => {
    const {getByTestId} = render(<Review />);
    const reviewTextNode = getByTestId('review-text-container');
    expect(reviewTextNode).not.toBeNull();
  });

  it('renders the correct review text', () => {
    const {getByText} = render(<Review reviewText={mockData.reviewText} />);
    const reviewTextNode = getByText(mockData.reviewText);
    expect(reviewTextNode.innerHTML).toBe(mockData.reviewText);
  });

  it('only shows up to the 278th character in the review', () => {
    const mockData = {
      reviewText:
        'Totam natus est nam accusamus nobis vero soluta ut eum. Et quos laudantium molestiae. Ut nam atque. Tempora iusto sit corrupti deleniti aut voluptatibus non cumque fugiat. Aut enim optio adipisci officiis. Quos voluptatem reiciendis distinctio rerum quas sint.Consectetur laboriosam illum facilis. Doloremque sed sed architecto ea. Consequatur quis vero laudantium ut. Quasi dolorem ea sint qui voluptas est quae autem quas. Deserunt doloribus sunt dolore autem ut consectetur nemo non itaque.Et rerum vitae adipisci quia sed vel. Repellendus qui quam odio autem. Quod dolores enim quod saepe ratione dolores. Est quo magni iusto eos voluptas et nihil qui ab. Laudantium facilis error quia corrupti quae rerum porro dolor.',
    };

    const shortReviewText =
      mockData.reviewText
        .split('')
        .slice(0, 278)
        .join('') + '...';
    const {getByText} = render(<Review reviewText={mockData.reviewText} />);
    const reviewTextNode = getByText(shortReviewText);
    expect(reviewTextNode.innerHTML).toBe(shortReviewText);
  });

  it(`should NOT show 'Read More' button when review text is less than 278 character`, () => {
    const {queryByText} = render(<Review reviewText={mockData.reviewText} />);
    const readMoreButton = queryByText('Read more');
    expect(readMoreButton).toBeNull();
  });

  it(`should show 'Read More' button when review text is more than 278 characters`, () => {
    // reviewText has more than 278 characters
    const mockData = {
      reviewText:
        'Totam natus est nam accusamus nobis vero soluta ut eum. Et quos laudantium molestiae. Ut nam atque. Tempora iusto sit corrupti deleniti aut voluptatibus non cumque fugiat. Aut enim optio adipisci officiis. Quos voluptatem reiciendis distinctio rerum quas sint.Consectetur laboriosam illum facilis. Doloremque sed sed architecto ea. Consequatur quis vero laudantium ut. Quasi dolorem ea sint qui voluptas est quae autem quas. Deserunt doloribus sunt dolore autem ut consectetur nemo non itaque.Et rerum vitae adipisci quia sed vel. Repellendus qui quam odio autem. Quod dolores enim quod saepe ratione dolores. Est quo magni iusto eos voluptas et nihil qui ab. Laudantium facilis error quia corrupti quae rerum porro dolor.',
    };
    const {getByText} = render(<Review reviewText={mockData.reviewText} />);
    const readMoreButton = getByText('Read more');
    expect(readMoreButton).not.toBeNull();
  });

  it(`should show the whole review once the 'Read more' button is clicked`, () => {
    // reviewText has more than 278 characters
    const mockData = {
      reviewText:
        'Totam natus est nam accusamus nobis vero soluta ut eum. Et quos laudantium molestiae. Ut nam atque. Tempora iusto sit corrupti deleniti aut voluptatibus non cumque fugiat. Aut enim optio adipisci officiis. Quos voluptatem reiciendis distinctio rerum quas sint.Consectetur laboriosam illum facilis. Doloremque sed sed architecto ea. Consequatur quis vero laudantium ut. Quasi dolorem ea sint qui voluptas est quae autem quas. Deserunt doloribus sunt dolore autem ut consectetur nemo non itaque.Et rerum vitae adipisci quia sed vel. Repellendus qui quam odio autem. Quod dolores enim quod saepe ratione dolores. Est quo magni iusto eos voluptas et nihil qui ab. Laudantium facilis error quia corrupti quae rerum porro dolor.',
    };
    const {getByText} = render(<Review reviewText={mockData.reviewText} />);
    const readMoreButton = getByText('Read more');
    expect(readMoreButton).not.toBeNull();

    fireEvent.click(readMoreButton);

    const fullReview = getByText(mockData.reviewText);
    expect(fullReview.innerHTML).toBe(mockData.reviewText);
  });

  it(`should NOT show the 'Read more' button once it is clicked`, () => {
    // reviewText has more than 278 characters
    const mockData = {
      reviewText:
        'Totam natus est nam accusamus nobis vero soluta ut eum. Et quos laudantium molestiae. Ut nam atque. Tempora iusto sit corrupti deleniti aut voluptatibus non cumque fugiat. Aut enim optio adipisci officiis. Quos voluptatem reiciendis distinctio rerum quas sint.Consectetur laboriosam illum facilis. Doloremque sed sed architecto ea. Consequatur quis vero laudantium ut. Quasi dolorem ea sint qui voluptas est quae autem quas. Deserunt doloribus sunt dolore autem ut consectetur nemo non itaque.Et rerum vitae adipisci quia sed vel. Repellendus qui quam odio autem. Quod dolores enim quod saepe ratione dolores. Est quo magni iusto eos voluptas et nihil qui ab. Laudantium facilis error quia corrupti quae rerum porro dolor.',
    };
    const {queryByText} = render(<Review reviewText={mockData.reviewText} />);
    const readMoreButton = queryByText('Read more');
    expect(readMoreButton).not.toBeNull();

    fireEvent.click(readMoreButton);

    const readMoreButtonAfterClick = queryByText('Read more');
    expect(readMoreButtonAfterClick).toBeNull();
  });
});
