// Node class:-
class Node {
    constructor(data) {
      this.data = data;                         // Value stored in the node
      this.left = null;                         // Reference to left child
      this.right = null;                        // Reference to right child
    }
  }
  
// Binary Search Tree class
  class BinarySearchTree {
    constructor() {
      this.root = null;                          // Root node
    }
  
    // Insert
    insert(data) {
      const newNode = new Node(data);            // new node with value
  
      if (this.root === null) {
        this.root = newNode;                     // If the tree is empty, the new node becomes the root
      } else {
        this.insertNode(this.root, newNode);     // Find the correct place for the new node
      }
    }
  
    // Find where to insert the new node
    insertNode(node, newNode) {
      if (newNode.data < node.data) {
            // Go to the left if the new value is smaller
        if (node.left === null) {
          node.left = newNode;  // If left is empty, place the new node here
        } else {
          this.insertNode(node.left, newNode);  // Otherwise, repeat the process for the left subtree
        }
      } else {
        // Go to the right if the new value is larger
        if (node.right === null) {
          node.right = newNode;  // If right is empty, place the new node here
        } else {
          this.insertNode(node.right, newNode);  // Otherwise, repeat the process for the right subtree
        }
      }
    }
  
    // Search for a node with a given value
    search(node, data) {
      if (node === null) {
        return null;  // If we reach a null node, the value isn't in the tree
      }
  
      if (data === node.data) {
        return node;  // If the value matches the current node, we've found it
      }
  
      // Recursively search in the left or right subtree based on the value
      if (data < node.data) {
        return this.search(node.left, data);            // Search in the left subtree for smaller values
      } else {
        return this.search(node.right, data);           // Search in the right subtree for larger values
      }
    }
  
    // In-order traversal (Left -> Root -> Right)
    inOrder(node) {
      if (node !== null) {
        this.inOrder(node.left);                         // Visit the left subtree first
        console.log(node.data);                          // Print the current node
        this.inOrder(node.right);                        // Then visit the right subtree
      }
    }
  
    // Pre-order traversal (Root -> Left -> Right)
    preOrder(node) {
      if (node !== null) {
        console.log(node.data);                           // Print the current node first
        this.preOrder(node.left);                         // Then visit the left subtree
        this.preOrder(node.right);                        // Finally, visit the right subtree
      }
    }
  
    // Post-order traversal (Left -> Right -> Root)
    postOrder(node) {
      if (node !== null) {
        this.postOrder(node.left);                       // Visit the left subtree first
        this.postOrder(node.right);                      // Then visit the right subtree
        console.log(node.data);                          // Finally, print the current node
      }
    }
  
    // Get the root node of the tree
    getRootNode() {
      return this.root;  // Return the tree's root node
    }
  }
  
  // Create a new binary search tree
  const bst = new BinarySearchTree();
  
  // Insert values
  bst.insert(15);
  bst.insert(25);
  bst.insert(10);
  bst.insert(7);
  bst.insert(22);
  bst.insert(17);
  bst.insert(13);
  bst.insert(5);
  bst.insert(9);
  bst.insert(27);
  
  // Get the root node of the tree
  const root = bst.getRootNode();
  
  // Perform an in-order traversal to print the tree in sorted order
  console.log("In-order Traversal:");
  bst.inOrder(root);
  
  // Perform a pre-order traversal to print the tree starting with the root
  console.log("\nPre-order Traversal:");
  bst.preOrder(root);
  
  // Perform a post-order traversal to print the tree, visiting root last
  console.log("\nPost-order Traversal:");
  bst.postOrder(root);
  
  // Search for a specific node
  const searchResult = bst.search(root, 10);
  if (searchResult) {
    console.log("\nNode with value 10 found.");
  } else {
    console.log("\nNode with value 10 not found.");
  }
  