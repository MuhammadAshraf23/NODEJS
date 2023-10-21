import express from "express";
import cors from "cors";   //Allow ports 
import router from "./routes/index.js";

const app = express()
const PORT = process.env.PORT || 8000
app.use(express.json())
app.use(cors())
app.use('/api',router)
// app.get("/users", (req, res) => {
//     res.send(users)

// })
// app.post("/users", (req, res) => {
//     try{

//         const{name,email}=req.body;
//         if(name.trim() && email.trim()){
//             users.push({ id: users.length + 1, ...req.body })
//          return res.status(200).send({status:200, message: "User added successfully" })
//         }else{
//           return res.status(403).send({status:403, message: "Name and Email is required" })
//         }
//     }catch(err){
//         console.log(err.message)
//       return res.status(500).send({status:500, message: err.message })
//     }
// })
// app.delete("/users/:id", (req, res) => {
//     const idToFind = Number(req.params.id);
//     const index = users.findIndex(user => user.id === idToFind);
//     if (index !== -1) {
//         users.splice(index, 1);
//         res.send({ message: "User deleted successfully" });
//     } else {
//         res.status(404).send({ message: "User not found" });
//     }
// });
// //
// app.put("/users/:id", (req, res) => {
//     const idToFind = Number(req.params.id);
//     const index = users.findIndex(user => user.id === idToFind);
//     if (index !== -1) {
//         users.splice(index, 1, { id: idToFind, ...req.body })
//         res.send({ message: "User Update successfully" })
//     } else {
//         res.status(404).send({ message: "User not found" });
//     }
// });
// app.post('/order',(req,res)=>{
//     console.log("orderPalced====",req.body)
//     res.send({ message: "User post successfully" })
// })

app.listen(PORT, () => {
    console.log("Serving is running on", PORT)
}) 
