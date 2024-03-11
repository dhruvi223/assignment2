const multer = require("multer");
const path = require("path");
const db = require('./models/model.js')

const express = require("express");
var cors = require("cors");
const app = express();

//middleware
app.use(cors());
app.use(express.json());
app.use(express.static("public"));
const Product = db.products;

const router = require('./routes/productRouter.js')
app.use("/products", router);

const PORT = 8000;
app.listen(PORT, () => console.log(`Server started at port:${PORT}`));
