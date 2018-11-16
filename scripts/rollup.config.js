const xdInstall = require("@adobe/xdpm/commands/install");
const path = require("path");

const rollup = require("rollup");

// see below for details on the options
const inputOptions = {
  input: "src/main.js",
  external: ["scenegraph"]
};
const outputOptions = {
  file: path.resolve(__dirname, "./dist", "bundle.js"),
  format: "cjs"
};

async function build() {
  // create a bundle
  const bundle = await rollup.rollup(inputOptions);

  console.log(bundle.imports); // an array of external dependencies
  console.log(bundle.exports); // an array of names exported by the entry point
  console.log(bundle.modules); // an array of module objects

  // generate code and a sourcemap
  const { code, map } = await bundle.generate(outputOptions);

  // or write the bundle to disk
  await bundle.write(outputOptions);

  const xdOptions = {
    overwrite: true,
    json: true
  };

  // xdInstall(xdOptions, "./dist");
}

build();
