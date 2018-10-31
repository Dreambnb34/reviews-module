import axios from 'axios';

export default {
  fetchReviews: listingsId => {
    return axios.get(`/api/reviews/${listingsId}`);
  },
};
