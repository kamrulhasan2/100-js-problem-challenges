//? Q:61. Implement a Deque (double-ended queue).

//? A deque is a linear data structure that allows adding and removing elements from both ends.

//* Constraints:
//? The Deque class should have the following methods:
//? - addFront(element): Adds an element to the front of the deque.
//? - addRear(element): Adds an element to the back of the deque.
//? - removeFront(): Removes the element from the front of the deque and returns it.
//? - removeRear(): Removes the element from the back of the deque and returns it.
//? - getFront(): Returns the element at the front of the deque without removing it.
//? - getRear(): Returns the element at the back of the deque without removing it.
//? - isEmpty(): Returns true if the deque is empty, false otherwise.


// class Deque {}
// const deque = new Deque();
// deque.addRear(1);
// deque.addRear(2);
// deque.addFront(0);
// console.log(deque.getFront()); // Output: 0
// console.log(deque.getRear()); // Output: 2
// console.log(deque.removeFront()); // Output: 0
// console.log(deque.removeRear()); // Output: 2


// My solution
class Deque {
    constructor() {
        this.items = [];
    }

    addFront(element) {
        this.items.unshift(element);
    }

    addRear(element) {
        this.items.push(element);
    }

    removeFront() {
        if (this.isEmpty()) {
            return "Underflow";
        }
        return this.items.shift();
    }

    removeRear() {
        if (this.isEmpty()) {
            return "Underflow";
        }
        return this.items.pop();
    }

    getFront() {
        return this.items[0];
    }

    getRear() {
        return this.items[this.items.length - 1];
    }

    isEmpty() {
        return this.items.length === 0;
    }
}

const deque = new Deque();
deque.addRear(1);
deque.addRear(2);
deque.addFront(0);
console.log(deque.getFront()); // Output: 0
console.log(deque.getRear()); // Output: 2
console.log(deque.removeFront()); // Output: 0
console.log(deque.removeRear()); // Output: 2
