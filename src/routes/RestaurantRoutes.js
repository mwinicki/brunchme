let express = require("express");
const router = express.Router();
let {list,show,create} = require("../controllers/restaurantController");

router.get("/restaurants",list);
router.get("/restaurants/:id",show);
router.post("/restaurants", create);

module.exports = router;