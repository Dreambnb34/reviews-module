import React, {Component} from 'react';
// import ReviewCount from './ReviewCount/ReviewCount';
import Review from './Modular/Review';

class App extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div id="App">
        <Review
          username="Mooooooo"
          avatarURL="https://hrr34-jaypatrickdeguzman-fec.s3.amazonaws.com/FEC/avatar_photos/62dsfsdfsdf.jpg"
          reviewText="Totam natus est nam accusamus nobis vero soluta ut eum. Et quos laudantium molestiae. Ut nam atque. Tempora iusto sit corrupti deleniti aut voluptatibus non cumque fugiat. Aut enim optio adipisci officiis. Quos voluptatem reiciendis distinctio rerum quas sint.Consectetur laboriosam illum facilis. Doloremque sed sed architecto ea. Consequatur quis vero laudantium ut. Quasi dolorem ea sint qui voluptas est quae autem quas. Deserunt doloribus sunt dolore autem ut consectetur nemo non itaque.Et rerum vitae adipisci quia sed vel. Repellendus qui quam odio autem. Quod dolores enim quod saepe ratione dolores. Est quo magni iusto eos voluptas et nihil qui ab. Laudantium facilis error quia corrupti quae rerum porro dolor."
        />
      </div>
    );
  }
}

export default App;
