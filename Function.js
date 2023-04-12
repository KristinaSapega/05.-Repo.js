// 1
const puzzle = (a, b) => {
    if (a < b) {
      return a;
    } else {
      return b;
    }
  };
  
  console.log(puzzle(8, 4));