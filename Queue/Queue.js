class MyQueue {
    constructor() {
        this.group = [];
    }

    enMyQueue(element) {
        this.group.push(element);
    }

    deMyQueue() {
        if (this.isEmpty()) {
            return null;
        }
        return this.group.shift();               // Removes the first element
    }

    front() {
        if (this.isEmpty()) {
            return null;
        }
        return this.group[0];                    // Returns the first element
    }

    isEmpty() {
        return this.group.length === 0;
    }

    size() {
        return this.group.length;
    }
}


const newQueue = new MyQueue();
newQueue.enMyQueue(1);
newQueue.enMyQueue(2);
newQueue.enMyQueue(3);
console.log(newQueue.deMyQueue());     // 1
console.log(newQueue.front());         // 2
console.log(newQueue.size());          // 2
