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

export default addTwoNumbers;