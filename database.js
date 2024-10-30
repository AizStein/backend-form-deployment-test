import mongoose from "mongoose";

export function connectToDatabase() {
  mongoose
    .connect(process.env.MONGODB_URI)
    .then(() => {
      console.log("Database!");
    })
    .catch((err) => {
      console.log(err);
    });
}
