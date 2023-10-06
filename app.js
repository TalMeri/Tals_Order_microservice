const express = require("express");
const app = express();
const orderRouter = require("./routes/OrderRoutes");

app.use(express.json());
app.use("/order/", orderRouter);

const { MongoMemoryServer } = require("mongodb-memory-server");
const mongoose = require("mongoose");

(async () => {
    const mongod = new MongoMemoryServer();
    await mongod.start();
    const mongoUri = mongod.getUri();
    
    mongoose.connect(mongoUri, {
        useNewUrlParser: true,
        useUnifiedTopology: true,
    }).then((() => console.log('Connected Successfully'))).catch((err) => { console.error(err); })
})();

app.listen(3005, () => {
  console.log("Server is running on port 3005");
});

module.exports = app;