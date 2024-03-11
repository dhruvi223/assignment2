const productController = require('../controller/productController')
const router = require("express").Router();
const multer = require("multer");
const path = require("path");

// upload images using multer
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



router.get("/",productController.getAllProduct )
router.get("/:id", productController.getOneProduct)
router.post("/uploadimage", upload.single("image"),productController.uploadimage)
router.post("/uploadthumbimage", upload.single("image"),productController.uploadthumbimage)

module.exports = router;