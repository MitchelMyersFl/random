console.log("Hello, there.")

setTimeout(function () {
  throw new Error("Not here.")
}, 1000)
