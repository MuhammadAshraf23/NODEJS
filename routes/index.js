import express from "express"
import product from "./product.js";
import users from './user.js'

const router=express.Router();

router.use('/users',users)
router.use('/product',product)

export default router;