/* // Node creation using function
function createNode(data) {
    return {
        data: data,
        next: null
    };
}

// Linked list insertion function
function insert(head, ele) {
    let newNode = createNode(ele);
    
    // If the list is empty, return the new node as the head
    if (head == null) {
        return newNode;
    }
    
    let temp = head;
    
    // Traverse to the end of the list
    while (temp.next != null) {
        temp = temp.next;
    }
    
    // Insert the new node at the end
    temp.next = newNode;
    return head;
}

// Linked list removal function
function remove(head, ele) {
    if (head == null) {
        console.log("LinkedList Empty");
        return head;
    }

    let temp = head;

    // Case 1: Removing the head element
    if (temp.data == ele) {
        return temp.next; // Move head to the next element
    }

    let prev = null;

    // Traverse the list to find the element
    while (temp != null && temp.data != ele) {
        prev = temp;
        temp = temp.next;
    }

    // Case 2: Element not found
    if (temp == null) {
        console.log("No such element");
        return head;
    }

    // Case 3: Element found, remove it
    prev.next = temp.next;
    return head;
}

// Print the linked list function
function printList(head) {
    if (head == null) {
        console.log("List is empty");
        return;
    }

    let temp = head;
    while (temp != null) {
        console.log(temp.data);
        temp = temp.next;
    }
}


let head = null;
head = insert(head, 10);
head = insert(head, 20);
head = insert(head, 30);
head = insert(head, 40);
head = insert(head, 50);

console.log("Original list:");
printList(head);

console.log("\nRemoving 30:");
head = remove(head, 30);
printList(head);

console.log("\nRemoving 10:");
head = remove(head, 10);
printList(head);

console.log("\nRemoving 50:");
head = remove(head, 50);
printList(head); */


// Using Class
class node {
    data;
    next;

    constructor(data) {
        this.data = data;
    }
}

class ll {
    head;
    
    constructor() {
        this.head = null;
    }

    insert(ele) {
        let abc = new node(ele);
        if (this.head == null) {
            abc.next = null;
            this.head = abc;
        } else {
            let temp = this.head;
            while (temp.next != null) {
                temp = temp.next;
            }
            temp.next = abc;
            abc.next = null;
        }
    }

    remove(ele) {
        if (this.head == null) {
            return "LinkedList Empty";
        }

        let temp = this.head;

        // Case 1: Removing the head element
        if (temp.data == ele) {
            this.head = temp.next; // Move head to the next element
            return ele;
        }

        // Traverse the list to find the element
        let prev = null;
        while (temp != null && temp.data != ele) {
            prev = temp;
            temp = temp.next;
        }

        // Case 2: Element not found
        if (temp == null) {
            return "No such element";
        }

        // Case 3: Element found, remove it
        prev.next = temp.next;
        return ele;
    }

    print() {
        if (this.head == null) {
            console.log("List is empty");
            return;
        }

        let temp = this.head;
        while (temp != null) {
            console.log(temp.data);
            temp = temp.next;
        }
    }
}

let aa = new ll();
aa.insert(10);
aa.insert(20);
aa.insert(30);
aa.insert(40);
aa.insert(50);
console.log("Original list:");
aa.print();

console.log("\nRemoving 30:");
console.log(aa.remove(30));
aa.print();

console.log("\nRemoving 10:");
console.log(aa.remove(10));
aa.print();

console.log("\nRemoving 50:");
console.log(aa.remove(50));
aa.print();


//Doubly LinkedList

// Class representing a node in a doubly linked list
class Node {
    constructor(data) {
        this.data = data;
        this.next = null;   // Points to the next node
        this.prev = null;   // Points to the previous node
    }
}

