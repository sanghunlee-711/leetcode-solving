/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @param {TreeNode} p
 * @param {TreeNode} q
 * @return {TreeNode}
 */
//node.val이 p또는 q랑 같아도 체크 됨
// node.left가 p 또는 q랑 같아도 체크 됨
// node.right 가 p 또는 q랑 같아도 체크 됨
//lowest니까 .. 카운트를 잡아야하나 백트래킹이 필요할 것 같은데 어케 하누 -> 변수에 넣자
// 1. 루트부터 탐색
// 2. p또는 q가 node.val인 경우 mid라는 걸 True로 마킴
// 3. left또는 Right가 true를 반환해주면 둘 중 하나는 아래에서 찾아진 것
// 4. left, right, mid중 둘이상 true면 걔가 answer(LCA)
// 숫자로 판단 고고
var lowestCommonAncestor = function(root, p, q) {
    let answer = null;
    
    const dfs = function (node, p, q) {
        if(!node) return false;
        
        const leftTraverse = dfs(node.left, p, q);
        const rightTraverse = dfs(node.right, p ,q);
        const midResult = (node === p || node === q);
        
        const left = leftTraverse ? 1 : 0;
        const right = rightTraverse ? 1 : 0;
        const mid = midResult ? 1 : 0;
        const result = mid + left + right;
        
        if(result === 2) answer = node;
        
        return result > 0;
    }
    
    dfs(root, p, q);
    
    return answer;
};