//? Q:63. Write a function to find the number of islands in a 2D grid.

//? An island is surrounded by water and is formed by connecting adjacent
//  lands horizontally or vertically.

//* Constraints:
//? You may assume all four edges of the grid are all surrounded by water.


// const numIslands = (grid) => {};
// console.log(numIslands([
//   ["1","1","1","1","0"],
//   ["1","1","0","1","0"],
//   ["1","1","0","0","0"],
//   ["0","0","0","0","0"]
// ])); // Output: 1    


// My solution (DFS)
const numIslands = (grid) => {
    if (!grid || grid.length === 0) {
        return 0;
    }

    let numIslands = 0;
    const rows = grid.length;
    const cols = grid[0].length;

    const dfs = (r, c) => {
        if (r < 0 || r >= rows || c < 0 || c >= cols || grid[r][c] === '0') {
            return;
        }

        grid[r][c] = '0'; // Mark as visited

        dfs(r + 1, c);
        dfs(r - 1, c);
        dfs(r, c + 1);
        dfs(r, c - 1);
    };

    for (let r = 0; r < rows; r++) {
        for (let c = 0; c < cols; c++) {
            if (grid[r][c] === '1') {
                numIslands++;
                dfs(r, c);
            }
        }
    }

    return numIslands;
};

console.log(numIslands([
  ["1","1","1","1","0"],
  ["1","1","0","1","0"],
  ["1","1","0","0","0"],
  ["0","0","0","0","0"]
])); // Output: 1

//step by step explanation of example 1:
// 1. Start from the top-left corner (0,0) and find the first '1'.
// 2. Perform DFS to mark all connected '1's as visited (change them to '0').
// 3. Count this as one island.
// 4. Continue scanning the grid until all cells are processed.

console.log(numIslands([
  ["1","1","0","0","0"],
  ["1","1","0","0","0"],
  ["0","0","1","0","0"],
  ["0","0","0","1","1"]
]));
// Output: 3

//step by step explanation of example 2:
// 1. Start from the top-left corner (0,0) and find the first '1'.
// 2. Perform DFS to mark all connected '1's as visited (change them to '0').
// 3. Count this as one island.
// 4. Continue scanning the grid and find the next '1' at (2,2).
// 5. Perform DFS again to mark it as visited and count as the second island.
// 6. Continue scanning and find the next '1' at (3,3).
// 7. Perform DFS to mark connected '1's (3,3) and (3,4) as visited and count as the third island.
// 8. All cells are processed, resulting in a total of 3 islands.