function are_isomorphic(graphA, graphB) {
  // First, check if the number of vertices and edges are identical.
  // If not, the graphs cannot be isomorphic.
  if (graphA.vertices.length !== graphB.vertices.length ||
      graphA.edges.length !== graphB.edges.length) {
      return false;
  }

  // Generate adjacency matrices for both graphs.
  const matrixA = generateAdjMatrix(graphA);
  const matrixB = generateAdjMatrix(graphB);

    //checks if the degreesequences are equal in the given graphs, meaning it calculates the degree of the vertices 
    //in the graph and puts them in ascending order and checks this for both the graphs
  const degreesA = calculateDegreeSequence(matrixA);
  const degreesB = calculateDegreeSequence(matrixB);
  if (!arraysAreEqual(degreesA, degreesB)) {
      return false;
  }

  // Generate all possible mappings of vertices and validate each one.
  const vertexPermutations = generatePermutations(graphA.vertices.length);
  for (const mapping of vertexPermutations) {
      if (isMappingCompatible(matrixA, matrixB, mapping)) {
          return true; // Graphs are isomorphic.
      }
  }

  return false; // Not isomorphic
}

// Builds an adjacency matrix from a graph representation.
function generateAdjMatrix(graph) {
  const size = graph.vertices.length;
  const matrix = Array.from({ length: size }, () => Array(size).fill(0));

  // Populate the matrix based on the edges in the graph.
  for (const [start, end] of graph.edges) {
      matrix[start][end] = 1;
      matrix[end][start] = 1; // Assume undirected graph.
  }

  return matrix;
}

// Computes the degree sequence (sorted list of vertex degrees) from an adjacency matrix.
function calculateDegreeSequence(adjMatrix) {
  const degrees = adjMatrix.map(row => row.reduce((total, value) => total + value, 0));
  return degrees.sort((a, b) => a - b);
}

// Checks if two arrays are identical in content.
function arraysAreEqual(arr1, arr2) {
  if (arr1.length !== arr2.length) return false;
  for (let i = 0; i < arr1.length; i++) {
      if (arr1[i] !== arr2[i]) return false;
  }
  return true;
}

// Generates all permutations of numbers from 0 to n-1.
function generatePermutations(size) {
  const results = [];
  const current = Array(size).fill(0).map((_, i) => i);

  function permute(index) {
      if (index === size) {
          results.push([...current]);
          return;
      }

      for (let i = index; i < size; i++) {
          [current[index], current[i]] = [current[i], current[index]];
          permute(index + 1);
          [current[index], current[i]] = [current[i], current[index]]; // Backtrack.
      }
  }

  permute(0);
  return results;
}

// Validates if a mapping between two adjacency matrices preserves adjacency relationships.
function isMappingCompatible(matrixA, matrixB, mapping) {
  const size = matrixA.length;

  for (let i = 0; i < size; i++) {
    for (let j = i; j < size; j++) {
      if (matrixA[i][j] !== matrixB[mapping[i]][mapping[j]]) {
        return false;
      }
    }
  }
  return true;
}
