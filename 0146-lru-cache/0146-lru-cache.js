class Node {
    constructor(key, val) {
        this.key = key
        this.val = val;
        this.prev = null;
        this.next = null;
    }
}


/**
 * @param {number} capacity
 */
var LRUCache = function(capacity) {
    this.capacity = capacity;
    this.cache = new Map(); // map의 value가 가리키는 것은 노드라고 하자
    this.left = new Node(0, 0);
    this.right = new Node(0, 0);
    //왼쪽은 least, 오른쪽은 most 로 세팅
    this.left.next = this.right;
    this.right.prev = this.left;
};


// 중간에 존재하는 노드를 지움
LRUCache.prototype.remove = function(node) {
    const prev = node.prev;
    const next = node.next;
    prev.next = next;
    next.prev = prev;
}

// 중간에 노드를 삽입함(가장 오른쪽 뒤편)
LRUCache.prototype.insert = function(node) {
    const prev = this.right.prev;
    prev.next = node;
    node.prev = prev;
    node.next = this.right;
    this.right.prev = node;
}
/** 
 * @param {number} key
 * @return {number}
 */
LRUCache.prototype.get = function(key) {
    if(this.cache.has(key)) {
        const node = this.cache.get(key);
        this.remove(node);  //기존 Linked list위치에서 제거
        this.insert(node); //가장 오른쪽(MRU)으로 이동

        return node.val;
    }

    return -1;
};

/** 
 * @param {number} key 
 * @param {number} value
 * @return {void}
 */
LRUCache.prototype.put = function(key, value) {
    if(this.cache.has(key)) this.remove(this.cache.get(key));
    const newNode = new Node(key, value);
    this.cache.set(key, newNode);
    this.insert(newNode);

    if(this.cache.size > this.capacity) {
        const lru = this.left.next;
        this.remove(lru);
        this.cache.delete(lru.key);
    }
};

/** 
 * Your LRUCache object will be instantiated and called as such:
 * var obj = new LRUCache(capacity)
 * var param_1 = obj.get(key)
 * obj.put(key,value)
 */