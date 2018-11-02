import {getRatingsArray} from '../libs/appHelpers';
import mockReturnObj from '../__mocks__/mockReturnObj';

describe('App Helper Functions', () => {
  describe('Get Ratings Array Function', () => {
    it('return an array', () => {
      expect(Array.isArray(getRatingsArray(mockReturnObj))).toBe(true);
    });

    it('returns the correct objects inside the array', () => {
      let array = getRatingsArray(mockReturnObj);
      expect(array[0].accuracyRating).toBe(mockReturnObj.accuracyRating);
      expect(array[1].locationRating).toBe(mockReturnObj.locationRating);
      expect(array[2].communicationRating).toBe(
        mockReturnObj.communicationRating,
      );
      expect(array[3].check_In_Rating).toBe(mockReturnObj.check_In_Rating);
      expect(array[4].cleanlinessRating).toBe(mockReturnObj.cleanlinessRating);
      expect(array[5].valueRating).toBe(mockReturnObj.valueRating);
    });
  });
});
