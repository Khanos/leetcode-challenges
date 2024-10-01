import { middleNode } from ".";
import { LinkedList } from "../../utils/linkedList";

describe('#middleNode', () => {
  it('should return the middle Node of the linked list', () => {
    const linkedList = LinkedList.create([1, 2, 3, 4, 5]);
    const expected = LinkedList.create([3, 4, 5]).head;
    const result = middleNode(linkedList.head);
    expect(result).toStrictEqual(expected);
  })
});
