let box1 = document.querySelector(".box1")
let box2 = document.querySelector(".box2")
let box3 = document.querySelector(".box3")
let img1 = document.querySelector('.img1')
let img2 = document.querySelector('.img2')
let img3 = document.querySelector('.img3')

let x;
let y;



function showCoords(event) {
     x = event.clientX;
     y = event.clientY;
    let text = "X coords: " + x + ", Y coords: " + y;
    // console.log(text);
  }

  const rect = box1.getBoundingClientRect();
  const offsetX = window.event.clientX - rect.left;
  const offsetY = window.event.clientY - rect.top;


box1.addEventListener("mousemove",function(){
    img1.style.display = "block"
    offsetX = x
    offsetY = y

    showCoords(event)
})








box1.addEventListener("mouseleave",function(){
    img1.style.display = "none"
})

box2.addEventListener("mousemove",function(){
    img2.style.display = "block"
})
box2.addEventListener("mouseleave",function(){
    img2.style.display = "none"
})
box3.addEventListener("mousemove",function(){
    img3.style.display = "block"
})
box3.addEventListener("mouseleave",function(){
    img3.style.display = "none"
})




