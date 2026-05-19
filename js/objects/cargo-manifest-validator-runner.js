/* 
  Run in vscode with attach to keep running while debugging 

  First, run in terminal: 
  
  node --watch --inspect js\objects\cargo-manifest-validator-runner.js

  Then use launch profile:

    {
      "name": "Attach",
      "port": 9229,
      "request": "attach",
      "skipFiles": ["<node_internals>/**"],
      "type": "node"
    },

*/

import { processManifest } from "./cargo-manifest-validator.js";

function main() {
  processManifest({
    containerId: 1,
    destination: "Monterey, California, USA",
    weight: 831,
    unit: "lb",
    hazmat: false,
  });
  processManifest({
    containerId: 1,
    destination: "Santa Cruz",
    weight: 304,
    unit: "kg",
    hazmat: false,
  });
  processManifest({
    containerId: 0,
    destination: 405,
    weight: -84,
    unit: "pounds",
    hazmat: "no",
  });
  processManifest({
    containerId: 55,
    destination: "Carmel",
    weight: 400,
    unit: "lb",
    hazmat: false,
  });
}

setInterval(() => {
  main();
}, 2000);