/* // Class representing a doubly linked list
class DoublyLinkedList {
    constructor() {
        this.head = null;  // Points to the first node in the list
        this.tail = null;  // Points to the last node in the list
    }

    // Insert a node at the end of the list
    insert(data) {
        let newNode = new Node(data);
        
        if (this.head == null) {  // If the list is empty
            this.head = newNode;
            this.tail = newNode;
        } else {                  // If the list is not empty
            newNode.prev = this.tail;
            this.tail.next = newNode;
            this.tail = newNode;
        }
    }

    // Remove a node with the given data from the list
    remove(data) {
        if (this.head == null) {  // If the list is empty
            console.log("Doubly LinkedList Empty");
            return;
        }

        let temp = this.head;

        // Traverse the list to find the node with the given data
        while (temp != null && temp.data != data) {
            temp = temp.next;
        }

        if (temp == null) {  // If the node was not found
            console.log("No such element found");
            return;
        }

        // Case 1: Removing the head node
        if (temp == this.head) {
            this.head = temp.next;
            if (this.head != null) {
                this.head.prev = null;
            } else {  // If the list becomes empty after deletion
                this.tail = null;
            }
        }
        // Case 2: Removing the tail node
        else if (temp == this.tail) {
            this.tail = temp.prev;
            this.tail.next = null;
        }
        // Case 3: Removing a node in the middle
        else {
            temp.prev.next = temp.next;
            temp.next.prev = temp.prev;
        }
    }

    // Print the list from head to tail (forward)
    printForward() {
        let temp = this.head;
        if (temp == null) {
            console.log("List is empty");
            return;
        }
        while (temp != null) {
            console.log(temp.data);
            temp = temp.next;
        }
    }

    // Print the list from tail to head (backward)
    printBackward() {
        let temp = this.tail;
        if (temp == null) {
            console.log("List is empty");
            return;
        }
        while (temp != null) {
            console.log(temp.data);
            temp = temp.prev;
        }
    }
}

let dll = new DoublyLinkedList();
dll.insert(10);
dll.insert(20);
dll.insert(30);
dll.insert(40);
dll.insert(50);

console.log("Original list (forward):");
dll.printForward();

console.log("\nOriginal list (backward):");
dll.printBackward();

console.log("\nRemoving 30:");
dll.remove(30);
dll.printForward();

console.log("\nRemoving 10 (head):");
dll.remove(10);
dll.printForward();

console.log("\nRemoving 50 (tail):");
dll.remove(50);
dll.printForward();

 */
/* 
// Node class representing each element in the list
class Node {
    constructor(data) {
        this.data = data;
        this.next = null;  // Points to the next node
    }
}

// Circular Linked List class
class CircularLinkedList {
    constructor() {
        this.head = null;  // Points to the first node in the list
    }

    // Insert a node at the end of the circular list
    insert(data) {
        let newNode = new Node(data);

        // If the list is empty, create a single node that points to itself
        if (this.head == null) {
            this.head = newNode;
            newNode.next = this.head;
        } else {
            // Traverse to the last node
            let temp = this.head;
            while (temp.next != this.head) {
                temp = temp.next;
            }
            // Insert the new node and make it point to the head
            temp.next = newNode;
            newNode.next = this.head;
        }
    }

    // Remove a node with the given data from the list
    remove(data) {
        if (this.head == null) {
            console.log("Circular LinkedList Empty");
            return;
        }

        let temp = this.head;
        let prev = null;

        // Case 1: Removing the head node (special case in a circular list)
        if (temp.data == data) {
            // Find the last node
            let lastNode = this.head;
            while (lastNode.next != this.head) {
                lastNode = lastNode.next;
            }

            // If there's only one node in the list
            if (this.head.next == this.head) {
                this.head = null;
            } else {
                // Update the head and make the last node point to the new head
                this.head = temp.next;
                lastNode.next = this.head;
            }
            return;
        }

        // Case 2: Removing nodes other than the head
        prev = temp;
        temp = temp.next;
        while (temp != this.head) {
            if (temp.data == data) {
                prev.next = temp.next;  // Remove the node by linking the previous node to the next
                return;
            }
            prev = temp;
            temp = temp.next;
        }

        console.log("No such element found");
    }

    // Print the circular linked list
    print() {
        if (this.head == null) {
            console.log("List is empty");
            return;
        }

        let temp = this.head;
        do {
            console.log(temp.data);
            temp = temp.next;
        } while (temp != this.head);  // Stop when the circular condition is met
    }
}

// Example usage
let cll = new CircularLinkedList();
cll.insert(10);
cll.insert(20);
cll.insert(30);
cll.insert(40);
cll.insert(50);

console.log("Original Circular List:");
cll.print();

console.log("\nRemoving 30:");
cll.remove(30);
cll.print();

console.log("\nRemoving 10 (head):");
cll.remove(10);
cll.print();

console.log("\nRemoving 50 (tail):");
cll.remove(50);
cll.print();
 */