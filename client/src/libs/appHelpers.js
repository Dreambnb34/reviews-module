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
      {label: 'Communication', rating: obj.communicationRating},
      {label: 'Cleanliness', rating: obj.cleanlinessRating},
      {label: 'Location', rating: obj.locationRating},
      {label: 'Check-in', rating: obj.checkInRating},
      {label: 'Value', rating: obj.valueRating},
    ];
  },
};
