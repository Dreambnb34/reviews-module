import axios from 'axios';

export default {
  fetchReviews: (listingsId, page) => {
    return axios.get(`/api/reviews/${listingsId}/${page}`);
  },
};
