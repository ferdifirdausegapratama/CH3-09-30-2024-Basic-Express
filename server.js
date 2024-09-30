const fs = require("fs")
// const http = require("http")
const express = require("express")

const app = express();

// default URL = Health Check
app.get("/", (req, res) => {
    res.status(200).json({
        "status": "Succes",
        "message": "Application is running good...",
    })
})

// kalau HTTP module kan if(req.url === / "tegar") {}
app.get('/tegar', (req, res) => {
    res.status(200).json({
        "message": "Ping Successfully !"
    })
})

// middleware / handler untuk url yang tidak dapat diakses karena memang tidak ada di aplikasi 
// membuat middlkeware = our own middleware
app.use((req, res, next) => {
    res.status(404).json({
        "status": "Failed",
        "message": "API not exist !!!"
    })
})

app.listen("3000", ()=>{
    console.log("Start Aplikasi Kita Di Port 3000")
})