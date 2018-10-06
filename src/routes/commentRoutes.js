const express = require("express");
const router = express.Router();
const {list,show,create} = require( "../controllers/commentController");


router.get("/comments", list);
router.get("/comment/:id", show);
router.post("/comments", create);


module.exports = router;