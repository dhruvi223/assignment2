const { DataTypes } = require("sequelize");

// defined a model for product table
module.exports = (sequelize, DataTypes) => {
    const Product = sequelize.define("product", {
    imageUrl: { type: DataTypes.STRING },
    title: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    category: { type: DataTypes.STRING },
    brandname: {type: DataTypes.STRING},
    rating: {type: DataTypes.STRING},
    price: { type: DataTypes.INTEGER },
    discount: {type: DataTypes.INTEGER},
    thumbnailImage: {type: DataTypes.STRING}
   
  });
  return Product;
};