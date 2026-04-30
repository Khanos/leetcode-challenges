import { addTwoNumbers, addTwoNumbersV2 } from './index';
import { LinkedList } from '../../utils/LinkedList';

describe('#addTwoNumbers', () => {
  it('should return the sum of two numbers', () => {
    const l1 = LinkedList.create([2, 4, 3]);
    const l2 = LinkedList.create([5, 6, 4]);
    const result = addTwoNumbers(l1.head, l2.head);
    expect(result).toEqual(LinkedList.create([7, 0, 8]).head);
  });
});

describe('#addTwoNumbers v2', () => {
    it('should return the sum of two numbers', () => {
      const l1 = LinkedList.create([2, 4, 3]);
      const l2 = LinkedList.create([5, 6, 4]);
  
      const result = addTwoNumbersV2(l1.head, l2.head);
  
      expect(result).toEqual(LinkedList.create([7, 0, 8]).head);
    });
  
    it('should handle carry at the last digit', () => {
      const l1 = LinkedList.create([9, 9, 9, 9, 9, 9, 9]);
      const l2 = LinkedList.create([9, 9, 9, 9]);
  
      const result = addTwoNumbersV2(l1.head, l2.head);
  
      expect(result).toEqual(LinkedList.create([8, 9, 9, 9, 0, 0, 0, 1]).head);
    });
  });