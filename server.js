var express = require("express")
var app = express()
app.use(express.static(__dirname+'/public'))
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
const cardList = [
    {
        title: "Kitten 1",
        image: "images/kitten-1.png",
        link: "About Kitten 1",
        desciption: "Demo desciption about kitten 1"
    },
    {
        title: "Kitten 2",
        image: "images/kitten-2.png",
        link: "About Kitten 2",
        desciption: "Demo desciption about kitten 2"
    },
    {
        title: "Kitten 3",
        image: "images/kitten-3.png",
        link: "About Kitten 3",
        desciption: "Demo desciption about kitten 3"
    }
]
app.get('/api/projects',(req,res) => {
    res.json({statusCode: 200, data: cardList, message:"Success"})
})
var port = process.env.port || 3000;
    app.listen(port,()=>{
    console.log("App listening to: "+port)
})