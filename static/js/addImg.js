import imgs from "../static/DJI_0121.JPG"

function addImages(){
    const img = document.createElement("img")
    img.alt = "图片"
    img.width = 300
    img.src = imgs
    const body = document.querySelector("body")
    body.appendChild(img)
}

export default addImages