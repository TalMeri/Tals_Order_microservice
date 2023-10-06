const express = require("express");
const {
    getAllOrders,
    createOrder,
    getOrderById,
    updateOrderStatus,
    deleteOrder,
    getUserOrder,

} = require("../controllers/OrderController");

const router = express.Router();

router.route("/").get(getAllOrders).post(createOrder);
router.route("/:id").get(getOrderById).put(updateOrderStatus).delete(deleteOrder);
router.route("/user/:id").get(getUserOrder);

module.exports = router;
