import "./ms-head.scss"

class MsHead{
    render(){
        const h1 = document.createElement("h1");
        h1.innerHTML = "一月又一月"
        const body = document.querySelector("body")
        body.appendChild(h1)
    }
}
export default MsHead