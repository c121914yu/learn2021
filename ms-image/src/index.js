import MsHead from "./components/MsHead/ms-head"
import MsImage from "./components/MsImg/ms-img"
import lodash from "lodash"

const myH1 = new MsHead()
myH1.render(lodash.upperFirst("ms-img"))

const myImg = new MsImage()
myImg.render()

/* 调用MsButton */
import("MsButtonApp/MsButton") 
.then(MsButtonMoule => {
    const MsButton = MsButtonMoule.default //拿到类
    const msButton = new MsButton()
    msButton.render()
})