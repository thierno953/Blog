import express from "express";
import dotenv from "dotenv";
import colors from "colors";
import connectDB from "./config/db";

// Routes
import userRoutes from "./routes/userRoutes";
import {
  errorResponseHandler,
  invalidPathHandler,
} from "./middleware/errorHandler";

//Dot ENV config
dotenv.config();

// mongodb connection
connectDB();

//rest object
const app = express();

//middelwares
app.use(express.json());

//routes
app.get("/", (req, res) => {
  res.send("Server is running...");
});

app.use("/api/users", userRoutes);

app.use(invalidPathHandler);
app.use(errorResponseHandler);

//port
const PORT = process.env.PORT || 5000;

//listen
app.listen(PORT, () => {
  console.log(
    `Node Server Running In ${process.env.NODE_ENV} Mode on port no ${PORT}`
      .bgCyan.white
  );
});
