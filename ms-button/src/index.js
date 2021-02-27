import MsButton from "./components/MsButton/ms-button"
import MsHead from "./components/MsHead/ms-head"
import lodash from "lodash"

const myH1 = new MsHead()
myH1.render(lodash.upperCase("ms-button"))

const myBtn = new MsButton()
myBtn.render()

console.log(111)