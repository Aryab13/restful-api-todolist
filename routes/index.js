const express = require("express");
const route = express.Router();

route.get("/", (req, res) => {
    res.json("Welcome");
  });
  
route.use("/users", userRoutes);
route.use("/auth", authRoutes);

module.exports = route;