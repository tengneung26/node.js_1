const express = require('express');
const PORT = process.env.PORT;
const path = require('path');

const app = express();
const productsRouter = require("./src/router/productsRouter");

app.use(express.static(path.join(__dirname, "/public/")));

app.set("views", "./src/views");
app.set("view engine", "ejs");

app.use("/products", productsRouter);

app.get("/", (req, res) => {

    res.render('index', { username: 'User1234', customers: ["User1", "User2", "User3", "User4"] });

})

app.listen(PORT, () => {
    console.log("listening on port ", PORT);
})