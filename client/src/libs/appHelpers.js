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

  isBrowser: () => {
    const isInBrowser = new Function(
      'try {return this===window;}catch(e){ return false;}',
    );
    console.log('This is this: ', this);
    return isInBrowser;
  },

  scrollUp: () => {
    window.scrollTo({
      top: 0,
      left: 0,
      behavior: 'smooth',
    });
  },
};
