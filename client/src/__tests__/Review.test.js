import React from 'react';
import {render} from 'react-testing-library';
import Review from '../components/Modular/Review';

describe('Individual Review Component', () => {
  const mockData = {
    username: 'Jon',
    createdAt: '2018-10-26T02:22:58.000Z',
    reviewText:
      'Totam natus est nam accusamus nobis vero soluta ut eum. Et quos laudantium molestiae. Ut nam atque. Tempora iusto sit corrupti deleniti aut voluptatibus non cumque fugiat. Aut enim optio adipisci officiis. Quos voluptatem reiciendis distinctio rerum quas sint.Consectetur laboriosam illum facilis. Doloremque sed sed architecto ea. Consequatur quis vero laudantium ut. Quasi dolorem ea sint qui voluptas est quae autem quas. Deserunt doloribus sunt dolore autem ut consectetur nemo non itaque.Et rerum vitae adipisci quia sed vel. Repellendus qui quam odio autem. Quod dolores enim quod saepe ratione dolores. Est quo magni iusto eos voluptas et nihil qui ab. Laudantium facilis error quia corrupti quae rerum porro dolor.',
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

  it(`renders the correct date with format "month year"`, () => {
    const {getByText} = render(<Review postDate={mockData.createdAt} />);
    const createdAtNode = getByText('October 2018');
    expect(createdAtNode.innerHTML).toBe('October 2018');
  });
});
