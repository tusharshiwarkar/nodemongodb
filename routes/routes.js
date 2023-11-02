const express = require("express");
const router = express.Router();
const Product = require("../models/Product");


// Insert an user into database route
router.post("/add",async (req, res) => {
    try{
        const product = new Product({
            title:req.body.title,
            author:req.body.author,
            summary:req.body.summary,
        });
        await product.save();
        req.session.message = {
            type:"success",
            message:"Book added successfully"
        };
        res.redirect('/');
    }catch(err){
        res.json({message:err.message, type:"danger"})
    }
});

router.get("/", (req, res) => {
  res.render("Page", { title: "Home Page" });
});

router.get("/add", (req, res) => {
  res.render("add_books", { title: "Add a Book" });
});

module.exports = router;
