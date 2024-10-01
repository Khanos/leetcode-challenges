export const ListNode = function(val, next) {
  this.val = (val === undefined ? 0 : val);
  this.next = (next === undefined) ? null : next;
};

export class LinkedList {
  constructor() {
    this.head = null;
    this.length = 0;
  }

  static create(arr) {
    const list = new LinkedList();
    if (!arr || arr.length === 0) return list;
    list.head = new ListNode(arr[0]);
    let current = list.head;
    list.length = arr.length;
    for (let i = 1; i < arr.length; i++) {
      current.next = new ListNode(arr[i]);
      current = current.next;
    }
    return list;
  }

  size() {
    return this.length;
  }
  
  // get the node at the index
  get(index) {
    if (index < 0 || index >= this.length) return null;
    let current = this.head;
    for (let i = 0; i < index; i++) {
      current = current.next;
    }
    return current;
  }

  toString(){
    let result = [];
    let current = this.head;
    while(current !== null) {
      result.push(current.val)
      current = current.next;
    }
    return JSON.stringify(result);
  }
};