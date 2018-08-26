// --- Directions
// Implement classes Node and Linked Lists
// See 'directions' document

class Node {
    constructor(data, next=null){
        this.data = data;
        this.next = next;
    }
}

class LinkedList {
    constructor(){
        this.head=null;
    }
    //insert an element as head & join its next to existing head or null(beginning case)
    insertFirst(data){
        //const node = new Node(data, this.head);
        //this.head = node; //simplified below in one line
        this.head = new Node(data, this.head);
    }
    size(){
        let counter =0;
        let node = this.head;
        while(node){
            counter++;
            node = node.next;
        }
        return counter;
    }
    getFirst(){
        return this.head;
    }
    getLast(){
        let node = this.head;
        if(!node){
            return null;
        }
        while(node.next){
            node = node.next;
        }
        return node;
    }
    clear(){
        this.head=null;
    }
    removeFirst(){
        if(!this.head){
            return null;
        }
        
        this.head = this.head.next;
    }
    removeLast(){
        if(!this.head){
            return null;
        }
        let node = this.head;
        let nextnode = node.next;
        if(!nextnode){
            this.head=null;
            return null;
        }
        while(nextnode){
            if(!nextnode.next){
                node.next = null;
            }
            node = node.next;
            nextnode = nextnode.next;
        }
    }
    insertLast(Data){
        if(!this.head){
            this.head = new Node(Data, null);
            return; 
        }
        let node = this.head;
        while(node.next){
            node = node.next;
        }
        node.next = new Node(Data,null);
    }
    getAt(spot){
        let node = this.head;
        let counter = 0;
        /*if(!node.next){
            return null;
        }*/
        while(node){
            if(counter === spot){
                return node;
            }
            counter++;
            node = node.next;
        }
        return null;
    }
    removeAt(index){
        let node=this.head;
        if(!node){
            this.head=null;
            return;
        }
        if(index===0){
            this.head=this.head.next;
            return;
        }
        let counter=0;
        const prev = this.getAt(index-1);
        if(!prev||!prev.next){
            return;
        }
        prev.next = prev.next.next;
    }
    insertAt(data, index){
        if(!this.head){
            this.head = new Node(data);
            return;
        }
        if(index === 0){
            this.head = new Node(data, this.head);
            return;
        }
        let prev = this.getAt(index-1)||this.getLast();
        let currnode = prev.next;
        let newNode = new Node(data,currnode);
        prev.next = newNode;
    }
}

//const list = new LinkedList();
//list.head = new Node(10);
//list.insertFirst(15);
//list.size();

module.exports = { Node, LinkedList };
