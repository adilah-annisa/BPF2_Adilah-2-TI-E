let canvas = document.getElementById("gameCanvas")
let ctx = canvas.getContext("2d")

let score = 0

let box = {
  x: 100,
  y: 100,
  size: 40
}

function drawBox(){

  // background
  ctx.fillStyle = "#87CEEB"
  ctx.fillRect(0,0,canvas.width,canvas.height)

  // kotak merah
  ctx.fillStyle = "red"
  ctx.fillRect(box.x,box.y,box.size,box.size)

  // border kotak
  ctx.strokeStyle = "black"
  ctx.strokeRect(box.x,box.y,box.size,box.size)

}

function moveBox(){

  box.x = Math.random() * (canvas.width - box.size)
  box.y = Math.random() * (canvas.height - box.size)

  drawBox()

}

canvas.addEventListener("click", function(event){

  let rect = canvas.getBoundingClientRect()

  let mouseX = event.clientX - rect.left
  let mouseY = event.clientY - rect.top

  if(
    mouseX > box.x &&
    mouseX < box.x + box.size &&
    mouseY > box.y &&
    mouseY < box.y + box.size
  ){

    score++
    document.getElementById("score").innerText = score

    moveBox()

  }

})

drawBox()

// pindah tiap 1.5 detik
setInterval(moveBox,1500)