class Node {
    constructor(value) {
        this.value = value;
        this.left = null;
        this.right = null;
    }
}

class Tree {
    constructor(node) {
        this.root = node;
    }
    preorder(currentNode, arr) { 
        arr.push(currentNode.value[2]);
        if (currentNode.left) this.preorder(currentNode.left, arr);
        if (currentNode.right) this.preorder(currentNode.right, arr);
        return arr;
    }
    postorder(currentNode, arr) { 
        if (currentNode.left) this.postorder(currentNode.left, arr);
        if (currentNode.right) this.postorder(currentNode.right, arr);
        arr.push(currentNode.value[2]);
        return arr;
    }
}

function solution(nodeinfo) {
    const graph = nodeinfo
                    .map((v, i) => [...v, i + 1])
                    .sort((a, b) => b[1] - a[1] || a[0] - b[0]);
    const tree = new Tree(new Node(graph[0]));

    for(let i = 1; i < graph.length; i++) {
        const [x, y, node] = graph[i];
        let now = tree.root;
        
        while(true) {
            const [nowX, nowY, nowNode] = now.value;
            if(x < nowX) {
                if(!now.left) {
                    now.left = new Node([x, y, node]);
                    break;
                } else {
                    now = now.left;
                }
            } else {
                if(!now.right) {
                    now.right = new Node([x, y, node]);
                    break;
                } else {
                    now = now.right;
                }
            }
        }
    }

    return [tree.preorder(tree.root, []), tree.postorder(tree.root, [])];
}