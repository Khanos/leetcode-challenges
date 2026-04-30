import addTwoNumbers from './index';
import { LinkedList } from '../../utils/LinkedList';

describe('#addTwoNumbers', () => {
  it('should return the sum of two numbers', () => {
    const l1 = LinkedList.create([2, 4, 3]);
    const l2 = LinkedList.create([5, 6, 4]);
    const result = addTwoNumbers(l1.head, l2.head);
    expect(result).toEqual(LinkedList.create([7, 0, 8]).head);
  });
});