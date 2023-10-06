const OrderModel = require("../models/Order");

exports.getAllOrders = async () => {
  return await OrderModel.find();
};

exports.createOrder = async (order) => {

  if (!order || !order.items || order.items.length<=0){
    throw new Error("order must have items");
  }
  if(order.totalPrice <= 0){
    throw new Error("totalPrice must be higher than 0");
  }
  if(order.totalAmount <=0){
    throw new Error("totalAmount must be higher than 0");
  }
  return await OrderModel.create(order);
};

exports.getOrderById = async (id) => {
  return await OrderModel.findById(id);
};

exports.updateOrderStatus = async (id, order) => {
  if (!['active', 'completed', 'cancelled'].includes(order.status)){
    throw new Error("status have to be active/completed/cancelled")
  }
  return await OrderModel.updateOne({_id: id}, { $set: { status: order.status } });
};

exports.deleteOrder = async (id) => {
  return await OrderModel.findByIdAndDelete(id);
};

exports.getUserOrders = async (userId) => {
    return await OrderModel.find({ userId: userId });
  };


  
