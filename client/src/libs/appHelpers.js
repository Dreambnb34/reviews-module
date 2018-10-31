module.exports = {
  getReviewCount: (count, average) => {
    return {
      reviewCount: count,
      rating: average,
    };
  },
  getRatingsArray: obj => {
    console.log(obj);
    return [
      {label: 'Accuracy', rating: obj.accuracyRating},
      {label: 'Location', rating: obj.locationRating},
      {label: 'Communication', rating: obj.communicationRating},
      {label: 'Check-in', rating: obj.checkInRating},
      {label: 'Cleanliness', rating: obj.cleanlinessRating},
      {label: 'Value', rating: obj.valueRating},
    ];
  },
};
