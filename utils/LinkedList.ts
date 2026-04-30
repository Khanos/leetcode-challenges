export class ListNode {
  val: number;
  next: ListNode | null;

  constructor(val?: number, next?: ListNode | null) {
    this.val = val === undefined ? 0 : val;
    this.next = next === undefined ? null : next;
  }
}

export type ListNodeType = ListNode;
export class LinkedList {
  head: ListNodeType | null;
  length: number;
  constructor() {
    this.head = null;
    this.length = 0;
  }

  static create(arr: number[]): LinkedList {
    const list = new LinkedList();
    if (!arr || arr.length === 0) return list;
    list.head = new ListNode(arr[0], null);
    let current: ListNodeType | null = list.head;
    list.length = arr.length;
    for (let i = 1; i < arr.length; i++) {
      if (current) {
        current.next = new ListNode(arr[i], null);
        current = current.next;
      }
    }
    if (current) {
      current.next = null;
    }
    return list;
  }

  size(): number {
    return this.length;
  }
  
  get(index: number): ListNodeType | null {
    if (index < 0 || index >= this.length) return null;
    let current: ListNodeType | null = this.head;
    for (let i = 0; i < index; i++) {
      if (current) {
        current = current.next;
      }
    }
    return current;
  }
  
  toString(): string {
    let result: number[] = [];
    let current: ListNodeType | null = this.head;
    while(current) {
      result.push(current.val);
      current = current.next;
    }
    return JSON.stringify(result);
  }
}