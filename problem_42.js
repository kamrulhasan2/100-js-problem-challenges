//? Q:42. Implement a Queue class.

//? A queue is a linear data structure that follows the First-In, First-Out (FIFO) principle.

//* Constraints:
//? The Queue class should have the following methods:
//? - enqueue(element): Adds an element to the back of the queue.
//? - dequeue(): Removes the element from the front of the queue and returns it.
//? - front(): Returns the element at the front of the queue without removing it.
//? - isEmpty(): Returns true if the queue is empty, false otherwise.


// class Queue {}
// const queue = new Queue();
// queue.enqueue(1);
// queue.enqueue(2);
// console.log(queue.front()); // Output: 1
// console.log(queue.dequeue()); // Output: 1
// console.log(queue.isEmpty()); // Output: false


// My solution 1 : Using Array
// class Queue {
//     constructor() {
//         this.items = [];
//     }

//     enqueue(element) {
//         this.items.push(element);
//     }

//     dequeue() {
//         if (this.isEmpty()) {
//             return "Underflow";
//         }
//         return this.items.shift();
//     }

//     front() {
//         if (this.isEmpty()) {
//             return "No elements in Queue";
//         }
//         return this.items[0];
//     }

//     isEmpty() {
//         return this.items.length === 0;
//     }
// }


// My solution 2 : Using Linked List
class Node {
    constructor(value) {
        this.value = value;
        this.next = null;
    }
}


class Queue {
    constructor() {
        this.head = null; 
        this.rear = null;
    }

    enqueue(element) {
        const newNode = new Node(element);
        if (this.isEmpty()) {
            this.head = this.rear = newNode;
        } else {
            this.rear.next = newNode;
            this.rear = newNode;
        }
    }

    dequeue() {
        if (this.isEmpty()) {
            return "Underflow";
        }
        const dequeuedValue = this.head.value;
        this.head = this.head.next;
        if (this.head === null) {
            this.rear = null;
        }
        return dequeuedValue;
    }

    front() {
        if (this.isEmpty()) {
            return "No elements in Queue";
        }
        return this.head.value;
    }

    isEmpty() {
        return this.head === null;
    }
}

const queue = new Queue();
queue.enqueue(1); // [1]
queue.enqueue(2); // [1,2]
console.log(queue.front()); // Output: 1
console.log(queue.dequeue()); // Output: 1
console.log(queue.isEmpty()); // Output: false
console.log(queue.dequeue()); // Output: 2
console.log(queue.isEmpty()); // Output: true
console.log(queue.dequeue()); // Output: Underflow
