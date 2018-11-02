import axios from 'axios';

export default {
  fetchReviews: (listingsId, page, searchTerm) => {
    return searchTerm === undefined
      ? axios.get(`/api/reviews/${listingsId}/${page}`)
      : axios.get(`/api/reviews/${listingsId}/${page}/${searchTerm}`);
  },
};
