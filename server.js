import express from "express";
import "dotenv/config";
import cors from "cors";
import { connectToDatabase } from "./database.js";
import userRoute from "./routes/user.js";

const app = express();
const PORT = process.env.PORT || 4000;
//middleware
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

connectToDatabase();

app.use("/api/user", userRoute);
app.listen(PORT, () => {
  console.log("Server is running!");
});
