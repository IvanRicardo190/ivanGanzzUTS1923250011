var colors = ["blue", "yellow", "red", "green", "orange"]
var currentColor = 0
var lis = document.querySelectorAll("#halo h1")

var text = ["web", "my", "to", "Welcome"]
var currentText = 0
var list = document.querySelectorAll("#halo h2")

function changeColor() {
  --currentColor
  if (currentColor < 0) currentColor = colors.length -1
  for (var i = 0; i < lis.length; i++) {
    lis[i].style.color = colors[(currentColor +i) % colors.length]
  }
}

function changeText() {
  --currentText
  if (currentText < 0) currentText = text.length -1
  for (var i = 0; i < list.length; i++) {
    list[i].innerHTML = text[(currentText +i) % text.length]
  }
}

window.setInterval(changeColor, 1000)
window.setInterval(changeText, 1000)