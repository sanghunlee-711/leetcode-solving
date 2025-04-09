class TrieNode {
    constructor() {
        this.children = new Map() 
        this.isEnd = false;
    }

}

var WordDictionary = function() {
    this.root = new TrieNode()
};

/** 
 * @param {string} word
 * @return {void}
 */
WordDictionary.prototype.addWord = function(word) {
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
WordDictionary.prototype.search = function(word) {
    return this.dfs(word, 0, this.root);


};

WordDictionary.prototype.dfs = function (word, j, root) {
    let curr = root;

    for(let i = j; i < word.length; i++) {
        const c = word[i];

        if(c === ".") {
            for(const child of curr.children.values()) {
                if(this.dfs(word, i + 1, child)) return true;
            }
            return false;
        } else {
            if(!curr.children.has(c)) return false;
            curr = curr.children.get(c);
        }

        
    }
    return curr.isEnd;
}

/** 
 * Your WordDictionary object will be instantiated and called as such:
 * var obj = new WordDictionary()
 * obj.addWord(word)
 * var param_2 = obj.search(word)
 */