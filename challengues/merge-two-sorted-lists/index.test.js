const mergeTwoLists = require('./index');

function ListNode(val, next) {
  this.val = (val===undefined ? 0 : val)
  this.next = (next===undefined ? null : next)
}

describe('mergeTwoLists', () => {
  it('mergeTwoLists([1,2,4], [1,3,4]) should be [1,1,2,3,4,4]', () => {
    const list1 = new ListNode(1, new ListNode(2, new ListNode(4)));
    const list2 = new ListNode(1, new ListNode(3, new ListNode(4)));
    const expected = new ListNode(1, new ListNode(1, new ListNode(2, new ListNode(3, new ListNode(4, new ListNode(4))))));
    expect(mergeTwoLists(list1, list2)).toEqual(expected);
  });
  it('mergeTwoLists([1,3,4]), [1,2,4] should be [1,1,2,3,4,4]', () => {
    const list1 = new ListNode(1, new ListNode(3, new ListNode(4)));
    const list2 = new ListNode(1, new ListNode(2, new ListNode(4)));
    const expected = new ListNode(1, new ListNode(1, new ListNode(2, new ListNode(3, new ListNode(4, new ListNode(4))))));
    expect(mergeTwoLists(list1, list2)).toEqual(expected);
  });
});