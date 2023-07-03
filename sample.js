console.log("Hello, there.")

setTimeout(function () {
  throw new Error("Not here.")
}, 1000)

const button = document.getElementById("mm-test-button")
if (button) {
  button.addEventListener("click", function () {
    throw new Error("Not there.")
  })
  console.log("Button found")
} else {
  console.log("Button not found")
}
