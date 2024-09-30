// let names = ["likith", "bharath", "arjun", "bhuvan", "sujan"];

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

/* class node{

    
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
        while(temp!=null){
        console.log(temp.data);
        temp=temp.next;
        }
    }

    remove(val){

        if(this.head==null){
            console.log("List empty");
            return;
        }

        if(this.head.data==val){
            this.head=this.head.next;
            return
        }

        let curr=this.head;
        let prev=null;
        
        while(curr!=null){
            
            if(curr.data==val){
                // console.log(val)
                if(curr==this.head){
                    this.head=this.head.next;
                    return;
                }

                prev.next=curr.next;
                return;
            }
            prev=curr;
            curr=curr.next;
        }
    }

}

let aa = new ll();
aa.insert(10);
aa.insert(20);
aa.insert(30);
aa.insert(40);
aa.insert(50);
aa.print();
console.log("=================")
aa.remove(10);
aa.print();
console.log("=================")
aa.remove(20);
aa.print();
console.log("================")
// aa.remove(10);
// aa.print();
// console.log("================")
aa.remove(40);
aa.print();
console.log("================")
// aa.remove(50);
// aa.print();
// console.log("================")
aa.remove(30);
aa.print();
console.log("================")
aa.remove(50);
aa.print();
console.log("================")
aa.remove(10);
aa.print();
console.log("================") */
// aa.print();
// console.log("================")
// aa.insert(11);
// aa.print();
// console.log("================")
// aa.remove(10);
// aa.print();
// console.log("================")
// aa.remove(11);
// console.log("================")
// aa.print();
// // console.log("================")
// // aa.remove(10);
// console.log("================")
// aa.print();
// console.log("================")
// aa.remove(30);
// console.log("================")
// aa.print();
// console.log("================")
// aa.insert(11);
// aa.print();
// console.log("================")
// aa.remove(30);
// aa.print();
// console.log("================")
// aa.print();
// console.log("================")
// aa.remove(11);
// console.log("================")
// aa.print();

 class Node{
    prev=null;
    data=null;
    next=null;

    constructor(val){
        this.data=val;
    }

}

/*class ll{

    head=null;

    insert(val){
        let node = new Node(val);
        if(this.head==null){
              this.head=node;
              node.next=null;  
        }
        
        let temp=this.head;
        while(temp.next!=null){
            temp=temp.next;
        }
        temp.next=node;
        node.next=null

    }

    printing(temp){
        if(temp==null){
            return;
        }
        console.log(temp.data);
        this.printing(temp.next)
    }

    print(){
        let temp=this.head;
        this.printing(temp)
    }

    remove(val){

       if(this.head==null){
            console.log("No elements");
            return;    
       }

       let temp=this.head;
       let prev=null;
       while(temp!=null){
        if(temp.data==val){
            if(prev!=null){
            prev.next=temp.next;
            return;
            }
            else{
                this.head=this.head.next;
                return;
            }

        }
        prev=temp;
        temp=temp.next;
        
       }

        Promise.resolve("element not found").then((x)=>console.log(x));

    }

    insertIndex(ele, val){
        let node = new Node(val);

        if(this.head == null)
            return;

        let curr = this.head;
            while(curr!=null){
                if(curr.data==ele){
                    let temp = curr.next;
                    curr.next=node;
                    node.next=temp;
                    return;
                }
                curr=curr.next;
                
            }
            console.log("element not found");
    }

}


let a = new ll();
a.insert(10);
a.insert(20);
a.insert(30);
a.insert(40);
a.insert(50);
console.log(a);
a.print();
console.log("===================");
// a.remove(20);
// a.remove(30);
// a.remove(40);

// a.remove(10);
// a.remove(10);
// a.remove(50);

a.print();

console.log("----------------------");
a.insertIndex(30, 11);
a.insertIndex(60, 22)

a.print();
 */


/* class stack{

    head=null;
    arr = [];
    push(ele){
        
        this.arr.push(ele);
        this.head=this.arr[this.arr.length-1];
        console.log(this.head);
    }

    pop(){

        this.arr.pop();
        this.head=this.arr[this.arr.length-1];
        console.log(this.head);

    }

}

let a = new stack();

a.push(10);console.log("----------")

a.push(20);console.log("----------")

a.push(30);console.log("----------")

a.push(40);console.log("----------")

a.push(50);console.log("----------")


console.log(a);

a.pop();
a.pop();
a.pop();
a.pop();
a.pop();
console.log(a);
 */

/* class ddl{
head=null;
tail=null;
    insert(ele){

        let a = new Node(ele);
        if(this.head==null && this.tail==null){
            this.head=this.tail=a;
            a.prev=a.next=null;
            return;
        }

        let curr = this.head;
            
        while(curr.next!=null){
            curr = curr.next;
        }

        curr.next=a;
        a.prev=curr;
        a.next=null;
        this.tail=a;
    }

    print(){
        if(this.head==null)
        {
            console.log("nothing")
            return
        }

        let curr=this.head;
        while(curr!=null){
            console.log(curr.data);
            curr=curr.next;
        }

    }
}

let a = new ddl();
a.insert(10);
a.insert(20);
a.insert(30);
a.insert(40);
a.insert(50);
a.print();

console.log("---------------------------------------"); */

// let bb = Promise.reject("hello")
// let aa = Promise.resolve("s")

// Promise.allSettled([bb, aa]).then((x)=>console.log(x)).catch((x)=>console.log(x)).finally((x)=>console.log("abc"));


// let a = [1,6,2,4,8,2,45,1,5,5,];

// let b =a.findIndex((x)=>x>53);

// console.log(a);
// console.log(b);

// console.log(...a);    

/* let a = "Hello World";
let b = Array.from(a);
let c = [];
b.forEach((x, y)=>{if(x.charCodeAt(0)>=65 && x.charCodeAt(0)<=90){
c.push(y);
}})

console.log(c); */


/* function bubbleSort(arr) {
    let n = arr.length;
    for (let i = 0; i < n - 1; i++) {
        for (let j = 0; j < n - i - 1; j++) {
            if (arr[j] > arr[j + 1]) {
                // Swap
                [arr[j], arr[j + 1]] = [arr[j + 1], arr[j]];
            }
        }
    }
    return arr;
} */



/* function a(b, c){

    if(b==0)
        return;
    
    a(b-1, c-1)
    console.log(b +""+c +" First");
    console.log("-----")
    a(b-1, c-1)
    console.log(b +""+c+" Second");

}

a(2, 2) */

function sort(a,arr){

    if(a<arr[arr.length/2]){
        if(a==arr.length-1)
            return arr.length-1

        sort(a, arr.slice(0,(arr.length/2)+1))
    }    

    else{
        sort(a, arr.slice((arr.length/2)+1))
        }

}

let arr=[1,2,3,4,5,6,7,8,9];
console.log(sort(7, arr));