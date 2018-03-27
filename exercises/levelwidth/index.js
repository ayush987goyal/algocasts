// --- Directions
// Given the root node of a tree, return
// an array where each element is the width
// of the tree at each level.
// --- Example
// Given:
//     0
//   / |  \
// 1   2   3
// |       |
// 4       5
// Answer: [1, 3, 2]

function levelWidth(root) {
  const result = [0];
  const queue = [root, 's'];

  while (queue.length > 1) {
    const node = queue.shift();

    if (node === 's') {
      queue.push(node);
      result.push(0);
    } else {
      queue.push(...node.children);
      result[result.length - 1] += 1;
    }
  }

  return result;
}

module.exports = levelWidth;
