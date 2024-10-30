import { Router } from "express";
import { createUser, datas } from "../controller/userConrollers.js";

const router = Router();

//POST
router.post("/", createUser);

//GET
router.get("/", datas);

export default router;
