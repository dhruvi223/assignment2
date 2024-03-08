const multer = require("multer");
const path = require("path");
const db = require('./models/model.js')

const express = require("express");
var cors = require("cors");
const app = express();
app.use(cors());
app.use(express.static("public"));
const Product = db.products;

const router = require('./routes/productRouter.js')
app.use("/products", router);

const PORT = 8000;
app.listen(PORT, () => console.log(`Server started at port:${PORT}`));

const crypto = require("crypto");
const { log } = require("console");
const secretKey = crypto.randomBytes(32).toString("hex");

//upload images using multer

const storage = multer.diskStorage({
    destination: (req, res, cb) => {
      cb(null, "public/images");
    },
    filename: (req, file, cb) => {
      cb(
        null,
        file.fieldname + "_" + Date.now() + path.extname(file.originalname)
      );
    },
  });
  const upload = multer({ storage: storage });


  app.post("/uploadimage", upload.single("image"), async (req, res) => {
    const image = req.file.filename;
    const product = await Product.update(
      { imageUrl: image },
      { where: { title: req.body.title } }
    );
  });
  app.post("/uploadthumbimage", upload.single("image"), async (req, res) => {
    const image = req.file.filename;
    const product = await Product.update(
      { thumbnailImage: image },
      { where: { title: req.body.title } }
    );
  });