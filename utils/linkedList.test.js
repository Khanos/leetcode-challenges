import { ListNode, LinkedList } from "./linkedList";

describe('LinkedList', () => {
  it('should create a linked list from an array', () => {
    const linkedList = LinkedList.create([1, 2, 3, 4, 5]);
    const expected = JSON.stringify([1, 2, 3, 4, 5]);
    const result = linkedList.toString();
    expect(result).toBe(expected);
  });

  it('should return the size of the linked list', () => {
    const linkedList = LinkedList.create([1, 2, 3, 4, 5]);
    const expected = 5;
    const result = linkedList.size();
    expect(result).toBe(expected);
  });

  it('should return the node at the index', () => {
    const linkedList = LinkedList.create([1, 2, 3, 4, 5]);
    const expected = 3;
    const result = linkedList.get(2).val;
    expect(result).toBe(expected);
  });
});

describe('ListNode', () => {
  it('should create a node with a value and a next node', () => {
    const node = new ListNode(1, new ListNode(2));
    const expected = JSON.stringify({ val: 1, next: { val: 2, next: null } });
    const result = JSON.stringify(node);
    expect(result).toBe(expected);
  });
});