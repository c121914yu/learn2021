import MsButton from "./components/MsButton/ms-button"
import MsHead from "./components/MsHead/ms-head"
import MsImage from "./components/MsImg/ms-img"

const myBtn = new MsButton()
myBtn.render()

const myH1 = new MsHead()
myH1.render()

const myImg = new MsImage()
myImg.render()

// if(process.env.NODE_ENV === "production"){
//     console.log("生产模式")
// }
// else if(process.env.NODE_EN === "development"){
//     console.log("开发模式")
// }
console.log("余金隆")