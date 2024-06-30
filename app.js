const express = require('express');
const app = express();
const PORT = process.env.PORT;
const path = require('path');
const productRouter = express.Router();

app.use(express.static(path.join(__dirname,"/public/")))

app.set("views","./src/views");
app.set("view engine", "ejs")

productRouter.route("/").get((req,res) => {
    res.render("products", {
        products: [
            {Title: 'product 1', Describtion: 'product 1', Price: 50},
            {Title: 'product 2', Describtion: 'product 2', Price: 40},
            {Title: 'product 3', Describtion: 'product 3', Price: 45},
            {Title: 'product 4', Describtion: 'product 4', Price: 65},
        ],
    });
});

productRouter.route("/1").get((req,res) => {
    res.send("Hello World !! I'm Product 1");
});

app.use("/products", productRouter)

app.get("/", (req,res) =>{

    res.render('index',{username: 'User1234', customers: ["User1","User2","User3","User4"]});

})

app.listen(PORT, ()=>{
    console.log("listening on port ",PORT);
})