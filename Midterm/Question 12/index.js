// If we run `node .\index.js`, we will see no output. However, if we run `node .\index.js --dry-run`, we will see the statement provided below

if (process.argv.includes("--dry-run")) {
  console.log(
    "Deployment will not physically deploy the codebase, only simulate it."
  );
}
