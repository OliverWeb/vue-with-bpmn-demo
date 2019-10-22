const path = require('path')

function resolve (dir) {
  return path.join(__dirname, dir)
}

module.exports = {
  resolve: {
    alias: {
      '@': resolve('src'),
      "@component": path.join(__dirname, "./src/components"),
      "@bpmn": path.join(__dirname, "./src/components/bpmn"),
      "@index": path.join(__dirname, "./src/pages/index")
    }
  }
}


