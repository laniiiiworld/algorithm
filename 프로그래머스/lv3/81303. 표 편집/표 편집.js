class Node {
    constructor(value) {
        this.value = value;
        this.prev = null;
        this.next = null;
    }
}
class LinkedList {
    constructor() {
        this.head = null;
        this.tail = null;
    }
    append(value) {
        const newNode = new Node(value);
        if(this.head === null) {
            this.head = newNode;
            this.tail = newNode;
        } else {
            newNode.prev = this.tail;
            this.tail.next = newNode;
            this.tail = newNode;
        }
    }
    findPrevNode(value) {
        let prevNode = this.head;
        while(prevNode.next && prevNode.value < value) {
            prevNode = prevNode.next;
        }
        return prevNode.value < value? prevNode : prevNode.prev;
    }
    insert(node) {
        const prevNode = node.prev;
        const nextNode = node.next;
        if(prevNode) {
            prevNode.next = node;
        } else {
            this.head = node;
        }
        if(nextNode) {
            nextNode.prev = node;
        } else {
            this.tail = node;
        }
    }
    remove(removed) {
        const prevNode = removed.prev;
        const nextNode = removed.next;
        if(prevNode && nextNode){
            prevNode.next = nextNode;
            nextNode.prev = prevNode;
            return nextNode;
        } else if(prevNode) { //삭제할 노드가 tail인 경우
            prevNode.next = null;
            return prevNode;
        } else if(nextNode) { //삭제할 노드가 head인 경우
            nextNode.prev = null;
            // this.head = nextNode;
            return nextNode;
        }
    }
}
function solution(n, k, cmd) {
    const answer = [];
    const list = new LinkedList();
    const deleted = [];
    let selected = null;
    
    //answer 및 list 초기화
    for(let index = 0; index < n; index++) {
        answer.push('O');
        list.append(index);
        if(index === k) selected = list.tail; //첫 시작 노드 설정
    }
    
    for(const item of cmd) {
        const [command, countText] = item.split(' ');
        let x = Number(countText);
        
        if(command === 'U') { //현재 선택된 행에서 x칸 앞으로 이동
            while(x && selected.prev) {
                x -= 1;
                selected = selected.prev;
            }
        } else if(command === 'D') { //현재 선택된 행에서 x칸 뒤로 이동
            while(x && selected.next) {
                x -= 1;
                selected = selected.next;
            }
        } else if(command === 'Z') {
            const node = deleted.pop(); //가장 최근에 삭제된 행의
            list.insert(node); //바로 뒤에 가장 최근에 삭제된 행을 추가한다.
        } else if(command === 'C') {
            deleted.push(selected); //선택된 행을 삭제 history에 넣고
            selected = list.remove(selected); //삭제한 후, 선택된 행을 바꿔준다.
        }
    }
    
    deleted.forEach((node) => {
        answer[node.value] = 'X';
    });
    
    return answer.join('');
}