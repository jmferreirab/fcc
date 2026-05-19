/* 
Build a Cargo Manifest Validator
User stories: https://www.freecodecamp.org/learn/javascript-v9/lab-cargo-manifest-validator/lab-cargo-manifest-validator
*/

function normalizeUnits(manifest) {
  const newManifest = { ...manifest };

  if (manifest.unit === "lb") {
    newManifest.weight = manifest.weight * 0.45;
    newManifest.unit = "kg";
  }

  return newManifest;
}

function validateManifest(manifest) {
  const requiredProps = {
    containerId: {
      type: Number.isInteger,
      minimum: (x) => x > 0,
    },
    destination: {
      type: (x) => typeof x === "string",
      empty: (x) => x.trim() !== "",
    },
    weight: {
      type: (x) => typeof x === "number",
      minimum: (x) => x > 0,
    },
    unit: {
      type: (x) => typeof x === "string",
      options: (x) => ["lb", "kg"].includes(x),
    },
    hazmat: {
      type: (x) => typeof x === "boolean",
    },
  };

  const result = {};

  // Iter over schema
  for (const [prop, rules] of Object.entries(requiredProps)) {
    if (!Object.hasOwn(manifest, prop)) {
      result[prop] = "Missing";
      continue;
    }

    // Invoke the functions defined in each rule for this property
    for (const rule in rules) {
      if (!rules[rule](manifest[prop])) {
        result[prop] = "Invalid";
        break;
      }
    }
  }

  return result;
}

function processManifest(manifest) {
  const result = validateManifest(manifest);

  if (Object.keys(result).length === 0) {
    const manifestNorm = normalizeUnits(manifest);
    console.log(`Validation success: ${manifest.containerId}`);
    console.log(`Total weight: ${manifestNorm.weight} kg`);
  } else {
    console.log(`Validation error: ${manifest.containerId}`);
    console.log(result);
  }
}

export { processManifest, validateManifest, normalizeUnits };
