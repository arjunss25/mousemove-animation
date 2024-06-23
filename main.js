let box1 = document.querySelector(".box1")
let box2 = document.querySelector(".box2")
let box3 = document.querySelector(".box3")
let img1 = document.querySelector('.img1')
let img = document.querySelectorAll('.img')
let img2 = document.querySelector('.img2')
let img3 = document.querySelector('.img3')



box1.addEventListener("mousemove",function(e){
    img1.style.display = "block"
    offsetX = e.clientX
    offsetY = e.clientY
})

function imageAnime(){
     img.forEach(function(img,index){
        img.style.left = offsetX + "px"
        img.style.top = offsetY + "px"
     })
}





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




