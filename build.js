const { build, buildSync, serve } = require("esbuild")
const html = require("./html-plugin");


async function runBuild() {
  const result = await build({
    absWorkingDir: process.cwd(),
    entryPoints: ["./src/index.jsx"],
    outdir: "dist",
    bundle: true,
    format: "esm",
    external: [],
    splitting: true,
    sourcemap: true,
    metafile: true,
    minify: false,
    watch: false,
    write: true,
    loader: {
      '.png': 'base64',
    },
    plugins: [html()],
  });
  console.log(result)

  // serve(
  //   {
  //     port: 8000,
  //     servedir: './dist'
  //   },
  //   {
  //     absWorkingDir: process.cwd(),
  //     entryPoints: ["./src/index.jsx"],
  //     outdir: "dist",
  //     bundle: true,
  //     format: "esm",
  //     external: [],
  //     splitting: true,
  //     sourcemap: true,
  //     metafile: true,
  //     minify: false,
  //     watch: false,
  //     write: true,
  //     loader: {
  //       '.png': 'base64',
  //     },
  //     plugins: [html()]
  //   }
  // ).then((server) => {
  //   console.log("HTTP Server starts at port", server.port);
  // })
}

runBuild()