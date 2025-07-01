const Cube = require('cubejs');
Cube.initSolver();

const cubeState = 'BLLLULRUBBBRRRULLLRUUBFFUUBFFDRDDFDDUFDDLDLBRFBDRBRUFF';

async function solve() {
  // 不需要 asyncInit
  const randomCube = Cube.random();

  const cube = new Cube(randomCube);

  const asString  = cube.asString()

  console.log('asString===>', asString, asString.length);
  // const solution = await cube.solve();

  // console.log(`Solution steps:\n${solution}`);
}

solve().catch(console.error);
