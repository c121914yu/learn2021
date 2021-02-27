import "./ms-head.scss"

class MsHead{
    render(page){
        const h1 = document.createElement("h1");
        h1.innerHTML = `从页面: ${page}.html`
        const body = document.querySelector("body")
        body.appendChild(h1)
    }
}
export default MsHead