import image from "./DJI_0121.JPG"
import "./ms-img.css"

class MsImage {
    render(){
        const img = document.createElement("img");
        img.src = image
        img.alt = "图片"
        img.classList.add("ms-image")
        const body = document.querySelector("body")
        body.appendChild(img)
    }
}
export default MsImage