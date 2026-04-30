import { ListNode, type ListNodeType } from '../../utils/LinkedList';

function addTwoNumbers(l1: ListNodeType | null, l2: ListNodeType | null): ListNodeType | null {
    function getNumericValue(node: ListNodeType | null): number {
        let numericValue = 0;
        let current: ListNodeType | null = node;
        let multiplier = 1;
        while(current) {
            numericValue += current.val * multiplier;
            multiplier *= 10;
            current = current.next;
        }
        return numericValue;
    }
    const numericValue1 = getNumericValue(l1);
    const numericValue2 = getNumericValue(l2);
    const sum = numericValue1 + numericValue2;
    const sumString = sum.toString();
    const sumArray = sumString.split('').reverse().map(Number);
    const summedList = new ListNode(sumArray[0], null);
    let current: ListNodeType | null = summedList;
    for(let i = 1; i < sumArray.length; i++) {
        current.next = new ListNode(sumArray[i], null);
        current = current.next;
    }
    return summedList;
};

function addTwoNumbersV2(
    l1: ListNodeType | null,
    l2: ListNodeType | null,
  ): ListNodeType | null {
    const dummyHead = new ListNode(0, null);
    let tail: ListNodeType = dummyHead;
    let carry = 0;
    let p1 = l1;
    let p2 = l2;
  
    while (p1 || p2 || carry) {
      const value1 = p1 ? p1.val : 0;
      const value2 = p2 ? p2.val : 0;
      const sum = value1 + value2 + carry;
  
      carry = Math.floor(sum / 10);
      tail.next = new ListNode(sum % 10, null);
      tail = tail.next;
  
      p1 = p1 ? p1.next : null;
      p2 = p2 ? p2.next : null;
    }
  
    return dummyHead.next;
  }

export { addTwoNumbers, addTwoNumbersV2 };