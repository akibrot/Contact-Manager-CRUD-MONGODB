import express from "express";
import {
  createcontact,
  Delete,
  edit,
  getallcontact,
  welcome,
} from "../controllers/controller.js";

const router = express.Router();

router.get("/", welcome);
router.post("/createcontact", createcontact);
router.get("/getcontact", getallcontact);
router.post("/edit",edit)
router.post("/delete",Delete)
export default router;
