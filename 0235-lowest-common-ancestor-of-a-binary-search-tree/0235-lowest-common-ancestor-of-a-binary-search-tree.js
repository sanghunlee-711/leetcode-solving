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
 이진탐색트리 이므로 왼쪽은 루트보다 작은거 오른쪽은 큰거
 이의 특성을 이용하면 됨
 T.C: O(N)
 S.C: O(1)
 */
var lowestCommonAncestor = function(root, p, q) {
    //모두 좌측트리에 있는 경우
      if(root.val > p.val && root.val > q.val) {
          return lowestCommonAncestor(root.left, p, q);
          
    //모두 우측에 있는 경우
      }else if(root.val < p.val && root.val < q.val) {
          return lowestCommonAncestor(root.right, p, q);
      }
    //모두좌측이나 우측이 아닌경우 해당 Root가 p,q의 부모노드가 되므로 답임
    return root;
};