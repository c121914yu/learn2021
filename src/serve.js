const express = require('express');
const app = express();
const path = require('path')
const fs = require('fs');

app.get("/ms-button/",(req,res) => {
    const htmlSrc = path.resolve(__dirname,"../dist/ms-button.html");
    const htmlFile = fs.readFileSync(htmlSrc,"utf-8")
    res.send(htmlFile)
})

app.use("/static",express.static(path.resolve(__dirname,"../dist"))) //指定静态路径以/static开头

app.listen("3000",() => {
    console.log("服务已开启:3000")
})