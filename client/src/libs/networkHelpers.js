import axios from 'axios';

export default {
  fetchReviews: (listingsId, page) => {
    return axios.get(`/api/reviews/${listingsId}/${page}`);
  },
  fetchReviewsBySearch: (listingsId, page, searchTerm) => {
    return axios.get(`/api/reviews/${listingsId}/${page}/${searchTerm}`);
  },
};
