//const db = require('../models/productModel')
const db = require('../models/model.js')
const { Op } = require("sequelize");
const Product = db.products;

// get all products
const getAllProduct = async (req, res) => {
    const product = await Product.findAll();
    console.log(product);
    res.status(200).send(product);

  };
  
  // get product by title for search feature
  const getOneProduct = async (req, res) => {
    console.log(req.params.id)
    const product = await Product.findOne({ where: { id: req.params.id } });
    res.status(200).send(product);
  };


  const uploadimage = async (req, res) => {
    const image = req.file.filename;
    const product = await Product.update(
      { imageUrl: image },
      { where: { title: req.body.title } }
    );
  }

  const uploadthumbimage = async (req,res) => {
    const image = req.file.filename;
    const product = await Product.update(
      { thumbnailImage: image },
      { where: { title: req.body.title } }
    );
  }

  module.exports = {getAllProduct, getOneProduct, uploadimage, uploadthumbimage }