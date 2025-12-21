console.log("binary tree implementation");

class TreeNode {
    constructor(val){
        this.val = val;
        this.left = null;
        this.right = null;
    }
}

class Tree {
    constructor(){
        this.root = null;
    }

    add = (val) =>{
        let newNode = new TreeNode(val);
        if(this.root == null){
            this.root = newNode
            return
        }
        let que = [this.root];

        while(que.length > 0){
            let node = que.shift();

            if(node.left == null) {
                node.left = newNode;
                return;
            } else {
                que.push(node.left);
            }

            if(node.right == null) {
                node.right = newNode;
                return;
            } else {
                que.push(node.right);
            }
        }
    }

    preOrder = () => {
        if(this.root == null){
            return;
        }
        let ans = [];
        let st = [];
        st.push(this.root);
        while(st.length > 0){
            let node = st.pop();
            ans.push(node.val);
            if(node.right){
                st.push(node.right)
            }
            if(node.left){
                st.push(node.left)
            }
        }
        return ans;
    }
}

let tree = new Tree();

tree.add(2);
tree.add(4);
tree.add(8);
tree.add(3);
let ans = tree.preOrder()
console.log("ans", ans)