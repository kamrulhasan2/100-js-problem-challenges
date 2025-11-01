//? Q:62. Implement a Priority Queue.

//? A priority queue is a special type of queue in which each element is associated with a priority and is served according to its priority.

//* Constraints:
//? The PriorityQueue class should have the following methods:
//? - enqueue(element, priority): Adds an element to the queue with a given priority.
//? - dequeue(): Removes the element with the highest priority from the queue and returns it.
//? - front(): Returns the element with the highest priority without removing it.
//? - isEmpty(): Returns true if the queue is empty, false otherwise.


// class PriorityQueue {}
// const pq = new PriorityQueue();
// pq.enqueue("Task 1", 2);
// pq.enqueue("Task 2", 1);
// pq.enqueue("Task 3", 3);
// console.log(pq.front()); // Output: "Task 2"
// console.log(pq.dequeue()); // Output: "Task 2"


// My solution (Min-Priority Queue)
class PriorityQueue {
    constructor() {
        this.items = [];
    }

    enqueue(element, priority) {
        const queueElement = { element, priority };
        let added = false;
        for (let i = 0; i < this.items.length; i++) {
            if (queueElement.priority < this.items[i].priority) {
                this.items.splice(i, 0, queueElement);
                added = true;
                break;
            }
        }
        if (!added) {
            this.items.push(queueElement);
        }
    }

    dequeue() {
        if (this.isEmpty()) {
            return "Underflow";
        }
        return this.items.shift().element;
    }

    front() {
        if (this.isEmpty()) {
            return "No elements in Queue";
        }
        return this.items[0].element;
    }

    isEmpty() {
        return this.items.length === 0;
    }
}

const pq = new PriorityQueue();
pq.enqueue("Task 1", 2);
pq.enqueue("Task 2", 1);
pq.enqueue("Task 3", 3);
console.log(pq.front()); // Output: "Task 2"
console.log(pq.dequeue()); // Output: "Task 2"
console.log(pq.front()); // Output: "Task 1"
