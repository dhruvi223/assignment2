module.exports = {
    HOST: "localhost",
    USER: "root",
    PASSWORD: "root",
    DB: "product-listing",
    dialect: "mysql",
  
    pool: {
      max: 5,
      min: 0,
      acquire: 30000,
      idle: 1000,
    },
  };