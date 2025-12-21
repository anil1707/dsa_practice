console.log("linked list implementation");

 class Node {
    constructor(val){
        this.val = val
        this.next = null
    }
 }

 class LinkedList {
    constructor(){
        this.head = null;
        this.size = 0;
    }

    addLast = (val) => {
        let newNode = new Node(val);
        console.log("newNode", newNode)
        console.log("this", this)
        if(this.head == null){
            this.head = newNode
        } else {
            let temp = this.head;
            while(temp.next !== null){
                temp = temp.next
            }
            temp.next = newNode;
        }
    }

    addFirst = (val) =>{
        let newNode = new Node(val);
        if(this.head == null) {
            this.head = newNode;
        } else {
            let temp = this.head;
            this.head = newNode;
            newNode.next = temp;
        }
    }

    deleteLast = () => {
        let temp = this.head;
        let prev = null;
        while(temp.next != null){
            prev = temp;
            temp = temp.next;
        }
        prev.next = null;
    }

    deleteFirst = () => {
        let temp = this.head.next;
        this.head = temp;
    }

    print = () => {
        let temp = this.head;
        while(temp !== null ){
            console.log(temp.val);
            temp = temp.next;
        }
    }



 }





 let list = new LinkedList();

 list.addLast(4)
 list.addLast(5);
 list.addLast(6);
 list.addFirst(7)
 list.addLast(9)
 list.addLast(10);
 list.deleteLast();
 list.deleteFirst();
 list.print()

 console.log("head2", list)