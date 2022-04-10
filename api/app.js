const express = require("express"); // include express

const app = express(); //app uses express
const mongoose = require("mongoose"); // include mongoose
const dotenv = require("dotenv");  // include environment
dotenv.config();



//Routing
const userRoute = require("./routes/user"); // User Route
const authRoute = require("./routes/auth"); // Authentication Route
const cropRoute = require("./routes/crop"); // Crop Route

const cors = require("cors");

// Database Connection
mongoose
  .connect(process.env.MONGO_URL)
  .then(() => console.log("DB Connection Successfull!"))
  .catch((err) => {
    console.log(err);
  });




app.use(express.json());   // Helps to understand json file
app.use("/api/auth", authRoute);  // Uses Authenticate Route
app.use("/api/users", userRoute); // Uses User Route
app.use("/api/crop", cropRoute); // Uses Crop Route




// App listens to following port
app.listen(process.env.PORT || 5000, () => {
  console.log(`Server is active !`);
});