import express from "express";
import cors from "cors";
import router from "./routes/router.js";
import mongoose from "mongoose";
const app = express();
app.use(express.json({ limit: "50mb" }));
app.use(cors());
app.use(router);
mongoose.connect("mongodb://localhost/ContactManager");
const PORT = process.env.PORT || 8080;

app.listen(PORT, () => {
  console.log(`app started at port ${PORT}`);
});
