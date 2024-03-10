let image_container = document.querySelector(".image-container")
let image = document.querySelector(".image")

image.addEventListener("click",()=>{
    image_container.classList.toggle("active")
})