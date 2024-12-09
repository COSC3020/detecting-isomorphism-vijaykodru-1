const fs = require('fs');
const assert = require('assert');

eval(fs.readFileSync('./code.js') + '');

const graph1 = {
    vertices: [0, 1, 2, 3, 4],
    edges: [
        [0, 1],
        [1, 2],
        [2, 3],
        [3, 4],
        [4, 0],
    ],
};

const graph2 = {
    vertices: [0, 1, 2, 3, 4],
    edges: [
        [0, 2],
        [2, 4],
        [4, 1],
        [1, 3],
        [3, 0],
    ],
};

const graph3 = {
    vertices: [],
    edges: [],
};

const graph4 = {
    vertices: [0, 1, 2],
    edges: [
        [0, 1],
        [1, 2],
    ],
};

const graph5 = {
    vertices: [0, 1, 2, 3],
    edges: [
        [0, 1],
        [1, 2],
        [2, 3],
        [3, 0],
    ],
};

const graph6 = {
    vertices: [0, 1, 2, 3],
    edges: [
        [0, 2],
        [2, 3],
        [3, 1],
        [1, 0],
    ],
};

const graph7 = {
    vertices: [0, 1, 2],
    edges: [],
};

const graph8 = {
    vertices: [0],
    edges: [],
};

const graph9 = {
    vertices: [0, 1, 2],
    edges: [
        [0, 1],
        [1, 2],
        [2, 0],
    ],
};

const graph10 = {
    vertices: [0, 1, 2, 3],
    edges: [
        [0, 2],
        [0, 3],
        [1, 2],
        [1, 3],
    ],
};

const graph11 = {
    vertices: [],
    edges: [],
};

// Test cases using assert statements
assert.strictEqual(are_isomorphic(graph1, graph2), true, 'Test Case 1 failed');
assert.strictEqual(are_isomorphic(graph3, graph4), false, 'Test Case 2 failed');
assert.strictEqual(are_isomorphic(graph1, graph4), false, 'Test Case 3 failed');
assert.strictEqual(are_isomorphic(graph5, graph6), true, 'Test Case 4 failed');
assert.strictEqual(are_isomorphic(graph5, graph1), false, 'Test Case 5 failed');
assert.strictEqual(are_isomorphic(graph7, graph8), false, 'Test Case 6 failed');
assert.strictEqual(are_isomorphic(graph8, graph8), true, 'Test Case 7 failed');
assert.strictEqual(are_isomorphic(graph9, graph5), false, 'Test Case 8 failed');
assert.strictEqual(are_isomorphic(graph9, graph9), true, 'Test Case 9 failed');
assert.strictEqual(are_isomorphic(graph10, graph4), false, 'Test Case 10 failed');
assert.strictEqual(are_isomorphic(graph11, graph11), true, 'Edge Case 1 failed');
assert.strictEqual(are_isomorphic(graph11, graph1), false, 'Edge Case 2 failed'); 

//console.log("All tests passed!");
