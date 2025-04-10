class UnionFind {
    constructor(nodes) {
        this.par = new Map(); // 각 노드의 부모 저장
        this.rank = new Map(); // 트리의 랭크를 저장

        for(const node of nodes) {
            this.par.set(node, node);
            this.rank.set(node, 0);
        }
    }

    find(x) {
        if(this.par.get(x) !== x) {
            //높이 압축을 위함
            this.par.set(x, this.find(this.par.get(x)));
        }
        return this.par.get(x);
    }

    union(x,y) {
        const px = this.find(x);
        const py = this.find(y);

        if(px === py) return false;

        const rx = this.rank.get(px);
        const ry = this.rank.get(py);


        //병합(하나의트리로)
        if(rx > ry) this.par.set(py, px);
        else if(rx < ry) this.par.set(px, py);
        else {
            this.par.set(px, py);
            this.rank.set(py, ry + 1);
        }

        return true;
    }
}


/**
 * @param {number[][]} edges
 * @return {number[]}
 */
var findRedundantConnection = function(edges) {

    //union find는 서로소 노드 집합으로 시작해야하므로 중복 제거
    const nodes = new Set();
    for(const [a, b] of edges) {
        nodes.add(a);
        nodes.add(b);
    }

    const un = new UnionFind(nodes);

    //각 서로 동일 부모를 가져 사이클이 있는지 확인
    for([a,b] of edges) {
        if(!un.union(a,b)) return [a,b]

    }
    return null
}; 