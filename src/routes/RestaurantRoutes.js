let express = require("express");
const router = express.Router();
let {list,show,showZip, showQueried, create} = require("../controllers/restaurantController");

router.get("/restaurants",list);
router.get("/restaurant/:id",show);
router.get("/restaurantsQuery", showQueried);
router.post("/restaurants", create);

module.exports = router;