module.exports = {
    entry: `./src/index.js`,
    output: {
      // 出力ファイル名
      filename: "elasticlunr.ja.js",
      library: "elasticlunr",
      libraryTarget: "umd",
      globalObject: "typeof self !== 'undefined' ? self : this",
    },
    mode: "production",
  };