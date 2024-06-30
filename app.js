const express = require('express');
const app = express();
const PORT = process.env.PORT;
const path = require('path');
const products = require("./data/products.json");
const productRouter = express.Router();

app.use(express.static(path.join(__dirname, "/public/")))

app.set("views", "./src/views");
app.set("view engine", "ejs")

productRouter.route("/").get((req, res) => {
    res.render("products", {
        products,
    }
    );
});

productRouter.route("/:id").get((req, res) => {
    const id = req.params.id;
    res.render("product", {
        product: products[id],
    })
});

app.use("/products", productRouter)

app.get("/", (req, res) => {

    res.render('index', { username: 'User1234', customers: ["User1", "User2", "User3", "User4"] });

})

app.listen(PORT, () => {
    console.log("listening on port ", PORT);
})