//? Q:41. Implement a Stack class.

//? A stack is a linear data structure that follows the Last-In, First-Out (LIFO) principle.

//* Constraints:
//? The Stack class should have the following methods:
//? - push(element): Adds an element to the top of the stack.
//? - pop(): Removes the element from the top of the stack and returns it.
//? - peek(): Returns the element at the top of the stack without removing it.
//? - isEmpty(): Returns true if the stack is empty, false otherwise.


// class Stack {}
// const stack = new Stack();
// stack.push(1);
// stack.push(2);
// console.log(stack.peek()); // Output: 2
// console.log(stack.pop()); // Output: 2
// console.log(stack.isEmpty()); // Output: false


// My solution 1

// class Stack {
//     constructor() {
//         this.items = [];
//     }

//     push(element) {
//         this.items.push(element);
//     }

//     pop() {
//         if (this.isEmpty()) {
//             return "Underflow";
//         }
//         return this.items.pop();
//     }

//     peek() {
//         return this.items[this.items.length - 1];
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

class Stack {
    constructor() {
        this.top = null;
    }

    push(element) {
        const newNode = new Node(element);
        newNode.next = this.top;
        this.top = newNode;
    }

    pop() {
        if (this.isEmpty()) {
            return "Underflow";
        }
        const poppedValue = this.top.value;
        this.top = this.top.next;
        return poppedValue;
    }

    peek() {
        return this.isEmpty() ? "Stack is empty" : this.top.value;
    }

    isEmpty() {
        return this.top === null;
    }
}

const stack = new Stack();
stack.push(1); // [1]
stack.push(2); // [1, 2]
console.log(stack.peek()); // Output: 2
console.log(stack.pop()); // Output: 2
console.log(stack.isEmpty()); // Output: false
console.log(stack.pop()); // Output: 1
console.log(stack.isEmpty()); // Output: true
console.log(stack.pop()); // Output: Underflow
