// Import the cube.js library
importScripts('../node_modules/cubejs/lib/cube.js');
importScripts('../node_modules/cubejs/lib/solve.js');

// Initialize the solver. This is a one-time, expensive operation.
Cube.initSolver();

// Listen for messages from the main thread
self.onmessage = function(event) {
  // Get the cube state string from the message
  const cubeState = event.data;

  // Create a cube instance from the string
  const cube = Cube.fromString(cubeState);

  // Solve the cube
  const solution = cube.solve();

  // Send the solution back to the main thread
  self.postMessage(solution);
};