import "./ms-button.css"

class MsButton{
    render(){
        const button = document.createElement("button");
        button.innerHTML = "测试按键"
        button.classList.add("ms-button");
        const body = document.querySelector("body")
        button.onclick = () => {
            const p = document.createElement("p")
            p.innerHTML = "webpack5"
            p.classList.add("ms-text")
            body.appendChild(p)
        }
        body.appendChild(button)
    }
}
export default MsButton