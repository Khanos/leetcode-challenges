import maximunWealth from './index.js';

describe('maximumWealth', () => {
  it('Should return the largest wealth', () => {
    const accounts = [[1, 2, 3], [3, 2, 1]];
    expect(maximunWealth(accounts)).toBe(6);
  });

  it('Should return the largest wealth', () => {
    const accounts = [[1, 5], [7, 3], [3, 5]];
    expect(maximunWealth(accounts)).toBe(10);
  }); 
});
