import axios from 'axios';

export default {
  fetchReviews: (listingsId, page, searchTerm) => {
    return searchTerm === undefined
      ? axios.get(`http://localhost:1337/api/reviews/${listingsId}${page}`)
      : axios.get(
          `http://localhost:1337/api/reviews/${listingsId}${page}/${searchTerm}`,
        );
  },
};
