// let names = ["likith", "bharath", "arjun", "bhuvan", "sunjan"];

// console.log(names[0]);

// names.push("newName");

// names.unshift("firstName");

// let lastRemoved = names.pop();

// let firstRemoved = names.shift();

// let arjunIndex = names.indexOf("arjun");

// names.forEach(name => console.log(name));

// let longNames = names.filter(name => name.length > 5);

// let upperNames = names.map(name => name.toUpperCase());

// let greeting = "Hello, World!";

// console.log(greeting[0]);

// console.log(greeting.length);

// let worldPos = greeting.indexOf("World");

// console.log(greeting.toUpperCase());

// console.log(greeting.toLowerCase());

// let spaced = "   Hello!   ";

// console.log(spaced.trim());

// let newGreeting = greeting.replace("World", "JavaScript");

// let wordsArray = greeting.split(", ");



/* function myStack(size){

    this.a=0;
    this.b=[];
    this.push=(ele)=>{
        if(this.b.length<size)
        this.b.unshift(ele);
    else
        console.log("stack full")
    }

    this.pop=()=>{
        if(this.b.length!=0)
        return this.b.shift();
        
        else
        return "stack empty";
    }

    

}

let m = new myStack(3);
m.push(1);
m.push(2);
m.push(3);


console.log(m.b);
console.log(m.pop());
console.log(m.pop());
console.log(m.pop());
console.log(m.pop());
console.log(m.b);
console.log(m.size); */

class node{

    
    data;
    next;

    constructor(data){
        this.data=data;
    }
}

class ll{
    head;
    constructor(){
     
    }
    
    insert(ele){
        let abc = new node(ele);
        if(this.head == null){
            abc.next=null;
            this.head=abc;
        }
        else{
            let temp=this.head;
            while(temp.next!=null){
            temp=temp.next;
            }
            temp.next=abc;
            abc.next=null;
        }
    }

    print(){

        let temp=this.head;
        while(temp.next!=null){
        console.log(temp.data);
        temp=temp.next;
        }
        console.log(temp.data);
    }

}

let aa = new ll();
aa.insert(10);
aa.insert(20);
aa.insert(30);
aa.insert(40);
aa.insert(50);
aa.print();

