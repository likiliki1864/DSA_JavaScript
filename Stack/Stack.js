class MyStack {
    constructor() {
        this.group = [];
    }

    push(ele) {
        this.group.push(ele);
    }

    pop() {
        if (this.isEmpty()) {
            return null;
        }
        return this.group.pop();
    }

    peek() {
        if (this.isEmpty()) {
            return null;
        }
        return this.group[this.group.length - 1];
    }

    isEmpty() {
        return this.group.length === 0;
    }

    size() {
        return this.group.length;
    }
}


const newStack = new MyStack();
newStack.push(1);
newStack.push(2);
newStack.push(3);

console.log(newStack.pop());      // 3
console.log(newStack.peek());     // 2
console.log(newStack.size());     // 2
