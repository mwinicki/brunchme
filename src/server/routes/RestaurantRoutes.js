let express = require("express");
const router = express.Router();
let {list,show,showZip, showQueried, create} = require("../controllers/restaurantController");

router.get("/api/restaurants",list);
router.get("/api/restaurant/:id",show);
router.get("/api/restaurantsQuery", showQueried);
router.post("/api/restaurants", create);

module.exports = router;