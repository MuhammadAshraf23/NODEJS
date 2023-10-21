import express from "express"

const router=express.Router();
const users = [
    {
        "id": 1,
        "name": "Muhammad Ashraf",
        "gmail": "ashraf@gmail.com"
    },
    {
        "id": 2,
        "name": "Muhammad",
        "gmail": "muhammad@gmail.com"
    },
    {
        "id": 3,
        "name": "Ahmed",
        "gmail": "ahmed@gmail.com"
    }
]

router.get("/",(req,res)=>{
    res.status(200).send({status:200,user:users})
})

export default router;