class TrieNode {
    constructor() {
        this.isEnd = false;
        this.children = new Map();
    }
}

var Trie = function() {
    this.root = new TrieNode();
};

/** 
 * @param {string} word
 * @return {void}
 */
Trie.prototype.insert = function(word) {
    let curr = this.root;
    for(let c of word) {
        if(!curr.children.has(c)) {
            curr.children.set(c, new TrieNode());
        }
        curr = curr.children.get(c);
    }
    curr.isEnd = true;
};

/** 
 * @param {string} word
 * @return {boolean}
 */
Trie.prototype.search = function(word) {
    let curr = this.root;

    for(let c of word) {
        if(!curr.children.has(c)) return false;
        curr = curr.children.get(c);
    }
    return curr.isEnd;
};

/** 
 * @param {string} prefix
 * @return {boolean}
 */
Trie.prototype.startsWith = function(prefix) {
    let curr = this.root;

    for(let c of prefix) {
        if(!curr.children.has(c)) return false;
        curr = curr.children.get(c);
    }
    return true;
};

/** 
 * Your Trie object will be instantiated and called as such:
 * var obj = new Trie()
 * obj.insert(word)
 * var param_2 = obj.search(word)
 * var param_3 = obj.startsWith(prefix)
 */