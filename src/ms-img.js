import MsHead from "./components/MsHead/ms-head"
import MsImage from "./components/MsImg/ms-img"
import lodash from "lodash"

const myH1 = new MsHead()
myH1.render(lodash.upperFirst("ms-img"))

const myImg = new MsImage()
myImg.render()
console.log(222)