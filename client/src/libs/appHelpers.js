module.exports = {
  getRatingsArray: obj => {
    return [
      {label: 'Accuracy', rating: obj.accuracyRating},
      {label: 'Location', rating: obj.locationRating},
      {label: 'Communication', rating: obj.communicationRating},
      {label: 'Check-in', rating: obj.check_In_Rating},
      {label: 'Cleanliness', rating: obj.cleanlinessRating},
      {label: 'Value', rating: obj.valueRating},
    ];
  },
};
